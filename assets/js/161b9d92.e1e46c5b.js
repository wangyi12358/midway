"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55406],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),s=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,d=u["".concat(m,".").concat(f)]||u[f]||p[f]||i;return r?a.createElement(d,o(o({ref:t},l),{},{components:r})):a.createElement(d,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={date:"2022-07-31T20:00"},o="v3.4.6",c={permalink:"/changelog/v3.4.6",source:"@site/changelog/source/v3.4.6.md",title:"v3.4.6",description:"Bug Fixes",date:"2022-07-31T20:00:00.000Z",formattedDate:"2022\u5e747\u670831\u65e5",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2022-07-31T20:00"},prevItem:{title:"v3.4.7",permalink:"/changelog/v3.4.7"},nextItem:{title:"v3.4.5",permalink:"/changelog/v3.4.5"},listPageLink:"/changelog/"},m={authorsImageUrls:[]},s=[{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Performance Improvements",id:"performance-improvements",level:3}],l={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency @grpc/grpc-js to v1.6.8 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2177"},"#2177"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/a8a86934ffe815458d2c4140d60589b3ef36b97e"},"a8a8693"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency tablestore to v5.2.0 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2179"},"#2179"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/17e7f9b0707584a0ad10f593c4ec7f52f598cf54"},"17e7f9b"),")"),(0,n.kt)("li",{parentName:"ul"},"sls metadata npe (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2167"},"#2167"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/98bf8b5ec4d47f69dd8e53dae9a702a9c550a9b1"},"98bf8b5"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"task:")," createClient config missing (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2163"},"#2163"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/129ce1643201b36d10eac08a97dd6d99e35026aa"},"129ce16"),")")),(0,n.kt)("h3",{id:"performance-improvements"},"Performance Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"core:")," destroy connection concurrently within DataSourceManager.\u2026 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2169"},"#2169"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/53bcf65dc2699857a41a6400b4c04e0c46b30948"},"53bcf65"),")")))}p.isMDXComponent=!0}}]);