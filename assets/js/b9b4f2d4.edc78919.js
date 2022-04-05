"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5591],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=o(t),p=r,v=s["".concat(u,".").concat(p)]||s[p]||m[p]||l;return t?a.createElement(v,i(i({ref:n},d),{},{components:t})):a.createElement(v,i({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<l;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9793:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return m}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],c={title:"\u4e0b\u62c9\u6811"},u=void 0,o={unversionedId:"select/development-center/ZP02",id:"select/development-center/ZP02",title:"\u4e0b\u62c9\u6811",description:"tree",source:"@site/docs/select/development-center/ZP02.md",sourceDirName:"select/development-center",slug:"/select/development-center/ZP02",permalink:"/docs/select/development-center/ZP02",tags:[],version:"current",frontMatter:{title:"\u4e0b\u62c9\u6811"},sidebar:"tutorialSidebar",previous:{title:"\u4e0b\u62c9\u81ea\u5b9a\u4e49",permalink:"/docs/select/development-center/ZP01"},next:{title:"\u4e0b\u62c9\u65e5\u671f\u591a\u9009",permalink:"/docs/select/development-center/ZP03"}},d={},m=[{value:"tree",id:"tree",level:2},{value:"\u61d2\u52a0\u8f7d\u7684\u6811",id:"\u61d2\u52a0\u8f7d\u7684\u6811",level:2},{value:"\u5355\u9009\u6811(radio\u6a21\u5f0f)",id:"\u5355\u9009\u6811radio\u6a21\u5f0f",level:2},{value:"\u5355\u9009\u6811(on\u5904\u7406\u6a21\u5f0f)",id:"\u5355\u9009\u6811on\u5904\u7406\u6a21\u5f0f",level:2},{value:"\u9ed8\u8ba4\u5c55\u5f00\u6240\u6709\u8282\u70b9",id:"\u9ed8\u8ba4\u5c55\u5f00\u6240\u6709\u8282\u70b9",level:2}],s={toc:m};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tree"},"tree"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"tree: {\n    //\u662f\u5426\u663e\u793a\u6811\u72b6\u7ed3\u6784\n    show: true,\n    //\u662f\u5426\u5c55\u793a\u4e09\u89d2\u56fe\u6807\n    showFolderIcon: true,\n    //\u662f\u5426\u663e\u793a\u865a\u7ebf\n    showLine: false,\n    //\u95f4\u8ddd\n    indent: 20,\n    //\u9ed8\u8ba4\u5c55\u5f00\u8282\u70b9\u7684\u6570\u7ec4, \u4e3a true \u65f6, \u5c55\u5f00\u6240\u6709\u8282\u70b9\n    expandedKeys: [], \n    //\u662f\u5426\u4e25\u683c\u9075\u5b88\u7236\u5b50\u6a21\u5f0f\n    strict: true,\n    //\u662f\u5426\u5f00\u542f\u6781\u7b80\u6a21\u5f0f\n    simple: false,\n    //\u70b9\u51fb\u8282\u70b9\u662f\u5426\u5c55\u5f00\n    clickExpand: true,\n    //\u70b9\u51fb\u8282\u70b9\u662f\u5426\u9009\u4e2d\n    clickCheck: true,\n},\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\n<div id="demo1" class="xm-select-demo"></div>\n\n<br/>\n<div class="layui-form">\n    <input type="checkbox" name="showFolderIcon" lay-filter="showFolderIcon" lay-skin="primary" title="\u662f\u5426\u5c55\u793a\u4e09\u89d2\u56fe\u6807" checked>\n    <input type="checkbox" name="showLine" lay-filter="showLine" lay-skin="primary" title="\u662f\u5426\u663e\u793a\u865a\u7ebf" checked>\n    <input type="checkbox" name="strict" lay-filter="strict" lay-skin="primary" title="\u4e25\u683c\u7236\u5b50\u7ed3\u6784" checked>\n    <input type="checkbox" name="simple" lay-filter="simple" lay-skin="primary" title="\u6781\u7b80\u6a21\u5f0f">\n    \n    <br/><br/>\n    <input type="checkbox" name="hidden" lay-filter="hidden" lay-skin="primary" title="\u9690\u85cf\u7236\u8282\u70b9\u56fe\u6807">\n    <input type="checkbox" name="custom" lay-filter="custom" lay-skin="primary" title="\u81ea\u5b9a\u4e49\u56fe\u6807">\n    <input type="checkbox" name="all" lay-filter="all" lay-skin="primary" title="\u5c55\u5f00\u6240\u6709\u8282\u70b9">\n    <input type="checkbox" name="close" lay-filter="close" lay-skin="primary" title="\u95ed\u5408\u6240\u6709\u8282\u70b9">\n    <input type="checkbox" name="key3" lay-filter="key3" lay-skin="primary" title="\u5c55\u5f00\u6307\u5b9a\u8282\u70b9">\n    \n    <br/><br/>\n    <input type="checkbox" name="clickExpand" lay-filter="clickExpand" lay-skin="primary" title="clickExpand" checked>\n    <input type="checkbox" name="clickCheck" lay-filter="clickCheck" lay-skin="primary" title="clickExpand" checked>\n    \n</div>\n\n<div style="margin-top: 20px">\u95f4\u8ddd</div>\n<div id="slideTest1"></div>\n\n\n<script>\nlayui.form.render();\n\n[\'showFolderIcon\', \'showLine\', \'strict\', \'simple\'].forEach(function(key){\n    layui.form.on(\'checkbox(\'+key+\')\', function(data){\n        var treeConfig = {};\n        treeConfig[key] = data.elem.checked;\n        demo1.update({\n            tree: treeConfig\n        })\n    });\n})\n\n//\u63a7\u5236\u663e\u793a\u7236\u8282\u70b9\u7684\u56fe\u6807\nlayui.form.on(\'checkbox(hidden)\', function(data){\n    demo1.update({\n        iconfont: {\n            parent: data.elem.checked ? \'hidden\' : \'\',\n        }\n    })\n});\n\n//\u81ea\u5b9a\u4e49\u56fe\u6807\nlayui.form.on(\'checkbox(custom)\', function(data){\n    let iconfont = data.elem.checked ? {\n        select: \'layui-icon layui-icon-chart\',\n        unselect: \'layui-icon-ok-circle\',\n        half: \'layui-icon layui-icon-table\',\n        parent: \'layui-icon layui-icon-survey\',\n    } : {\n        select: \'\',\n        unselect: \'\',\n        half: \'\',\n        parent: \'\',\n    }\n    demo1.update({\n        iconfont: iconfont\n    })\n    layui.form.render();\n});\n\n//\u5c55\u5f00\u6240\u6709\u8282\u70b9\nlayui.form.on(\'checkbox(all)\', function(data){\n    if(data.elem.checked){\n        demo1.changeExpandedKeys(true)\n    }\n});\n\n//\u95ed\u5408\u6240\u6709\u8282\u70b9\nlayui.form.on(\'checkbox(close)\', function(data){\n    if(data.elem.checked){\n        demo1.changeExpandedKeys(false)\n    }\n});\n\n//\u5c55\u5f00\u6307\u5b9a\u8282\u70b9\nlayui.form.on(\'checkbox(key3)\', function(data){\n    if(data.elem.checked){\n        demo1.changeExpandedKeys([ -3 ])\n    }\n});\n\nlayui.form.on(\'checkbox(clickExpand)\', function(data){\n    demo1.update({\n        tree: {\n            clickExpand: data.elem.checked\n        }\n    })\n});\n\nlayui.form.on(\'checkbox(clickCheck)\', function(data){\n    demo1.update({\n        tree: {\n            clickCheck: data.elem.checked\n        }\n    })\n});\n\nlayui.slider.render({\n    elem: \'#slideTest1\',\n    min: 10,\n    max: 100,\n    showstep: true,\n    input: true,\n    tips: true,\n    value: 20,\n    change: function(value){\n        demo1.update({\n            tree: {\n                indent: value\n            }\n        })\n    }\n});\n\nvar demo1 = xmSelect.render({\n    el: \'#demo1\', \n    autoRow: true,\n    filterable: true,\n    tree: {\n        show: true,\n        showFolderIcon: true,\n        showLine: true,\n        indent: 20,\n        expandedKeys: [ -3 ],\n    },\n    toolbar: {\n        show: true,\n        list: [\'ALL\', \'REVERSE\', \'CLEAR\']\n    },\n    filterable: true,\n    height: \'auto\',\n    data: function(){\n        return [\n            {name: \'\u9500\u552e\u5458\', value: -1, disabled: true, children: [\n                {name: \'\u5f20\u4e091\', value: 1, selected: true, children: []},\n                {name: \'\u674e\u56db1\', value: 2, selected: true},\n                {name: \'\u738b\u4e941\', value: 3, disabled: true},\n            ]},\n            {name: \'\u5956\u54c1\', value: -2, children: [\n                {name: \'\u5956\u54c13\', value: -3, children: [\n                    {name: \'\u82f9\u679c3\', value: 14, selected: true},\n                    {name: \'\u9999\u85493\', value: 15},\n                    {name: \'\u8461\u84043\', value: 16},\n                ]},\n                {name: \'\u82f9\u679c2\', value: 4, selected: true, disabled: true},\n                {name: \'\u9999\u85492\', value: 5},\n                {name: \'\u8461\u84042\', value: 6},\n            ]},\n        ]\n    }\n})\n<\/script>\n')),(0,l.kt)("h2",{id:"\u61d2\u52a0\u8f7d\u7684\u6811"},"\u61d2\u52a0\u8f7d\u7684\u6811"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"tree: {\n    show: true,\n    expandedKeys: [ -1 ],\n    //\u5f00\u542f\u61d2\u52a0\u8f7d\n    lazy: true,\n    //\u52a0\u8f7d\u65b9\u6cd5\n    load: function(item, cb){\n        //item: \u70b9\u51fb\u7684\u8282\u70b9, cb: \u56de\u8c03\u51fd\u6570\n        //\u8fd9\u91cc\u6a21\u62dfajax\n        setTimeout(function(){\n            var name = item.name + 1;\n            cb([\n                {name: item.name + 1, value: item.value + '1', children: [] },\n                {name: item.name + 2, value: item.value + '2' },\n            ])\n        }, 500)\n    }\n},\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo2\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo2 = xmSelect.render({\n    el: '#demo2', \n    autoRow: true,\n    tree: {\n        show: true,\n        showFolderIcon: true,\n        showLine: true,\n        indent: 20,\n        expandedKeys: [ -1 ],\n        lazy: true,\n        load: function(item, cb){\n            setTimeout(function(){\n                if(item.name.endsWith('2')){\n                    return cb([]);\n                }\n                cb([\n                    {name: item.name + 1, value: item.value + '1', children: [] },\n                    {name: item.name + 2, value: item.value + '2', children: [] },\n                ])\n            }, 500)\n        }\n    },\n    height: 'auto',\n    data(){\n        return [\n            {name: '\u9500\u552e\u5458', value: -1, children: [\n                {name: '\u5f20\u4e09', value: 100, selected: true, children: []},\n                {name: '\u674e\u56db1', value: 2, selected: true},\n                {name: '\u738b\u4e941', value: 3, disabled: true},\n            ]},\n            {name: '\u5956\u54c1', value: -2, children: [\n                {name: '\u5956\u54c13', value: -3, children: [\n                    {name: '\u82f9\u679c3', value: 14, selected: true},\n                    {name: '\u9999\u85493', value: 15},\n                    {name: '\u8461\u84043', value: 16},\n                ]},\n                {name: '\u82f9\u679c2', value: 4, selected: true, disabled: true},\n                {name: '\u9999\u85492', value: 5},\n                {name: '\u8461\u84042', value: 6},\n            ]},\n        ]\n    }\n})\n<\/script>\n")),(0,l.kt)("h2",{id:"\u5355\u9009\u6811radio\u6a21\u5f0f"},"\u5355\u9009\u6811(radio\u6a21\u5f0f)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//\u663e\u793a\u4e3atext\u6a21\u5f0f\nmodel: { label: { type: 'text' } },\n//\u5355\u9009\u6a21\u5f0f\nradio: true,\n//\u9009\u4e2d\u5173\u95ed\nclickClose: true,\n//\u6811\ntree: {\n    show: true,\n    //\u975e\u4e25\u683c\u6a21\u5f0f\n    strict: false,\n    //\u9ed8\u8ba4\u5c55\u5f00\u8282\u70b9\n    expandedKeys: [ -1 ],\n},\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo3\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo3 = xmSelect.render({\n    el: '#demo3', \n    model: { label: { type: 'text' } },\n    radio: true,\n    clickClose: true,\n    tree: {\n        show: true,\n        strict: false,\n        expandedKeys: [ -1 ],\n    },\n    height: 'auto',\n    data(){\n        return [\n            {name: '\u9500\u552e\u5458', value: -1, children: [\n                {name: '\u5f20\u4e09', value: 100, selected: true, children: []},\n                {name: '\u674e\u56db1', value: 2, selected: true},\n                {name: '\u738b\u4e941', value: 3, disabled: true},\n            ]},\n            {name: '\u5956\u54c1', value: -2, children: [\n                {name: '\u5956\u54c13', value: -3, children: [\n                    {name: '\u82f9\u679c3', value: 14, selected: true},\n                    {name: '\u9999\u85493', value: 15},\n                    {name: '\u8461\u84043', value: 16},\n                ]},\n                {name: '\u82f9\u679c2', value: 4, selected: true, disabled: true},\n                {name: '\u9999\u85492', value: 5},\n                {name: '\u8461\u84042', value: 6},\n            ]},\n        ]\n    }\n})\n<\/script>\n")),(0,l.kt)("h2",{id:"\u5355\u9009\u6811on\u5904\u7406\u6a21\u5f0f"},"\u5355\u9009\u6811(on\u5904\u7406\u6a21\u5f0f)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//\u663e\u793a\u4e3atext\u6a21\u5f0f\nmodel: { label: { type: 'text' } },\n//\u6811\ntree: {\n    show: true,\n    //\u975e\u4e25\u683c\u6a21\u5f0f\n    strict: false,\n    //\u9ed8\u8ba4\u5c55\u5f00\u8282\u70b9\n    expandedKeys: [ -1, -3 ],\n},\n//\u5904\u7406\u65b9\u5f0f\non: function(data){\n    if(data.isAdd){\n        return data.change.slice(0, 1)\n    }\n},\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo4\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo4 = xmSelect.render({\n    el: '#demo4', \n    model: { label: { type: 'text' } },\n    tree: {\n        show: true,\n        strict: false,\n        expandedKeys: [ -1 ],\n    },\n    on: function(data){\n        if(data.isAdd){\n            return data.change.slice(0, 1)\n        }\n    },\n    height: 'auto',\n})\n\n//\u8fd9\u91cc\u6a21\u62dfajax\nsetTimeout(function(){\n    demo4.update({\n        data: [\n            {name: '\u9500\u552e\u5458', value: -1, children: [\n                {name: '\u5f20\u4e09', value: 100, children: []},\n                {name: '\u674e\u56db1', value: 2},\n                {name: '\u738b\u4e941', value: 3, disabled: true},\n            ]},\n            {name: '\u5956\u54c1', value: -2, children: [\n                {name: '\u5956\u54c13', value: -3, children: [\n                    {name: '\u82f9\u679c3', value: 14},\n                    {name: '\u9999\u85493', value: 15},\n                    {name: '\u8461\u84043', value: 16},\n                ]},\n                {name: '\u82f9\u679c2', value: 4, disabled: true},\n                {name: '\u9999\u85492', value: 5},\n                {name: '\u8461\u84042', value: 6},\n            ]},\n        ]\n    })\n    \n    //\u8bbe\u7f6e\u9ed8\u8ba4\u503c\n    demo4.setValue([\n        {name: '\u674e\u56db1', value: 2},\n        {name: '\u82f9\u679c3', value: 14},\n    ], null, true)\n    \n}, 300)\n\n<\/script>\n")),(0,l.kt)("h2",{id:"\u9ed8\u8ba4\u5c55\u5f00\u6240\u6709\u8282\u70b9"},"\u9ed8\u8ba4\u5c55\u5f00\u6240\u6709\u8282\u70b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"tree: {\n    show: true,\n    //\u5c55\u5f00\u6240\u6709\u8282\u70b9\n    expandedKeys: true,\n},\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo5\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo5 = xmSelect.render({\n    el: '#demo5', \n    tree: {\n        show: true,\n        expandedKeys: true,\n    },\n    height: 'auto',\n    data: [\n        {name: '\u9500\u552e\u5458', value: -1, children: [\n            {name: '\u5f20\u4e09', value: 100, children: []},\n            {name: '\u674e\u56db1', value: 2},\n            {name: '\u738b\u4e941', value: 3, disabled: true},\n        ]},\n        {name: '\u5956\u54c1', value: -2, children: [\n            {name: '\u5956\u54c13', value: -3, children: [\n                {name: '\u82f9\u679c3', value: 14},\n                {name: '\u9999\u85493', value: 15},\n                {name: '\u8461\u84043', value: 16},\n            ]},\n            {name: '\u82f9\u679c2', value: 4, disabled: true},\n            {name: '\u9999\u85492', value: 5},\n            {name: '\u8461\u84042', value: 6},\n        ]},\n    ]\n})\n\n<\/script>\n")))}p.isMDXComponent=!0}}]);