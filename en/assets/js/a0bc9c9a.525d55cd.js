"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13797],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),l=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,f=u["".concat(m,".").concat(d)]||u[d]||p[d]||i;return a?r.createElement(f,c(c({ref:t},s),{},{components:a})):r.createElement(f,c({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[u]="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61057:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const i={date:"2021-03-03T18:00"},c="v2.8.4",o={permalink:"/en/changelog/v2.8.4",source:"@site/changelog/source/v2.8.4.md",title:"v2.8.4",description:"Bug Fixes",date:"2021-03-03T18:00:00.000Z",formattedDate:"March 3, 2021",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2021-03-03T18:00"},prevItem:{title:"v2.8.5",permalink:"/en/changelog/v2.8.5"},nextItem:{title:"v2.8.3",permalink:"/en/changelog/v2.8.3"},listPageLink:"/en/changelog/page/6"},m={authorsImageUrls:[]},l=[{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Features",id:"features",level:3}],s={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"case (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/df2efb6837ee1bdb877825bc7869b82d9e220fb1"},"df2efb6"),")"),(0,n.kt)("li",{parentName:"ul"},"check case (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/4df51ed64157a7b3f76bc050825cf2b59182cc07"},"4df51ed"),")"),(0,n.kt)("li",{parentName:"ul"},"get singleton from shared context (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/3ebcf13ab0f4151e507b51cda219682859f648d3"},"3ebcf13"),")"),(0,n.kt)("li",{parentName:"ul"},"koa-router support wildcard (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/881"},"#881"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/0321497421de648dc791ceb60316c78026dc3cf9"},"0321497"),")"),(0,n.kt)("li",{parentName:"ul"},"multi framework run configuration (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/44abb6c710e044d9256325c721cdeb8d9a7e0a7a"},"44abb6c"),")"),(0,n.kt)("li",{parentName:"ul"},"multi framework run configuration (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/db98d6aba820aa86982b491835bb4167b3a1b6b2"},"db98d6a"),")"),(0,n.kt)("li",{parentName:"ul"},"property decorator and class decorator extends (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/845"},"#845"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/8d0227dfe946af6fefa832d574cdcfe976ed8ce2"},"8d0227d"),")"),(0,n.kt)("li",{parentName:"ul"},"serverless support ts (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/879"},"#879"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/8aea51d3e5a25edb81e269c6ca67050411d4bc74"},"8aea51d"),")")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add conflictCheck (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/2e0897671fd4cb4b36ab351b626347e2f17ace56"},"2e08976"),")"),(0,n.kt)("li",{parentName:"ul"},"add conflictCheck (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/a8922234abb2c585d59e37aaa443b14d73a14b2f"},"a892223"),")")))}u.isMDXComponent=!0}}]);