"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[37631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),p=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(m,".").concat(d)]||u[d]||l[d]||i;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},49261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={date:"2022-08-12T20:00"},o="v3.4.10",c={permalink:"/changelog/v3.4.10",source:"@site/changelog/source/v3.4.10.md",title:"v3.4.10",description:"Bug Fixes",date:"2022-08-12T20:00:00.000Z",formattedDate:"2022\u5e748\u670812\u65e5",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2022-08-12T20:00"},prevItem:{title:"v3.4.11",permalink:"/changelog/v3.4.11"},nextItem:{title:"v3.4.9",permalink:"/changelog/v3.4.9"},listPageLink:"/changelog/"},m={authorsImageUrls:[]},p=[{value:"Bug Fixes",id:"bug-fixes",level:3}],s={toc:p};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"catch kafaka start error (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2230"},"#2230"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/60c7c41eaaaa062bf63ca1f938dd2cbd15bd2f7d"},"60c7c41"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency @grpc/grpc-js to v1.6.9 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2223"},"#2223"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/e0c6d4d78410d38149d4347a3bfb270498ae5f14"},"e0c6d4d"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency amqp-connection-manager to v4.1.6 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2225"},"#2225"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/ff7506a7bb986409e8c9a85ea55a23a3d935bdf5"},"ff7506a"),")"),(0,n.kt)("li",{parentName:"ul"},"revert node 14 supported (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2219"},"#2219"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/08e4152bb9530b699de4150c2494f04795348719"},"08e4152"),")"),(0,n.kt)("li",{parentName:"ul"},"stop duplicate invoke (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2221"},"#2221"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/6bd3f57dbd68742c5b789335b46e929b7f71c6c4"},"6bd3f57"),")")))}l.isMDXComponent=!0}}]);