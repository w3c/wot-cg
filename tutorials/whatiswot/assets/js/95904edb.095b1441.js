"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[318],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return r?n.createElement(m,i(i({ref:t},h),{},{components:r})):n.createElement(m,i({ref:t},h))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8297:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"Architecture Patterns"},i=void 0,s={unversionedId:"Architecture Patterns",id:"Architecture Patterns",title:"Architecture Patterns",description:"In this tutorial, we will explain architecture patterns, and how devices / things interact with controllers, agents, and servers.",source:"@site/docs/Architecture Patterns.md",sourceDirName:".",slug:"/Architecture Patterns",permalink:"/wot-cg/tutorials/whatiswot/docs/Architecture Patterns",draft:!1,editUrl:"https://github.com/w3c/wot-cg/docs/Architecture Patterns.md",tags:[],version:"current",frontMatter:{id:"Architecture Patterns"},sidebar:"tutorialSidebar",previous:{title:"Application Domains",permalink:"/wot-cg/tutorials/whatiswot/docs/Application Domains"},next:{title:"Building Blocks",permalink:"/wot-cg/tutorials/whatiswot/docs/Building Blocks"}},l={},c=[{value:"Device Controllers",id:"device-controllers",level:2},{value:"Thing-to-Thing",id:"thing-to-thing",level:2},{value:"Gateways",id:"gateways",level:2},{value:"Digital Twins",id:"digital-twins",level:2},{value:"Cross-domain Collaboration",id:"cross-domain-collaboration",level:2}],h={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial, we will explain architecture patterns, and how devices / things interact with controllers, agents, and servers."),(0,a.kt)("p",null,"Previously we have explained the server and client models and described how this architecture works."),(0,a.kt)("p",null,"Now we will show how they are used in the WoT architectures."),(0,a.kt)("p",null,"We will introduce 6 architecture patterns in this tutorial:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Device Controllers"),(0,a.kt)("li",{parentName:"ul"},"Thing-to-Thing"),(0,a.kt)("li",{parentName:"ul"},"Gateways"),(0,a.kt)("li",{parentName:"ul"},"Digital Twins"),(0,a.kt)("li",{parentName:"ul"},"Cross-domain Collaboration"),(0,a.kt)("li",{parentName:"ul"},"System Integration")),(0,a.kt)("h2",{id:"device-controllers"},"Device Controllers"),(0,a.kt)("p",null,"So, first, let\u2019s start with the device controllers. A common deployment pattern is a local device controlled by a user-operated remote controller. Let\u2019s remember the smart house example from the previous tutorial."),(0,a.kt)("p",null,"A remote controller can interact with the electronic\xa0devices through the local home network. In this pattern, at least one device electronic device has a server role that can accept a request and respond."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"smart-home-request",src:r(3571).Z,width:"628",height:"363"})),(0,a.kt)("p",null,"Another device remote controller has a client role that can send a message with a request like to read a sensor value or to turn on the device."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"smart-home-response",src:r(5992).Z,width:"624",height:"374"})),(0,a.kt)("h2",{id:"thing-to-thing"},"Thing-to-Thing"),(0,a.kt)("p",null,"Let\u2019s move to the second architecture pattern, Thing-to-Thing. In this scenario we have an electronic device, let's say a heater and a temperature sensor."),(0,a.kt)("p",null,"When a sensor detects a change in room condition such as temperature drops below the threshold, it issues a control message \u201cturn on\u201d to the electronic device to power on the heater."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"thing-to-thing",src:r(7956).Z,width:"582",height:"249"})),(0,a.kt)("h2",{id:"gateways"},"Gateways"),(0,a.kt)("p",null,"Third architecture that we will intorduce is Gateways."),(0,a.kt)("p",null,"Smart home gateways pattern is achieved by placing a gateway between a home network and the Internet to manage electronic devices inside the house. It can also receive commands from a remote controller over the Internet."),(0,a.kt)("p",null,"In this pattern, the home gateway has both client and server roles."),(0,a.kt)("p",null,"For instance, when the remote controller in this case a smartphone, turns on the electronic device let's say security camera in the client role and the smartphone in the server role."),(0,a.kt)("p",null,"On the other way around, when the security camera sends a message to the smartphone, the gateway acts as a server role for the security camera and it acts as a client for the smartphone. If the camera is in a client role, it can pass the firewalls easily."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gateway",src:r(5622).Z,width:"653",height:"320"})),(0,a.kt)("h2",{id:"digital-twins"},"Digital Twins"),(0,a.kt)("p",null,"The next one is Digital twins. Digital Twin is a model of a device or a group of devices that resides on a cloud server or edge devices. It is useful to represent real-world devices that may not be continuously online or to test simulations and services before they are deployed to real devices."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"digital-twin",src:r(8557).Z,width:"535",height:"292"})),(0,a.kt)("p",null,"It can model one or more devices. Digital Twins can be categorized in different ways depending on weather a device is connected to the cloud or gateway."),(0,a.kt)("h2",{id:"cross-domain-collaboration"},"Cross-domain Collaboration"),(0,a.kt)("p",null,"Lastly, we will move to cross-domain collaboration. In cross-domain collaborations, each system involves other systems in other domains. For example, Smart Factory with Smart City, Smart City with Smart Home."),(0,a.kt)("p",null,"In those models, you can exchange information directly with each other in a peer-to-peer manner or indirectly via some collaboration platform."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cross-domain-collab",src:r(4278).Z,width:"766",height:"463"})))}u.isMDXComponent=!0},4278:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cross-domain-collab-05f15ad2f937e691f22ec3a2f3120ff3.png"},8557:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/digital-twin-8d3243b12d24f3a6b726897e92460fea.png"},5622:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gateway-73f1139a0ee5744f004c640fe2016c9f.png"},3571:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/smart-home-request-011ae6d2656a078d5e6aa83c114b7cbb.png"},5992:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/smart-home-response-dd205179cd815b4da7656c085c7dd56c.png"},7956:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/thing-to-thing-8909ec34f31cd3f1a660ba6b0185a10c.png"}}]);