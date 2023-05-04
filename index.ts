/// <reference path="openrct2.d.ts" />
// ==================== 설정 부분 시작 ====================
const prob = 20; // 성공 확률(단위 %)
const price = 100;
// ==================== 설정 부분 끝 ====================

import
{
	button, groupbox, label, LayoutDirection, window
}
from "openrct2-flexui";

const getMaxCount = (maxCount: number) => { return Math.min(maxCount, park.research.uninventedItems.length); }

// flag indicating availability for new action
let isStandby = true;
// handle of interval function executed on standby
let standbyHandle: number;

function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
};

const pickResearch = () => {
	if(park.cash < (price * 10)) {
		ui.showError("자금 부족","뽑기를 수행할 돈이 부족합니다.");
	} else if (park.research.uninventedItems.length == 0) {
		ui.showError("연구 불가", "더 이상 연구를 할 수 없습니다.");
	} else {
		park.cash -= (price * 10);

		if (Math.random() < (prob / 100)) {
			// if on initial research, finish initial research and move on to completing research
			// this step is necessary since OpenRCT2 sets park.research.expectedItem only after initial research
			if (park.research.stage === "initial_research") {
				initialResearch();
			} else {
				completeResearch();
			}
		} else {
			park.postMessage({type:"blank", text:"{RED}가챠 실패로 아무것도 얻지 못했습니다..."});
		}
	}
}

const onStandby = () => {
	park.research.funding = 0; // ResearchFundingLevel.None
	park.research.progress = 0;
}

// set progress to maximum to minimize research time 
const initialResearch = () => {
	isStandby = false;
	// clear interval to prevent configuration collision
	context.clearInterval(standbyHandle);

	park.research.funding = 3; // ResearchFundingLevel.Maximum
	park.research.progress = 65535;
	let handle = context.setInterval(() => {
		// probe to see if research moved to next stage
		// if on next stage, execute function to finish research and remove probe
		if (park.research.stage === "designing") {
			completeResearch();
			context.clearInterval(handle);
		}
	}, 500); // 20 tick
}

// skip designing stage and set state to be right before finishing research
const completeResearch = () => {
	isStandby = false;
	park.research.funding = 3; // ResearchFundingLevel.Maximum
	park.research.stage = "completing_design";
	park.research.progress = 65535;
	park.research.uninventedItems = shuffle(park.research.uninventedItems);
	let handle = context.setInterval(() => {
		if (!park.research.expectedItem) {
			isStandby = true;
			standbyHandle = context.setInterval(onStandby, 1000);
			context.clearInterval(handle);
		}
	}, 500); // 20 tick
}

const gachaWindow = window({
	title: "오픈롤코 가챠",
	width: 200,
	height: 100,
	content: [
		label({
			text: `1뽑당 ${price}$ / 확률 ${prob}%`,
		}),
		groupbox({
			text: "가챠",
			direction: LayoutDirection.Horizontal,
			content: [
				button({
					text: "1뽑",
					height: "28px",
					// allow picking only when standby
					onClick: () => {
						isStandby ? pickResearch() : ui.showError("연구 불가", "뽑기가 진행중 입니다.");
					}
				}),
				button({
					text: `${getMaxCount(10)}뽑`,
					height: "28px",
					// allow picking only when standby
					onClick: () => {
						if (isStandby) {
							const maxCount = getMaxCount(10);
							if(park.cash < (maxCount * (price * 10))) {
								ui.showError("자금 부족","뽑기를 수행할 돈이 부족합니다.");
							} else if (park.research.uninventedItems.length == 0) {
								ui.showError("연구 불가", "더 이상 연구를 할 수 없습니다.");
							} else {
								let i = 0;
								let handle = context.setInterval(() => {
									if (isStandby) {
										pickResearch();
										i++;
									} else {
										// attempt to complete unsuccessful research
										completeResearch();
									}
									
									if (i >= maxCount) context.clearInterval(handle);
								}, 1600);
							}
						} else {
							ui.showError("연구 불가", "뽑기가 진행중 입니다.");
						}
					}
				})
			]
		})
	]
});

registerPlugin({
	name: "오픈롤코 가챠",
	version: "0.1.0",
	authors: ["Lastorder-DC", "paulkim0516"],
	type: "remote",
	licence: "MIT",
	targetApiVersion: 70,
	main: () =>
	{
		// 로컬 플레이시만 동작시킨다
		if(network.mode == "none") {
			standbyHandle = context.setInterval(onStandby, 1000);
			ui.registerMenuItem("연구 가챠", () => gachaWindow.open());
		}
	}
});