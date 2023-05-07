(function () {
    'use strict';

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var t$5=function(o,r){return t$5=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o;}||function(t,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);},t$5(o,r)};function o$5(o,r){if('function'!=typeof r&&null!==r)throw new TypeError('Class extends value '+r+' is not a constructor or null');function n(){this.constructor=o;}t$5(o,r),o.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n);}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function n$6(n){return void 0===n}function r$b(n){return null===n}function u$3(n){return Array.isArray(n)}function o$4(n){return c$2(n,'function')}function e$7(n){return c$2(n,'number')}function i$7(n){return c$2(n,'object')}function c$2(n,r){return typeof n===r}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var o$3=[4,0],e$6=[1,2],h$2=[0,0],r$a={top:h$2,right:h$2,bottom:h$2,left:h$2};function p$4(i){n$6(i.height)&&(i.height=14);}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function n$5(n){return u$2(n,0)}function r$9(n){return u$2(n,1)}function t$4(n){return u$2(n,2)}function u$2(n,r){return n[1]===r}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function e$5(r){if(n$6(r))return r;if(e$7(r))return [r,0];var e=r.trim(),i=e.length;if(i>1){var o=i-1,u=void 0,s=e[o];if('w'===s?u=2:'%'===s?u=1:i>2&&(o--,'x'===s&&'p'===e[o]&&(u=0)),!n$6(u))return [parseFloat(e.substring(0,o)),u]}throw Error('Value \''+r+'\' is not a valid scale.')}function i$6(r,t){return e$5(r)||t}function o$2(t){return i$6(t,h$2)}function u$1(r,t,n,e){switch(void 0===e&&(e=0),r[1]){case 2:return (n?r[0]/n:1)*t*(100-e)*.01;case 1:return .01*r[0]*t;default:return r[0]}}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var i$5=['y','x'],e$4=['height','width'],a$2=['top','left'],p$3=['bottom','right'];function u(t){return !!t&&(0!==t.top[0]||0!==t.bottom[0]||0!==t.left[0]||0!==t.right[0])}function f$2(t,r,n,o){c$1(t,1,r,o),c$1(t,0,n,o);}function c$1(i,u,f,c){var l=e$4[u],g=c[a$2[u]],h=c[p$3[u]],v=i[l]-m(f,g,h,n$5),b=m(f,g,h,r$9),d=m(f,g,h,t$4),j=u$1(f,v,d,b);return i[l]=j,s$1(i,u,c,v,d,b)}function s$1(t,r,n,o,u,f){return l$3(t,n,o,u,f,i$5[r],e$4[r],a$2[r],p$3[r])}function l$3(t,r,n,i,e,a,p,u,f){var c=u$1(r[u],n,i,e),s=u$1(r[f],n,i,e);return t[a]+=c,c+t[p]+s}function m(t,r,n,o){var i=0;return o(t)&&(i+=t[0]),o(r)&&(i+=r[0]),o(n)&&(i+=n[0]),i}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function f$1(f,s){var a;if(void 0===s&&(s=r$a),n$6(f))a=f;else if(u$3(f)){var p=f.length;if(2===p){var m=o$2(f[0]),g=o$2(f[1]);a=l$2(m,g,m,g);}else {if(4!==p)throw Error('Padding array of unknown length: '+p+'. Only lengths of 2 or 4 are supported.');a=l$2(o$2(f[0]),o$2(f[1]),o$2(f[2]),o$2(f[3]));}}else if(i$7(f))a=l$2(i$6(f.top,s.top),i$6(f.right,s.right),i$6(f.bottom,s.bottom),i$6(f.left,s.left));else {var h=o$2(f);a=l$2(h,h,h,h);}return a||s}function l$2(t,r,o,e){return {top:t,right:r,bottom:o,left:e}}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var r$8=Math.floor(1048575*Math.random())<<10;function t$3(){return (r$8++).toString(36)}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function r$7(r,e){return r.subscribe(e)}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var i$4=function(i,t,r,o){this._id=i,this._store=t,this._callback=r,this._unsubscribe=r$7(t,o);};

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function e$3(e){if(!e||!i$7(e))return !1;var i=e;return o$4(i.get)&&o$4(i.subscribe)}function i$3(i){return !(!i||!i$7(i))&&e$3(i)&&o$4(i.set)}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function r$6(r){return !(!r||!i$7(r))&&i$3(r.twoway)}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function r$5(r){return r$6(r)?r.twoway:r}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var r$4=function(){function r(){this._bindings=[],this._source=null;}return r.prototype.add=function(t,n,i,o){this.on(t,i,(function(t,i){var r=o?o(i):i;t[n]=r;}));},r.prototype.callback=function(n,i,o,r,s){r$6(o)?n[i]=function(t){var n=s?s(t):t;o.twoway.set(n),r&&r(n);}:r&&(n[i]=s?function(t){return r(s(t))}:r);},r.prototype.twoway=function(t,n,i,o,r){this.add(t,n,o),this.callback(t,i,o,r);},r.prototype.on=function(t,r,s){var e=r$5(r);if(e$3(e)){var u=this._createBinding(t,e,s);this._bindings.push(u),s(t,e.get());}else n$6(e)||s(t,e);},r.prototype._unbind=function(){this._source=null;},r.prototype._hasBindings=function(){return this._bindings.length>0},r}();

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var t$2=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return o$5(t,n),t.prototype._bind=function(r){var i=r._description;i&&this._refresh(i),this._source=r;},t.prototype._createBinding=function(r,n,t){var o=this;return new i$4('',n,t,(function(r){var i=o._source;i&&i._window&&t(i._window,r);}))},t.prototype._refresh=function(r){var i=this._bindings;if(i)for(var n=0,t=i;n<t.length;n++){var o=t[n];o._callback(r,o._store.get());}},t}(r$4);

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function n$4(n){for(var r={},e=0,t=n;e<t.length;e++){var a=t[e],o=a.name;o&&!(o in r)&&(r[o]=a);}return r}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var r$3=function(){function r(i,t){var n=this;this._window=null,this._redrawNextTick=!1;var d=i.width,r=i.height,w=i.minWidth,a=i.maxWidth,_=i.minHeight,u=i.maxHeight,c=i.padding,p={classification:'fui-'+t$3(),title:'',colours:i.colours,width:d,height:r,minWidth:w,minHeight:_,maxWidth:a,maxHeight:u,onUpdate:function(){n._checkRedraw(),n._invoke((function(i){return i.update()}));},onClose:function(){n._window=null,n.close();}};this._description=p,this._width=d,this._height=r,this._position=i.position,this._padding=f$1(n$6(c)?5:c),(w||_||a||u)&&function(i,t,n,o,e){t.minWidth||(t.minWidth=o),t.maxWidth||(t.maxWidth=o),t.minHeight||(t.minHeight=e),t.maxHeight||(t.maxHeight=e),n.push((function(){var t=ui.getWindow(i._description.classification),n=t.width,o=t.height;n===i._width&&o===i._height||(i._width=n,i._height=o,i._layout());}));}(this,p,t,d,r);var g=new t$2;g.add(p,'title',i.title),this._windowBinder=g._hasBindings()?g:null;}return r.prototype._checkRedraw=function(){this._window&&this._redrawNextTick&&(this._layout(),this._redrawNextTick=!1);},r.prototype._getWindowWidgetRectangle=function(o){void 0===o&&(o=15);var e=this._padding,h={x:0,y:o,width:this._width-1,height:this._height-(o+1)};return u(e)&&f$2(h,e$6,e$6,e),h},r.prototype.open=function(){if(this._window)this.focus();else {var i=this._description;!function(i,t,n){n&&'default'!==n&&('center'===n?(t.x=ui.width/2-i._width/2,t.y=ui.height/2-i._height/2):(t.x=n.x,t.y=n.y));}(this,i,this._position);var t=this._windowBinder;t&&t._bind(this);var n=ui.openWindow(i),o=n$4(n.widgets);this._window=n,this._invoke((function(i){return i.open(o)})),this._layout();}},r.prototype.close=function(){this._invoke((function(i){return i.close()})),this._window&&this._window.close();var i=this._windowBinder;i&&i._unbind(),this._window=null;},r.prototype.focus=function(){this._window&&this._window.bringToFront();},r}();

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var t$1=function(){function t(t,i){this._position=t.parse(i),this._parent=t;}return t.prototype.position=function(){return this._position},t}();

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var o$1;function f(n){return (n$6(n.width)?1:0)|(n$6(n.height)?2:0)}function l$1(n,r,t){return c(n,r,(function(n){return d$1(t,n)}))}function a$1(n,r,t,i,u){return c(n,r,(function(n){return g(t,i,u,n)}))}function c(n,r,t){return !!(3&r&&p$2(n,1&r,1,t)|p$2(n,2&r,0,t))}function p$2(n,r,u,e){var o;if(r&&!r$b(o=e(u))){var f=e$4[u],l=n[f];if(l[0]!==o||0!==l[1])return n[f]=[o,0],1}return 0}function d$1(n,r){var t=n[e$4[r]],o=n.padding,f=o[a$2[r]],l=o[p$3[r]];return h$1(t,f,l)?t[0]+f[0]+l[0]:null}function g(r,t,o,f){var l,a,c=o===f,p=0;if(c){if(!n$5(t))return null;p+=t[0]*(r.length-1);}for(var d=e$4[f],g=a$2[f],s=p$3[f],v=0,m=r;v<m.length;v++){var j=m[v],H=j[d],A=j.padding,C=A[g],W=A[s];if(!h$1(H,C,W))return null;l=p,a=H[0]+C[0]+W[0],p=c?l+a:l<a?a:l;}return p}function h$1(r,t,i){return n$5(r)&&n$5(t)&&n$5(i)}!function(n){n[n.Width=1]='Width',n[n.Height=2]='Height',n[n.All=3]='All',n[n.Count=4]='Count';}(o$1||(o$1={}));

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function l(e,r,i,l,g){var u=e.length;if(u)for(var m=1===i?0:1,f=function(e,r,i,t){var n=e.length,s={_elements:Array(n),_requestedPixels:0,_requestedPercentile:0,_requestedWeightTotal:0};p$1(r,s,n-1);for(var d=0;d<n;d++){var l=e[d],g=l.padding,u={_mainSize:l[e$4[i]],_otherSize:l[e$4[t]],_padding:g};s._elements[d]=u;var m=u._mainSize,f=u._padding[a$2[i]],q=u._padding[p$3[i]];p$1(m,s),p$1(f,s),p$1(q,s);}return s}(e,l,i,m),q=r[e$4[i]]-f._requestedPixels,v=f._requestedWeightTotal,c=f._requestedPercentile,h=u$1(l,q,v,c),S=0,P=0;P<u;P++){var z=f._elements[P],x=S+r[i$5[i]],j=u$1(z._mainSize,q,v,c),T=z._padding,W={};W[i$5[i]]=x,W[e$4[i]]=j,W[i$5[m]]=r[i$5[m]],W[e$4[m]]=r[e$4[m]],S+=s$1(W,i,T,q,v,c),c$1(W,m,z._otherSize,T),g(P,W),S+=h;}}function p$1(t,a,n){void 0===n&&(n=1);var s=t[0]*n;t$4(t)?a._requestedWeightTotal+=s:n$5(t)?a._requestedPixels+=s:r$9(t)&&(a._requestedPercentile+=s);}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function n$3(n,p){return {width:i$6(n.width,e$6),height:i$6(n.height,e$6),padding:f$1(n.padding,p||r$a)}}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var h;!function(i){i[i.RecalculateFromChildren=4]='RecalculateFromChildren';}(h||(h={}));var d=function(r){function p(i,e,l){var a,p,u=r.call(this,i,l)||this;u.parse=n$3,'direction'in l&&(a=l.direction),u._direction=a||0,'spacing'in l&&(p=e$5(l.spacing)),u._spacing=p||o$3;for(var f$1=u$3(l)?l:l.content,h=f$1.length,d=Array(h),m=0;m<h;m++){var _=(0, f$1[m])(u,e);d[m]=_;}return u._flags=4|f(l),u._children=d,u}return o$5(p,r),p.prototype.recalculate=function(){this._flags|=4,3&this._flags&&this._parent.recalculate();},p.prototype._recalculateSizeFromChildren=function(){if(4&this._flags){this._flags&=-5;var i=this._children.filter((function(i){return !i.skip})),t=i.map((function(i){return i.position()}));a$1(this._position,this._flags,t,this._spacing,this._direction),this._renderableChildren=i,this._renderableChildrenPositions=t;}},p.prototype.position=function(){return this._recalculateSizeFromChildren(),this._position},p.prototype.layout=function(i,t){var r=this;l(this._renderableChildrenPositions,t,this._direction,this._spacing,(function(t,n){r._renderableChildren[t].layout(i,n);}));},p}(t$1);

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var n$2=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return o$5(n,e),n.prototype._bind=function(i){var t=i._activeWidgets;t&&this._refresh(t),this._source=i;},n.prototype._createBinding=function(i,e,n){var o=this,s=i.name||(i.name=t$3());return new i$4(s,e,n,(function(i){var t=o._source;if(t&&t.isOpen()){var r=t.getWidget(s);r&&n(r,i);}}))},n.prototype._refresh=function(i){var t=this._bindings;if(t)for(var r=0,e=t;r<e.length;r++){var n=e[r];n._callback(i[n._id],n._store.get());}},n}(r$4);

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function n$1(n,o){for(var r=0,t=n.length;r<t;r++)n[r](o);}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var o=function(){function o(t,e,s,r){this._padding=t,this._open=e,this._update=s,this._close=r,this.parse=n$3,this.recalculate=this.redraw,this._redrawNextTick=!0;}return o.prototype.layout=function(i){var r=this._activeWidgets;if(r){var o=this._padding;u(o)&&f$2(i,e$6,e$6,o),this._redrawNextTick=!1,this._area=i;var a=this._body;a._recalculateSizeFromChildren(),a.layout(r,i);}},o.prototype.redraw=function(){this._activeWidgets&&(this._redrawNextTick=!0);},o.prototype.getWidget=function(t){var i,e=this._activeWidgets;return e&&(i=e[t]),i||null},o.prototype.isOpen=function(){return !!this._activeWidgets},o.prototype.open=function(t){this._activeWidgets=t;var i=this._binder;i&&i._bind(this),n$1(this._open,this);},o.prototype.update=function(){this._redrawNextTick&&this._area&&this.layout(this._area),n$1(this._update,this);},o.prototype.close=function(){n$1(this._close,this);var t=this._binder;t&&t._unbind(),this._activeWidgets=void 0;},o}();

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var e$2=function(){function e(e,s,r,p,d$1,h){this.open=p,this.update=d$1,this.close=h,this._widgets=[];var u=f$1(r),a=new o(u,p,d$1,h),l=new n$2,f=e.onOpen,m=e.onUpdate,b=e.onClose;this.binder=l,this.context=a,a._body=new d(a,this,s),a._binder=l._hasBindings()?l:null,f&&p.push(f),m&&d$1.push(m),b&&h.push(b);}return e.prototype.add=function(t){this._widgets.push(t);},e.prototype.on=function(t,i){this[t].push(i);},e}();

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function r$2(t){return new i$2(t)}var i$2=function(o){function r(t){var r=this,i=[];r=o.call(this,t,i)||this;var n=new e$2(t,t,void 0,[],i,[]);return r._description.widgets=n._widgets,r._frame=n.context,r}return o$5(r,o),r.prototype._invoke=function(t){t(this._frame);},r.prototype._layout=function(){var t=this._getWindowWidgetRectangle();this._frame.layout(t);},r}(r$3);

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function r$1(r,s){e$3(r)?(r$7(r,s),s(r.get())):n$6(r)||s(r);}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var t=Math.round;

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function i$1(i,h,e){var o=i[h];o.x=t(e.x),o.y=t(e.y),o.width=t(e.width),o.height=t(e.height);}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var s=function(e){function s(i,r,s,n){var a=e.call(this,r,n)||this;a.name=t$3(),a.x=0,a.y=0,a.width=0,a.height=0,a.type=i;var l=s.binder,d=n.visibility;l.add(a,'tooltip',n.tooltip),l.add(a,'isDisabled',n.disabled),l.add(a,'isVisible',d,(function(i){return 'visible'===i}));var u=s.context;return r$1(d,(function(i){var t=a.skip,o='none'===i;a.skip=o,(t||o)&&(r.recalculate(),u.redraw());})),s.add(a),a}return o$5(s,e),s.prototype.layout=function(i,t){i$1(i,this.name,t);},s}(t$1);

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    var a;!function(t){t[t.RecalculateFromChildren=4]='RecalculateFromChildren',t[t.AddTitlePadding=8]='AddTitlePadding';}(a||(a={}));var p=function(s){function n(t,i,e){var r,l=this,n='groupbox',a=f(e);if('content'in e){l=s.call(this,n,t,i,e)||this,r=e.content;var p=i.binder,h=e.text;p.add(l,'text',h),a|=h?8:0;}else l=s.call(this,n,t,i,{})||this,r=e;l._flags=4|a;var c=r(l,i);return l._child=c,l}return o$5(n,s),n.prototype.parse=function(t){var o=f$1(6);return 8&this._flags&&(o.top=[15,0]),n$3(t,o)},n.prototype.recalculate=function(){this._flags|=4,3&this._flags&&this._parent.recalculate();},n.prototype._recalculateSizeFromChildren=function(){4&this._flags&&(this._flags&=-5,l$1(this._position,this._flags,this._child.position()));},n.prototype.position=function(){return this._recalculateSizeFromChildren(),this._position},n.prototype.layout=function(t,i){var o=8&this._flags?0:4;i.y-=o,i.height+=o,s.prototype.layout.call(this,t,i),i.y+=o,i.height-=o;var e=this._child.position(),r=e.width,n=e.height,a=e.padding;f$2(i,r,n,a),this._child.layout(t,i);},n}(s);

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function e$1(r){return function(t,e){return new n(t,e,r)}}var n=function(t){function e(r,e,n){var o=t.call(this,'button',r,e,n)||this,i=e.binder;return i.add(o,'text',n.text),i.add(o,'image',n.image),i.add(o,'border',n.border),i.add(o,'isPressed',n.isPressed),o.onClick=n.onClick,o}return o$5(e,t),e}(s);

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function i(i){var o,r,c,f=0;if('content'in i){o=i.content,r=i.gap,c=i.spacing;var p$1=i.direction;n$6(p$1)||(f=p$1);}else o=i;var a=i,s={content:o,direction:f,spacing:c,padding:r};return a.content=function(n,e){return new d(n,e,s)},function(n,t){return new p(n,t,a)}}

    // Get the latest version: https://github.com/Basssiiie/OpenRCT2-FlexUI
    function r(t){return p$4(t),function(n,o){return new e(n,o,t)}}var e=function(n){function o(t,o,r){var e=n.call(this,'label',t,o,r)||this;e.text='';var i=o.binder;return i.add(e,'text',r.text),i.add(e,'textAlign',r.alignment),e}return o$5(o,n),o.prototype.layout=function(t,o){o.y+=2,n.prototype.layout.call(this,t,o);},o}(s);

    /// <reference path="openrct2.d.ts" />
    // ==================== 설정 부분 시작 ====================
    var prob = 20; // 성공 확률(단위 %)
    var price = 100;
    var getMaxCount = function (maxCount) { return Math.min(maxCount, park.research.uninventedItems.length); };
    // flag indicating availability for new action
    var isStandby = true;
    // handle of interval function executed on standby
    var standbyHandle;
    function shuffle(array) {
        var _a;
        var currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            _a = [
                array[randomIndex], array[currentIndex]
            ], array[currentIndex] = _a[0], array[randomIndex] = _a[1];
        }
        return array;
    }
    var pickResearch = function () {
        if (park.cash < (price * 10)) {
            ui.showError("자금 부족", "뽑기를 수행할 돈이 부족합니다.");
        }
        else if (park.research.uninventedItems.length == 0) {
            ui.showError("연구 불가", "더 이상 연구를 할 수 없습니다.");
        }
        else {
            park.cash -= (price * 10);
            if (Math.random() < (prob / 100)) {
                // if on initial research, finish initial research and move on to completing research
                // this step is necessary since OpenRCT2 sets park.research.expectedItem only after initial research
                if (park.research.stage === "initial_research") {
                    initialResearch();
                }
                else {
                    completeResearch();
                }
            }
            else {
                park.postMessage({ type: "blank", text: "{RED}가챠 실패로 아무것도 얻지 못했습니다..." });
            }
        }
    };
    var onStandby = function () {
        park.research.funding = 0; // ResearchFundingLevel.None
        park.research.progress = 0;
    };
    // set progress to maximum to minimize research time 
    var initialResearch = function () {
        isStandby = false;
        // clear interval to prevent configuration collision
        context.clearInterval(standbyHandle);
        park.research.funding = 3; // ResearchFundingLevel.Maximum
        park.research.progress = 65535;
        var handle = context.setInterval(function () {
            // probe to see if research moved to next stage
            // if on next stage, execute function to finish research and remove probe
            if (park.research.stage === "designing") {
                completeResearch();
                context.clearInterval(handle);
            }
        }, 500); // 20 tick
    };
    // skip designing stage and set state to be right before finishing research
    var completeResearch = function () {
        isStandby = false;
        park.research.funding = 3; // ResearchFundingLevel.Maximum
        park.research.stage = "completing_design";
        park.research.progress = 65535;
        park.research.uninventedItems = shuffle(park.research.uninventedItems);
        var handle = context.setInterval(function () {
            if (!park.research.expectedItem) {
                isStandby = true;
                standbyHandle = context.setInterval(onStandby, 1000);
                context.clearInterval(handle);
            }
        }, 500); // 20 tick
    };
    var gachaWindow = r$2({
        title: "오픈롤코 가챠",
        width: 200,
        height: 100,
        content: [
            r({
                text: "1\uBF51\uB2F9 ".concat(price, "$ / \uD655\uB960 ").concat(prob, "%"),
            }),
            i({
                text: "가챠",
                direction: 1 /* LayoutDirection.Horizontal */,
                content: [
                    e$1({
                        text: "1뽑",
                        height: "28px",
                        // allow picking only when standby
                        onClick: function () {
                            isStandby ? pickResearch() : ui.showError("연구 불가", "뽑기가 진행중 입니다.");
                        }
                    }),
                    e$1({
                        text: "".concat(getMaxCount(10), "\uBF51"),
                        height: "28px",
                        // allow picking only when standby
                        onClick: function () {
                            if (isStandby) {
                                var maxCount_1 = getMaxCount(10);
                                if (park.cash < (maxCount_1 * (price * 10))) {
                                    ui.showError("자금 부족", "뽑기를 수행할 돈이 부족합니다.");
                                }
                                else if (park.research.uninventedItems.length == 0) {
                                    ui.showError("연구 불가", "더 이상 연구를 할 수 없습니다.");
                                }
                                else {
                                    var i_1 = 0;
                                    var handle_1 = context.setInterval(function () {
                                        if (isStandby) {
                                            pickResearch();
                                            i_1++;
                                        }
                                        else {
                                            // attempt to complete unsuccessful research
                                            completeResearch();
                                        }
                                        if (i_1 >= maxCount_1)
                                            context.clearInterval(handle_1);
                                    }, 1600);
                                }
                            }
                            else {
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
        main: function () {
            // 로컬 플레이시만 동작시킨다
            if (network.mode == "none") {
                standbyHandle = context.setInterval(onStandby, 1000);
                ui.registerMenuItem("연구 가챠", function () { return gachaWindow.open(); });
            }
        }
    });

})();
