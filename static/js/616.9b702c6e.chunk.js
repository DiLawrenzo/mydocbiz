(self.webpackChunkprompt_react=self.webpackChunkprompt_react||[]).push([[616],{9312:function(t){var e=.1,i="function"===typeof Float32Array;function n(t,e){return 1-3*e+3*t}function s(t,e){return 3*e-6*t}function r(t){return 3*t}function a(t,e,i){return((n(e,i)*t+s(e,i))*t+r(e))*t}function o(t,e,i){return 3*n(e,i)*t*t+2*s(e,i)*t+r(e)}function l(t){return t}t.exports=function(t,n,s,r){if(!(0<=t&&t<=1&&0<=s&&s<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===n&&s===r)return l;for(var h=i?new Float32Array(11):new Array(11),u=0;u<11;++u)h[u]=a(u*e,t,s);function c(i){for(var n=0,r=1;10!==r&&h[r]<=i;++r)n+=e;--r;var l=n+(i-h[r])/(h[r+1]-h[r])*e,u=o(l,t,s);return u>=.001?function(t,e,i,n){for(var s=0;s<4;++s){var r=o(e,i,n);if(0===r)return e;e-=(a(e,i,n)-t)/r}return e}(i,l,t,s):0===u?l:function(t,e,i,n,s){var r,o,l=0;do{(r=a(o=e+(i-e)/2,n,s)-t)>0?i=o:e=o}while(Math.abs(r)>1e-7&&++l<10);return o}(i,n,n+e,t,s)}return function(t){return 0===t?0:1===t?1:a(c(t),n,r)}}},8616:function(t,e,i){"use strict";i.d(e,{UG:function(){return G},Xu:function(){return J}});var n,s,r,a,o,l,h=i(9312),u=i.n(h),c=function(t){this.startX=t.startX,this.startY=t.startY,this.endX=t.endX,this.endY=t.endY,this.totalX=this.endX-this.startX,this.totalY=this.endY-this.startY,this.startMultiplierX=t.startMultiplierX||1,this.endMultiplierX=t.endMultiplierX||1,this.startMultiplierY=t.startMultiplierY||1,this.endMultiplierY=t.endMultiplierY||1};function d(){return d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},d.apply(this,arguments)}!function(t){t.speed="speed",t.translateX="translateX",t.translateY="translateY",t.rotate="rotate",t.rotateX="rotateX",t.rotateY="rotateY",t.rotateZ="rotateZ",t.scale="scale",t.scaleX="scaleX",t.scaleY="scaleY",t.scaleZ="scaleZ",t.opacity="opacity"}(n||(n={})),function(t){t.px="px",t["%"]="%"}(s||(s={})),function(t){t.deg="deg",t.turn="turn",t.rad="rad"}(r||(r={})),function(t){t[""]=""}(a||(a={})),function(t){t.vertical="vertical",t.horizontal="horizontal"}(o||(o={})),function(t){t.ease="ease",t.easeIn="easeIn",t.easeOut="easeOut",t.easeInOut="easeInOut",t.easeInQuad="easeInQuad",t.easeInCubic="easeInCubic",t.easeInQuart="easeInQuart",t.easeInQuint="easeInQuint",t.easeInSine="easeInSine",t.easeInExpo="easeInExpo",t.easeInCirc="easeInCirc",t.easeOutQuad="easeOutQuad",t.easeOutCubic="easeOutCubic",t.easeOutQuart="easeOutQuart",t.easeOutQuint="easeOutQuint",t.easeOutSine="easeOutSine",t.easeOutExpo="easeOutExpo",t.easeOutCirc="easeOutCirc",t.easeInOutQuad="easeInOutQuad",t.easeInOutCubic="easeInOutCubic",t.easeInOutQuart="easeInOutQuart",t.easeInOutQuint="easeInOutQuint",t.easeInOutSine="easeInOutSine",t.easeInOutExpo="easeInOutExpo",t.easeInOutCirc="easeInOutCirc",t.easeInBack="easeInBack",t.easeOutBack="easeOutBack",t.easeInOutBack="easeInOutBack"}(l||(l={}));var p=0;var f=function(){function t(t){var e=t.el.getBoundingClientRect();if(t.view.scrollContainer){var i=t.view.scrollContainer.getBoundingClientRect();e=d({},e,{top:e.top-i.top,right:e.right-i.left,bottom:e.bottom-i.top,left:e.left-i.left})}this.height=t.el.offsetHeight,this.width=t.el.offsetWidth,this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,t.rootMargin&&this._setRectWithRootMargin(t.rootMargin)}return t.prototype._setRectWithRootMargin=function(t){var e=t.top+t.bottom,i=t.left+t.right;this.top-=t.top,this.right+=t.right,this.bottom+=t.bottom,this.left-=t.left,this.height+=e,this.width+=i},t}(),v=[a[""],s.px,s["%"],r.deg,r.turn,r.rad];function g(t,e){void 0===e&&(e=s["%"]);var i={value:0,unit:e};if("undefined"===typeof t)return i;if(!("number"===typeof t||"string"===typeof t))throw new Error("Invalid value provided. Must provide a value as a string or number");if(t=String(t),i.value=parseFloat(t),i.unit=t.match(/[\d.\-+]*\s*(.*)/)[1]||e,!v.includes(i.unit))throw new Error("Invalid unit provided.");return i}var m={ease:[.25,.1,.25,1],easeIn:[.42,0,1,1],easeOut:[0,0,.58,1],easeInOut:[.42,0,.58,1],easeInQuad:[.55,.085,.68,.53],easeInCubic:[.55,.055,.675,.19],easeInQuart:[.895,.03,.685,.22],easeInQuint:[.755,.05,.855,.06],easeInSine:[.47,0,.745,.715],easeInExpo:[.95,.05,.795,.035],easeInCirc:[.6,.04,.98,.335],easeOutQuad:[.25,.46,.45,.94],easeOutCubic:[.215,.61,.355,1],easeOutQuart:[.165,.84,.44,1],easeOutQuint:[.23,1,.32,1],easeOutSine:[.39,.575,.565,1],easeOutExpo:[.19,1,.22,1],easeOutCirc:[.075,.82,.165,1],easeInOutQuad:[.455,.03,.515,.955],easeInOutCubic:[.645,.045,.355,1],easeInOutQuart:[.77,0,.175,1],easeInOutQuint:[.86,0,.07,1],easeInOutSine:[.445,.05,.55,.95],easeInOutExpo:[1,0,0,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};function w(t){if(Array.isArray(t))return u()(t[0],t[1],t[2],t[3]);if("string"===typeof t&&"undefined"!==typeof m[t]){var e=m[t];return u()(e[0],e[1],e[2],e[3])}}var y=Object.values(n),E={speed:"px",translateX:"%",translateY:"%",rotate:"deg",rotateX:"deg",rotateY:"deg",rotateZ:"deg",scale:"",scaleX:"",scaleY:"",scaleZ:"",opacity:""};function _(t,e){var i={};return y.forEach((function(n){var s=E[n];if("number"===typeof(null==t?void 0:t[n])){var r=null==t?void 0:t[n],a=-10*(r||0)+"px",l=g(10*(r||0)+"px"),h=g(a),u={start:l.value,end:h.value,unit:l.unit};e===o.vertical&&(i.translateY=u),e===o.horizontal&&(i.translateX=u)}if(Array.isArray(null==t?void 0:t[n])){var c=null==t?void 0:t[n];if("undefined"!==typeof c[0]&&"undefined"!==typeof c[1]){var d=g(null==c?void 0:c[0],s),p=g(null==c?void 0:c[1],s),f=w(null==c?void 0:c[2]);if(i[n]={start:d.value,end:p.value,unit:d.unit,easing:f},d.unit!==p.unit)throw new Error("Must provide matching units for the min and max offset values of each axis.")}}})),i}function b(t,e,i,n){var s=(i-t)/e;return n&&(s=n(s)),s}function C(t,e,i){return i>=t&&i<=e}function O(t,e){return{value:function(t,e,i,n,s){return(i-e)*(t-n)/(s-n)+e}("function"===typeof t.easing?t.easing(e):e,(null==t?void 0:t.start)||0,(null==t?void 0:t.end)||0,0,1),unit:null==t?void 0:t.unit}}var x=Object.values(n).filter((function(t){return"opacity"!==t}));function I(t,e,i){if(i){var n=function(t,e){return x.reduce((function(i,n){var s=t[n]&&O(t[n],e);return"undefined"===typeof s||"undefined"===typeof s.value||"undefined"===typeof s.unit?i:i+(n+"("+s.value+s.unit+")")}),"")}(t,e),s=function(t,e){var i=t.opacity&&O(t.opacity,e);if("undefined"===typeof i||"undefined"===typeof i.value||"undefined"===typeof i.unit)return"";return""+i.value}(t,e);i.style.transform=n,i.style.opacity=s}}function S(t){var e=t.el;e&&(e.style.transform="",e.style.opacity="")}function Y(t,e,i){var n=e>t,s=i+(Math.abs(t)+Math.abs(e))*(n?-1:1);return Math.max(i/s,1)}function P(t,e){var i=t.start,n=t.end;if("%"===t.unit){var s=e/100;i*=s,n*=s}return{start:i,end:n}}var X={start:0,end:0,unit:""};var A=function(){function t(t){this.el=t.el,this.props=t.props,this.scrollAxis=t.scrollAxis,this.id=++p,this.effects=_(this.props,this.scrollAxis),this.isInView=null,this.progress=0,this._setElementEasing(t.props.easing),function(t,e){var i="transform"+(Object.keys(e).includes("opacity")?",opacity":"");t.style.willChange=i}(t.el,this.effects),this.updatePosition=t.scrollAxis===o.vertical?this._updatePositionVertical:this._updatePositionHorizontal}var e=t.prototype;return e.updateProps=function(t){return this.props=d({},this.props,t),this.effects=_(t,this.scrollAxis),this._setElementEasing(t.easing),this},e.setCachedAttributes=function(t,e){S(this),this.rect=new f({el:this.props.targetElement||this.el,rootMargin:this.props.rootMargin,view:t});var i,n,s,r=(i=this.props,n=this.effects,s=this.scrollAxis,!(i.rootMargin||i.targetElement||i.shouldDisableScalingTranslations)&&!!(n.translateX&&s===o.horizontal||n.translateY&&s===o.vertical));return"number"===typeof this.props.startScroll&&"number"===typeof this.props.endScroll?(this.limits=new c({startX:this.props.startScroll,startY:this.props.startScroll,endX:this.props.endScroll,endY:this.props.endScroll}),this):(r?(this.limits=function(t,e,i,n,s,r){var a=i.translateX||X,l=i.translateY||X,h=P(a,t.width),u=h.start,d=h.end,p=P(l,t.height),f=p.start,v=p.end,g=t.top-e.height,m=t.left-e.width,w=t.bottom,y=t.right,E=1,_=1;s===o.vertical&&(_=E=Y(f,v,e.height+t.height));var b=1,C=1;if(s===o.horizontal&&(C=b=Y(u,d,e.width+t.width)),f<0&&(g+=f*E),v>0&&(w+=v*_),u<0&&(m+=u*b),d>0&&(y+=d*C),m+=n.x,y+=n.x,g+=n.y,w+=n.y,r){var O=n.y+t.top<e.height,x=n.x+t.left<e.width,I=n.y+t.bottom>e.scrollHeight-e.height,S=n.x+t.right>e.scrollWidth-e.height;O&&I&&(E=1,_=1,g=0,w=e.scrollHeight-e.height),x&&S&&(b=1,C=1,m=0,y=e.scrollWidth-e.width),!O&&I&&(g=t.top-e.height+n.y,E=Y(f,v,(w=e.scrollHeight-e.height)-g),_=1,f<0&&(g+=f*E)),!x&&S&&(m=t.left-e.width+n.x,b=Y(u,d,(y=e.scrollWidth-e.width)-m),C=1,u<0&&(m+=u*b)),O&&!I&&(g=0,E=1,_=Y(f,v,(w=t.bottom+n.y)-g),v>0&&(w+=v*_)),x&&!S&&(m=0,b=1,C=Y(u,d,(y=t.right+n.x)-m),d>0&&(y+=d*C))}return new c({startX:m,startY:g,endX:y,endY:w,startMultiplierX:b,endMultiplierX:C,startMultiplierY:E,endMultiplierY:_})}(this.rect,t,this.effects,e,this.scrollAxis,this.props.shouldAlwaysCompleteAnimation),this.scaledEffects=function(t,e){var i=d({},t);return i.translateX&&(i.translateX=d({},t.translateX,{start:i.translateX.start*e.startMultiplierX,end:i.translateX.end*e.endMultiplierX})),i.translateY&&(i.translateY=d({},t.translateY,{start:i.translateY.start*e.startMultiplierY,end:i.translateY.end*e.endMultiplierY})),i}(this.effects,this.limits)):this.limits=function(t,e,i,n){var s=t.top-e.height,r=t.left-e.width,a=t.bottom,o=t.right;return r+=i.x,o+=i.x,s+=i.y,a+=i.y,n&&(i.y+t.top<e.height&&(s=0),i.x+t.left<e.width&&(r=0),a>e.scrollHeight-e.height&&(a=e.scrollHeight-e.height),o>e.scrollWidth-e.width&&(o=e.scrollWidth-e.width)),new c({startX:r,startY:s,endX:o,endY:a})}(this.rect,t,e,this.props.shouldAlwaysCompleteAnimation),this._setElementStyles(),this)},e._updateElementIsInView=function(t){var e=null===this.isInView;t!==this.isInView&&(t?this.props.onEnter&&this.props.onEnter():e||(this._setFinalStylesAndProgress(),this.props.onExit&&this.props.onExit())),this.isInView=t},e._setFinalStylesAndProgress=function(){var t=Math.round(this.progress);this._updateElementProgress(t)},e._setElementStyles=function(){this.props.disabled||I(this.scaledEffects||this.effects,this.progress,this.el)},e._updateElementProgress=function(t){this.progress=t,this.props.onProgressChange&&this.props.onProgressChange(this.progress),this.props.onChange&&this.props.onChange(this),this._setElementStyles()},e._setElementEasing=function(t){this.easing=w(t)},e._updatePositionHorizontal=function(t){if(!this.limits)return this;var e=C(this.limits.startX,this.limits.endX,t.x);if(this._updateElementIsInView(e),!e)return this;var i=b(this.limits.startX,this.limits.totalX,t.x,this.easing);return this._updateElementProgress(i),this},e._updatePositionVertical=function(t){if(!this.limits)return this;var e=C(this.limits.startY,this.limits.endY,t.y);if(this._updateElementIsInView(e),!this.isInView)return this;var i=b(this.limits.startY,this.limits.totalY,t.y,this.easing);return this._updateElementProgress(i),this},t}(),M=function(){function t(t){this.scrollContainer=t.scrollContainer,this.width=t.width,this.height=t.height,this.scrollHeight=t.scrollHeight,this.scrollWidth=t.scrollWidth}var e=t.prototype;return e.hasChanged=function(t){return t.width!==this.width||t.height!==this.height||t.scrollWidth!==this.scrollWidth||t.scrollHeight!==this.scrollHeight},e.setSize=function(t){return this.width=t.width,this.height=t.height,this.scrollHeight=t.scrollHeight,this.scrollWidth=t.scrollWidth,this},t}(),k=function(){function t(t,e){this.x=t,this.y=e,this.dx=0,this.dy=0}return t.prototype.setScroll=function(t,e){return this.dx=t-this.x,this.dy=e-this.y,this.x=t,this.y=e,this},t}();var z=function(){function t(t){var e=t.scrollAxis,i=void 0===e?o.vertical:e,n=t.scrollContainer;this.scrollAxis=i,this.elements=[],this._hasScrollContainer=!!n,this.viewEl=null!=n?n:window;var s=this._getScrollPosition(),r=s[0],a=s[1];this.scroll=new k(r,a),this.view=new M({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:this._hasScrollContainer?n:void 0}),this._ticking=!1,this._supportsPassive=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){return t=!0,!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(i){}return t}(),this._bindAllMethods(),this._addListeners(this.viewEl),this._addResizeObserver(),this._setViewSize()}t.init=function(e){if(!("undefined"!==typeof window))throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");return new t(e)};var e=t.prototype;return e._bindAllMethods=function(){var t=this;["_addListeners","_removeListeners","_getScrollPosition","_handleScroll","_handleUpdateCache","_updateAllElements","_updateElementPosition","_setViewSize","_addResizeObserver","_checkIfViewHasChanged","_getViewParams","getElements","createElement","removeElementById","resetElementStyles","updateElementPropsById","update","updateScrollContainer","destroy"].forEach((function(e){t[e]=t[e].bind(t)}))},e._addListeners=function(t){t.addEventListener("scroll",this._handleScroll,!!this._supportsPassive&&{passive:!0}),window.addEventListener("resize",this._handleUpdateCache,!1),window.addEventListener("blur",this._handleUpdateCache,!1),window.addEventListener("focus",this._handleUpdateCache,!1),window.addEventListener("load",this._handleUpdateCache,!1)},e._removeListeners=function(t){var e;t.removeEventListener("scroll",this._handleScroll,!1),window.removeEventListener("resize",this._handleUpdateCache,!1),window.removeEventListener("blur",this._handleUpdateCache,!1),window.removeEventListener("focus",this._handleUpdateCache,!1),window.removeEventListener("load",this._handleUpdateCache,!1),null==(e=this._resizeObserver)||e.disconnect()},e._addResizeObserver=function(){var t=this;try{var e=this._hasScrollContainer?this.viewEl:document.documentElement;this._resizeObserver=new ResizeObserver((function(){return t.update()})),this._resizeObserver.observe(e)}catch(i){console.warn("Failed to create the resize observer in the ParallaxContoller")}},e._getScrollPosition=function(){return[this._hasScrollContainer?this.viewEl.scrollLeft:window.pageXOffset,this._hasScrollContainer?this.viewEl.scrollTop:window.pageYOffset]},e._handleScroll=function(){var t=this._getScrollPosition(),e=t[0],i=t[1];this.scroll.setScroll(e,i),!this._ticking&&this.elements.length>0&&(this._ticking=!0,window.requestAnimationFrame(this._updateAllElements))},e._handleUpdateCache=function(){this._setViewSize(),this._updateAllElements({updateCache:!0})},e._updateAllElements=function(t){var e=this,i=(void 0===t?{}:t).updateCache;this.elements&&this.elements.forEach((function(t){i&&t.setCachedAttributes(e.view,e.scroll),e._updateElementPosition(t)})),this._ticking=!1},e._updateElementPosition=function(t){t.props.disabled||t.updatePosition(this.scroll)},e._getViewParams=function(){if(this._hasScrollContainer){var t=this.viewEl.offsetWidth,e=this.viewEl.offsetHeight,i=this.viewEl.scrollHeight,n=this.viewEl.scrollWidth;return this.view.setSize({width:t,height:e,scrollHeight:i,scrollWidth:n})}var s=document.documentElement;return{width:window.innerWidth||s.clientWidth,height:window.innerHeight||s.clientHeight,scrollHeight:s.scrollHeight,scrollWidth:s.scrollWidth}},e._setViewSize=function(){return this.view.setSize(this._getViewParams())},e._checkIfViewHasChanged=function(){return this.view.hasChanged(this._getViewParams())},e.getElements=function(){return this.elements},e.createElement=function(t){var e=new A(d({},t,{scrollAxis:this.scrollAxis}));return e.setCachedAttributes(this.view,this.scroll),this.elements=this.elements?[].concat(this.elements,[e]):[e],this._updateElementPosition(e),this._checkIfViewHasChanged()&&this.update(),e},e.removeElementById=function(t){this.elements&&(this.elements=this.elements.filter((function(e){return e.id!==t})))},e.updateElementPropsById=function(t,e){this.elements&&(this.elements=this.elements.map((function(i){return i.id===t?i.updateProps(e):i}))),this.update()},e.resetElementStyles=function(t){S(t)},e.update=function(){var t=this._getScrollPosition(),e=t[0],i=t[1];this.scroll.setScroll(e,i),this._setViewSize(),this._updateAllElements({updateCache:!0})},e.updateScrollContainer=function(t){this._removeListeners(this.viewEl),this.viewEl=t,this._hasScrollContainer=!!t,this.view=new M({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:t}),this._setViewSize(),this._addListeners(this.viewEl),this._updateAllElements({updateCache:!0})},e.destroy=function(){this._removeListeners(this.viewEl),this.elements&&this.elements.forEach((function(t){return S(t)})),this.elements=void 0},t}(),H=i(2791);function Q(){return Q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Q.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},L(t,e)}function W(t,e){if(null==t)return{};var i,n,s={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(s[i]=t[i]);return s}var V=["disabled","easing","endScroll","onChange","onEnter","onExit","onProgressChange","opacity","rootMargin","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","shouldAlwaysCompleteAnimation","shouldDisableScalingTranslations","speed","startScroll","targetElement","translateX","translateY"];function B(t){var e,i=t.disabled,n=t.easing,s=t.endScroll,r=t.onChange,a=t.onEnter,o=t.onExit,l=t.onProgressChange,h=t.opacity,u=t.rootMargin,c=t.rotate,d=t.rotateX,p=t.rotateY,f=t.rotateZ,v=t.scale,g=t.scaleX,m=t.scaleY,w=t.scaleZ,y=t.shouldAlwaysCompleteAnimation,E=t.shouldDisableScalingTranslations,_=t.speed,b=t.startScroll,C=t.targetElement,O=t.translateX,x=t.translateY,I=W(t,V);return{parallaxProps:(e={disabled:i,easing:n,endScroll:s,onChange:r,onEnter:a,onExit:o,onProgressChange:l,opacity:h,rootMargin:u,rotate:c,rotateX:d,rotateY:p,rotateZ:f,scale:v,scaleX:g,scaleY:m,scaleZ:w,shouldAlwaysCompleteAnimation:y,shouldDisableScalingTranslations:E,speed:_,startScroll:b,targetElement:C,translateX:O,translateY:x},Object.keys(e).forEach((function(t){return void 0===e[t]?delete e[t]:{}})),e),rest:I}}var j=H.createContext(null);function Z(t){var e=function(){var t=(0,H.useContext)(j);if("undefined"===typeof window)return null;if(!t)throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");return t}(),i=(0,H.useRef)(null),n=B(t).parallaxProps;!function(t){(0,H.useEffect)((function(){if("undefined"!==typeof window&&!t&&!(t instanceof z))throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.")}),[t])}(e);var s=(0,H.useState)(),r=s[0],a=s[1];return(0,H.useEffect)((function(){var t;if(!(i.current instanceof HTMLElement))throw new Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");var s={el:i.current,props:n};return t=null==e?void 0:e.createElement(s),a(t),function(){t&&(null==e||e.removeElementById(t.id))}}),[]),(0,H.useEffect)((function(){r&&(t.disabled?null==e||e.resetElementStyles(r):null==e||e.updateElementPropsById(r.id,n))}),[t.disabled,t.easing,t.endScroll,t.onChange,t.onEnter,t.onExit,t.onProgressChange,t.opacity,t.rootMargin,t.rotate,t.rotateX,t.rotateY,t.rotateZ,t.scale,t.scaleX,t.scaleY,t.scaleZ,t.shouldAlwaysCompleteAnimation,t.shouldDisableScalingTranslations,t.speed,t.startScroll,t.targetElement,t.translateX,t.translateY]),{ref:i,controller:e,element:r}}var R={height:0};var U=["children","disabled","style","expanded","image","testId"],T={position:"absolute",top:0,left:0,right:0,bottom:0},D=function(t){var e,i=B(t),n=i.parallaxProps,s=i.rest,r=s.style,a=s.expanded,o=void 0===a||a,l=s.testId,h=W(s,U),u=(e=t).image?{backgroundImage:"url("+e.image+")",backgroundPosition:"center",backgroundSize:"cover"}:{},c=o?function(t){if(Array.isArray(t.translateY)){var e=g(t.translateY[0]),i=g(t.translateY[1]);if("px"===e.unit&&"px"===i.unit)return{top:-1*Math.abs(i.value)+"px",bottom:-1*Math.abs(e.value)+"px"};if("%"===e.unit&&"%"===i.unit){var n,s=(null==(n=t.targetElement)?void 0:n.getBoundingClientRect())||R;return{top:-1*Math.abs(.01*s.height*i.value)+"px",bottom:-1*Math.abs(.01*s.height*e.value)+"px"}}}if(t.speed){var r=t.speed||0;return{top:10*Math.abs(r)*-1+"px",bottom:10*Math.abs(r)*-1+"px"}}return{}}(t):{},d=Z(Q({targetElement:t.targetElement,shouldDisableScalingTranslations:!0},n));return H.createElement("div",Object.assign({"data-testid":l,ref:d.ref,style:Q({},u,T,c,r)},h),s.children)},F=["disabled","style","layers"],q={position:"relative",overflow:"hidden",width:"100%"},G=function(t){var e=(0,H.useState)(null),i=e[0],n=e[1],s=(0,H.useRef)(null);(0,H.useEffect)((function(){n(s.current)}),[]);var r=t.style,a=t.layers,o=void 0===a?[]:a,l=W(t,F);return H.createElement("div",Object.assign({ref:s,style:Q({},q,r)},l),o.map((function(t,e){return i&&H.createElement(D,Object.assign({},t,{targetElement:i,key:"layer-"+e,testId:"layer-"+e}))})),t.children)},J=function(t){var e,i;function n(e){var i,n;return(i=t.call(this,e)||this).controller=(n={scrollAxis:e.scrollAxis,scrollContainer:e.scrollContainer},"undefined"===typeof window?null:z.init(n)),i}i=t,(e=n).prototype=Object.create(i.prototype),e.prototype.constructor=e,L(e,i);var s=n.prototype;return s.componentDidUpdate=function(t){t.scrollContainer!==this.props.scrollContainer&&this.controller.updateScrollContainer(this.props.scrollContainer)},s.componentWillUnmount=function(){this.controller=this.controller.destroy()},s.render=function(){var t=this.props.children;return H.createElement(j.Provider,{value:this.controller},t)},n}(H.Component);J.defaultProps={scrollAxis:o.vertical}}}]);
//# sourceMappingURL=616.9b702c6e.chunk.js.map