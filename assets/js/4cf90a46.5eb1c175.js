"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4176],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},590:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={title:"\u8fdc\u7a0b\u641c\u7d22"},l=void 0,u={unversionedId:"select/advanced-example/ZM04",id:"select/advanced-example/ZM04",title:"\u8fdc\u7a0b\u641c\u7d22",description:"",source:"@site/docs/select/advanced-example/ZM04.md",sourceDirName:"select/advanced-example",slug:"/select/advanced-example/ZM04",permalink:"/docs/select/advanced-example/ZM04",tags:[],version:"current",frontMatter:{title:"\u8fdc\u7a0b\u641c\u7d22"},sidebar:"tutorialSidebar",previous:{title:"\u8868\u683c\u4e2d\u591a\u9009",permalink:"/docs/select/advanced-example/ZM03"},next:{title:"\u52a8\u6001\u6570\u636e",permalink:"/docs/select/advanced-example/ZM05"}},s={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo1\"></div>\n\n<script>\n    var demo1 = xmSelect.render({\n        el: '#demo1', \n        autoRow: true,\n        toolbar: { show: true },\n        filterable: true,\n        remoteSearch: true,\n        remoteMethod: function(val, cb, show){\n            //\u8fd9\u91cc\u5982\u679cval\u4e3a\u7a7a, \u5219\u4e0d\u89e6\u53d1\u641c\u7d22\n            if(!val){\n                return cb([]);\n            }\n            //\u8fd9\u91cc\u5f15\u5165\u4e86\u4e00\u4e2a\u7b2c\u4e09\u65b9\u63d2\u4ef6axios, \u76f8\u5f53\u4e8e$.ajax\n            axios({\n                method: 'get',\n                url: 'https://www.fastmock.site/mock/98228b1f16b7e5112d6c0c87921eabc1/xmSelect/search',\n                params: {\n                    keyword: val,\n                }\n            }).then(response => {\n                var res = response.data;\n                cb(res.data)\n            }).catch(err => {\n                cb([]);\n            });\n        },\n    })\n<\/script>\n")))}f.isMDXComponent=!0}}]);