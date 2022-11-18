"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8738],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=s(a),f=n,y=u["".concat(l,".").concat(f)]||u[f]||c[f]||i;return a?r.createElement(y,o(o({ref:t},p),{},{components:a})):r.createElement(y,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:n,o[1]=m;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},32055:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={date:"2019-07-13T20:00"},o="v1.9.0",m={permalink:"/en/changelog/v1.9.0",source:"@site/changelog/source/v1.9.0.md",title:"v1.9.0",description:"Bug Fixes",date:"2019-07-13T20:00:00.000Z",formattedDate:"July 13, 2019",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2019-07-13T20:00"},prevItem:{title:"v1.10.0",permalink:"/en/changelog/v1.10.0"},nextItem:{title:"v1.8.0",permalink:"/en/changelog/v1.8.0"},listPageLink:"/en/changelog/page/13"},l={authorsImageUrls:[]},s=[{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Features",id:"features",level:3}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"build:")," filter unnecessary files ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/277"},"#277")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/9c1be93"},"9c1be93"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"midway-init:")," Internal employees can not use the external network midway (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/3179434"},"3179434"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"midway-web:")," path might be numeric string within safelyGet() (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/5b48eff"},"5b48eff"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"types:")," use generic as typeof context within KoaMiddleware (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/6c963e5"},"6c963e5"),")")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/config"},"@config"),"(opt) decorator opt accept dot natation (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/4ee1959"},"4ee1959"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"boilerplate:")," add midway-ts-strict-boilerplate (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/8ee325c"},"8ee325c"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"boilerplate:")," enforce kebabCase style for filenames for midway-ts-strict (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/816941b"},"816941b"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"boilerplate:")," update midway-ts-strict (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/c8388f0"},"c8388f0"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/269"},"#269")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"types:")," assign egg","['Context']"," to types of parameter of context (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/ea511fa"},"ea511fa"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"types:")," export and use type MiddlewareParamArray (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/90b4e28"},"90b4e28"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"types:")," update types of utils.ts (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/c76db38"},"c76db38"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/258"},"#258")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"types:")," update webLoader.ts (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/fb534bb"},"fb534bb"),")")))}c.isMDXComponent=!0}}]);