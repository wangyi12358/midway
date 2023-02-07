"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33761],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(a),h=n,d=s["".concat(o,".").concat(h)]||s[h]||c[h]||i;return a?r.createElement(d,l(l({ref:t},m),{},{components:a})):r.createElement(d,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:n,l[1]=p;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={date:"2023-02-07T20:00",authors:["czy88840616","frank-zsy","savoygu"]},l="v3.10.7",p={permalink:"/changelog/v3.10.7",source:"@site/changelog/source/v3.10.7.md",title:"v3.10.7",description:"Bug Fix",date:"2023-02-07T20:00:00.000Z",formattedDate:"2023\u5e742\u67087\u65e5",tags:[],hasTruncateMarker:!0,authors:[{name:"Harry Chen",alias:"czy88840616",url:"https://github.com/czy88840616",imageURL:"https://github.com/czy88840616.png",key:"czy88840616"},{name:"Frank Zhao",alias:"frank-zsy",url:"https://github.com/frank-zsy",imageURL:"https://github.com/frank-zsy.png",key:"frank-zsy"},{name:"huel129",alias:"savoygu",url:"https://github.com/savoygu",imageURL:"https://github.com/savoygu.png",key:"savoygu"}],frontMatter:{date:"2023-02-07T20:00",authors:["czy88840616","frank-zsy","savoygu"]},nextItem:{title:"v3.10.6",permalink:"/changelog/v3.10.6"},listPageLink:"/changelog/"},o={authorsImageUrls:[void 0,void 0,void 0]},u=[{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83d\udc85 Polish",id:"-polish",level:2},{value:"\ud83d\udce6 Dependencies",id:"-dependencies",level:2},{value:"Committers: 3",id:"committers-3",level:2}],m={toc:u},s="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"validate"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2714"},"#2714")," fix(validate): export ParsePipe from pipe.ts (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/savoygu"},"@savoygu"),")")))),(0,n.kt)("h2",{id:"-polish"},"\ud83d\udc85 Polish"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"decorator"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"faas"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"validate"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2708"},"#2708")," feat: add web param optional (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,n.kt)("h2",{id:"-dependencies"},"\ud83d\udce6 Dependencies"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Other",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2715"},"#2715")," docs(site): update validate.md (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/savoygu"},"@savoygu"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bull"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2712"},"#2712")," fix(deps): update dependency bull to v4.10.3 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"typegoose"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2709"},"#2709")," chore(deps): update dependency @typegoose/typegoose to v10.1.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"web-express"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2710"},"#2710")," chore(deps): update dependency @types/express to v4.17.17 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"axios"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"http-proxy"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2705"},"#2705")," fix(deps): update dependency axios to v1.3.2 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"casbin-redis-adapter"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"casbin-typeorm-adapter"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"casbin"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2706"},"#2706")," fix(deps): update dependency casbin to v5.23.2 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")")))),(0,n.kt)("h2",{id:"committers-3"},"Committers: 3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Frank Zhao (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/frank-zsy"},"@frank-zsy"),")"),(0,n.kt)("li",{parentName:"ul"},"Harry Chen (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"),(0,n.kt)("li",{parentName:"ul"},"huel129 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/savoygu"},"@savoygu"),")")))}c.isMDXComponent=!0}}]);