"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54056],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>s});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=r.createContext({}),u=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(a),s=i,d=h["".concat(m,".").concat(s)]||h[s]||c[s]||n;return a?r.createElement(d,l(l({ref:t},p),{},{components:a})):r.createElement(d,l({ref:t},p))}));function s(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=h;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},78982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=a(87462),i=(a(67294),a(3905));const n={date:"2022-11-18T20:00",authors:["cave-","czy88840616","haitaodesign","larryzhuo"]},l="v3.8.0",o={permalink:"/changelog/v3.8.0",source:"@site/changelog/source/v3.8.0.md",title:"v3.8.0",description:"New Feature",date:"2022-11-18T20:00:00.000Z",formattedDate:"2022\u5e7411\u670818\u65e5",tags:[],hasTruncateMarker:!0,authors:[{name:"cave-",alias:"cave-",url:"https://github.com/cave-",imageURL:"https://github.com/cave-.png",key:"cave-"},{name:"Harry Chen",alias:"czy88840616",url:"https://github.com/czy88840616",imageURL:"https://github.com/czy88840616.png",key:"czy88840616"},{name:"Haitao Lee",alias:"haitaodesign",url:"https://github.com/haitaodesign",imageURL:"https://github.com/haitaodesign.png",key:"haitaodesign"},{name:"larry zhuo",alias:"larryzhuo",url:"https://github.com/larryzhuo",imageURL:"https://github.com/larryzhuo.png",key:"larryzhuo"}],frontMatter:{date:"2022-11-18T20:00",authors:["cave-","czy88840616","haitaodesign","larryzhuo"]},nextItem:{title:"v3.7.4",permalink:"/changelog/v3.7.4"},listPageLink:"/changelog/"},m={authorsImageUrls:[void 0,void 0,void 0,void 0]},u=[{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:2},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83c\udfc3\u200d\u2642\ufe0f Performance",id:"\ufe0f-performance",level:2},{value:"\ud83d\udcdd Documentation",id:"-documentation",level:2},{value:"Committers: 4",id:"committers-4",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"-new-feature"},"\ud83d\ude80 New Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"etcd"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2481"},"#2481")," feat: add etcd component (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"axios"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cos"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"oss"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"redis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tablestore"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2482"},"#2482")," feat: serviceFactory support default client name (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mikro"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sequelize"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"typeorm"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2498"},"#2498")," feat: add injectDataSource for mikro/typeorm/sequelize (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,i.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"core"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2505"},"#2505")," fix: windows entity glob and Closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2488"},"#2488")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2504"},"#2504")," fix: remove router cache and fix issue #2319 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bull"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2493"},"#2493")," fix: bull exports and typings (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,i.kt)("h2",{id:"\ufe0f-performance"},"\ud83c\udfc3\u200d\u2642\ufe0f Performance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"core"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2506"},"#2506")," perf: remove babel isClass check (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,i.kt)("h2",{id:"-documentation"},"\ud83d\udcdd Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2502"},"#2502")," docs: fix remoteConfig in Life Cycle (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/haitaodesign"},"@haitaodesign"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2491"},"#2491")," docs(site): update auto_run.md (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cave-"},"@cave-"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2489"},"#2489")," docs(site): fix midway-throttler url link in awesome_midway.md (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/larryzhuo"},"@larryzhuo"),")")),(0,i.kt)("h2",{id:"committers-4"},"Committers: 4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Haitao Lee (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/haitaodesign"},"@haitaodesign"),")"),(0,i.kt)("li",{parentName:"ul"},"Harry Chen (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cave-"},"@cave-")),(0,i.kt)("li",{parentName:"ul"},"larry zhuo (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/larryzhuo"},"@larryzhuo"),")")))}c.isMDXComponent=!0}}]);