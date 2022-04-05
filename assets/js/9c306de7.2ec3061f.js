"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3080],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4266:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],c={title:"\u521b\u5efa\u6761\u76ee"},u=void 0,i={unversionedId:"select/example/XM27",id:"select/example/XM27",title:"\u521b\u5efa\u6761\u76ee",description:"\u641c\u7d22\u4e0d\u5b58\u5728\u5219\u521b\u5efa\u6761\u76ee",source:"@site/docs/select/example/XM27.md",sourceDirName:"select/example",slug:"/select/example/XM27",permalink:"/docs/select/example/XM27",tags:[],version:"current",frontMatter:{title:"\u521b\u5efa\u6761\u76ee"},sidebar:"tutorialSidebar",previous:{title:"\u7981\u7528",permalink:"/docs/select/example/XM26"},next:{title:"\u8d4b\u503c\u4e0e\u53d6\u503c",permalink:"/docs/select/advanced-example/ZM01"}},p={},s=[{value:"\u641c\u7d22\u4e0d\u5b58\u5728\u5219\u521b\u5efa\u6761\u76ee",id:"\u641c\u7d22\u4e0d\u5b58\u5728\u5219\u521b\u5efa\u6761\u76ee",level:2},{value:"\u5355\u9009\u521b\u5efa",id:"\u5355\u9009\u521b\u5efa",level:2}],m={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u641c\u7d22\u4e0d\u5b58\u5728\u5219\u521b\u5efa\u6761\u76ee"},"\u641c\u7d22\u4e0d\u5b58\u5728\u5219\u521b\u5efa\u6761\u76ee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//\u60f3\u521b\u5efa\u5c31\u5fc5\u987b\u8981\u5f00\u542f\u672c\u5730\u641c\u7d22\nxmSelect.render({\n    //...\n    filterable: true,\n    create: function(val, arr){\n        //\u8fd4\u56de\u4e00\u4e2a\u521b\u5efa\u6210\u529f\u7684\u5bf9\u8c61, val\u662f\u641c\u7d22\u7684\u6570\u636e, arr\u662f\u641c\u7d22\u540e\u7684\u5f53\u524d\u9875\u9762\u6570\u636e\n        return {\n            name: '\u521b\u5efa-' + val,\n            value: val\n        }\n    }\n})\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo1\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo1 = xmSelect.render({\n    el: '#demo1', \n    filterable: true,\n    create: function(val, arr){\n        if(arr.length === 0){\n            return {\n                name: '\u521b\u5efa-' + val,\n                value: val\n            }\n        }\n    },\n    data: [\n        {name: '\u5f20\u4e09', value: 1, selected: true},\n        {name: '\u674e\u56db', value: 2},\n        {name: '\u738b\u4e94', value: 3, disabled: true},\n    ]\n})\n<\/script>\n")),(0,l.kt)("h2",{id:"\u5355\u9009\u521b\u5efa"},"\u5355\u9009\u521b\u5efa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo2\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo1 = xmSelect.render({\n    el: '#demo2', \n    radio: true,\n    clickClose: true,\n    filterable: true,\n    create: function(val, arr){\n        if(arr.length === 0){\n            return {\n                name: '\u521b\u5efa-' + val,\n                value: val\n            }\n        }\n    },\n    model: {\n        icon: 'hidden',\n        label: {\n            type: 'text',\n        }\n    },\n    data: [\n        {name: '\u5f20\u4e09', value: 1, selected: true},\n        {name: '\u674e\u56db', value: 2},\n        {name: '\u738b\u4e94', value: 3},\n    ]\n})\n<\/script>\n")))}d.isMDXComponent=!0}}]);