"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2824],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),o=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(t),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var o=2;o<a;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8145:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return d}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),l=["components"],s={title:"\u8868\u683c\u4e2d\u591a\u9009"},c=void 0,o={unversionedId:"select/advanced-example/ZM03",id:"select/advanced-example/ZM03",title:"\u8868\u683c\u4e2d\u591a\u9009",description:"Layui\u8868\u683c\u4e2d\u591a\u9009",source:"@site/docs/select/advanced-example/ZM03.md",sourceDirName:"select/advanced-example",slug:"/select/advanced-example/ZM03",permalink:"/docs/select/advanced-example/ZM03",tags:[],version:"current",frontMatter:{title:"\u8868\u683c\u4e2d\u591a\u9009"},sidebar:"tutorialSidebar",previous:{title:"\u8868\u5355\u63d0\u4ea4",permalink:"/docs/select/advanced-example/ZM02"},next:{title:"\u8fdc\u7a0b\u641c\u7d22",permalink:"/docs/select/advanced-example/ZM04"}},u={},d=[{value:"Layui\u8868\u683c\u4e2d\u591a\u9009",id:"layui\u8868\u683c\u4e2d\u591a\u9009",level:2}],p={toc:d};function f(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"layui\u8868\u683c\u4e2d\u591a\u9009"},"Layui\u8868\u683c\u4e2d\u591a\u9009"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\n<table id="demo" lay-filter="test"></table>\n\n<script>\nlayui.use(\'table\', function() {\n    var table = layui.table;\n\n    //\u7b2c\u4e00\u4e2a\u5b9e\u4f8b\n    table.render({\n        elem: \'#demo\',\n        page: true, //\u5f00\u542f\u5206\u9875\n        height: 500,\n        cols: [\n            [ //\u8868\u5934\n                { field: \'id\', title: \'ID\', width: 80, sort: true }, \n                { field: \'username\', title: \'\u7528\u6237\u540d\', width: 80 }, \n                { field: \'sex\', title: \'\u6027\u522b\', width: 80, sort: true }, \n                { field: \'city\', title: \'\u57ce\u5e02\', width: 80 }, \n                { field: \'sign\', title: \'\u7231\u597d\', width: 200, templet: function(d){\n                    return \'<div id="XM-\' + d.id + \'" ></div>\'\n                } }, \n                { field: \'experience\', title: \'\u79ef\u5206\', width: 80, sort: true }, \n                { field: \'score\', title: \'\u8bc4\u5206\', width: 80, sort: true }, \n                { field: \'classify\', title: \'\u804c\u4e1a\', width: 80 }, \n                { field: \'wealth\', title: \'\u8d22\u5bcc\', width: 135, sort: true }\n            ]\n        ],\n        data: [\n            {"id":10000,"username":"user-0","sex":"\u5973","city":"\u57ce\u5e02-0","sign":"\u7b7e\u540d-0","experience":255,"logins":24,"wealth":82830700,"classify":"\u4f5c\u5bb6","score":57},\n            {"id":10001,"username":"user-1","sex":"\u7537","city":"\u57ce\u5e02-1","sign":"\u7b7e\u540d-1","experience":884,"logins":58,"wealth":64928690,"classify":"\u8bcd\u4eba","score":27},\n            {"id":10002,"username":"user-2","sex":"\u5973","city":"\u57ce\u5e02-2","sign":"\u7b7e\u540d-2","experience":650,"logins":77,"wealth":6298078,"classify":"\u9171\u6cb9","score":31},\n            {"id":10003,"username":"user-3","sex":"\u5973","city":"\u57ce\u5e02-3","sign":"\u7b7e\u540d-3","experience":362,"logins":157,"wealth":37117017,"classify":"\u8bd7\u4eba","score":68},\n            {"id":10004,"username":"user-4","sex":"\u7537","city":"\u57ce\u5e02-4","sign":"\u7b7e\u540d-4","experience":807,"logins":51,"wealth":76263262,"classify":"\u4f5c\u5bb6","score":6},\n            {"id":10005,"username":"user-5","sex":"\u5973","city":"\u57ce\u5e02-5","sign":"\u7b7e\u540d-5","experience":173,"logins":68,"wealth":60344147,"classify":"\u4f5c\u5bb6","score":87},\n            {"id":10006,"username":"user-6","sex":"\u5973","city":"\u57ce\u5e02-6","sign":"\u7b7e\u540d-6","experience":982,"logins":37,"wealth":57768166,"classify":"\u4f5c\u5bb6","score":34},\n            {"id":10007,"username":"user-7","sex":"\u7537","city":"\u57ce\u5e02-7","sign":"\u7b7e\u540d-7","experience":727,"logins":150,"wealth":82030578,"classify":"\u4f5c\u5bb6","score":28},\n            {"id":10008,"username":"user-8","sex":"\u7537","city":"\u57ce\u5e02-8","sign":"\u7b7e\u540d-8","experience":951,"logins":133,"wealth":16503371,"classify":"\u8bcd\u4eba","score":14},\n            {"id":10009,"username":"user-9","sex":"\u5973","city":"\u57ce\u5e02-9","sign":"\u7b7e\u540d-9","experience":484,"logins":25,"wealth":86801934,"classify":"\u8bcd\u4eba","score":75}\n        ],\n        done: function(res){\n            //\u4fee\u6539\u4e00\u4e9bcss\u6837\u5f0f, \u8fd9\u91cc\u867d\u7136\u80fd\u591f\u4f7f\u7528, \u4f46\u662f\u8fd8\u662f\u4e0d\u592a\u53cb\u597d, \u52aa\u529b\u4e2d...\n            var cells = document.querySelectorAll(\'div[lay-id="demo"] .layui-table-cell\');\n            for(var i = 0 ; i < cells.length ; i++ ){\n                //cells[i].style.overflow = \'unset\';\n                cells[i].style.height = \'auto\';\n            }\n            //\u6e32\u67d3\u591a\u9009\n            res.data.forEach(item =>  {\n                var xm = xmSelect.render({\n                    el: \'#XM-\' + item.id, \n                    autoRow: true,\n                    model: { type: \'fixed\' },\n                    data: [\n                        {name: \'\u5f20\u4e09\', value: 1},\n                        {name: \'\u674e\u56db\', value: 2},\n                        {name: \'\u738b\u4e94\', value: 3},\n                    ]\n                })\n                \n                item.__xm = xm;\n            })\n        }\n    });\n\n});\n\n//\u8868\u683c\u6eda\u52a8\u65f6 \u91cd\u65b0\u8ba1\u7b97\u4f4d\u7f6e\ndocument.querySelector(\'.layui-table-body\').addEventListener(\'scroll\', () => {\n    xmSelect.get().forEach(function(item){\n        item.calcPosition();\n    })\n})\n\n\n<\/script>\n')))}f.isMDXComponent=!0}}]);