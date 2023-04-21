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
	let inventedItems: ResearchItem; 
	let newUninventedItems: ResearchItem[] = [];
	
	if(park.cash < (price * 10)) {
		ui.showError("자금 부족","뽑기를 수행할 돈이 부족합니다.");
	} else {
		park.cash -= (price * 10);

		if (Math.random() < (prob / 100)) {
			park.research.uninventedItems = shuffle(park.research.uninventedItems);
			inventedItems = park.research.uninventedItems[0];
			newUninventedItems = park.research.uninventedItems.slice(1);
			park.research.inventedItems = [...park.research.inventedItems, inventedItems];
			park.research.uninventedItems = newUninventedItems;

			if(inventedItems.type == "ride") park.postMessage({type:"research", text:"{GREEN}새로운 탈것을 뽑았습니다!"});
			else park.postMessage({type:"research", text:"{GREEN}새로운 풍경을 뽑았습니다!"});
		} else {
			park.postMessage({type:"blank", text:"{RED}가챠 실패로 아무것도 얻지 못했습니다..."});
		}
	}
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
					onClick: () => {pickResearch()}
				}),
				button({
					text: `${getMaxCount(10)}뽑`,
					height: "28px",
					onClick: () => {
						const maxCount = getMaxCount(10);
						if(park.cash < (maxCount * (price * 10))) {
							ui.showError("자금 부족","뽑기를 수행할 돈이 부족합니다.");
						}

						for (let i = 0; i < maxCount; i++) {
							pickResearch();
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
	authors: ["Lastorder-DC"],
	type: "remote",
	licence: "MIT",
	targetApiVersion: 70,
	main: () =>
	{
		context.setInterval(() => {park.research.funding = 0;}, 1000)
		ui.registerMenuItem("연구 가챠", () => gachaWindow.open());
	}
});