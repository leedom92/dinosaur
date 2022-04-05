"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[537],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),i=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(t),m=a,b=p["".concat(d,".").concat(m)]||p[m]||s[m]||l;return t?r.createElement(b,o(o({ref:n},u),{},{components:t})):r.createElement(b,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=p;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1045:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],c={title:"\u52a8\u6001\u6570\u636e"},d=void 0,i={unversionedId:"select/advanced-example/ZM05",id:"select/advanced-example/ZM05",title:"\u52a8\u6001\u6570\u636e",description:"\u672c\u5730\u6570\u636e\u52a8\u6001\u8d4b\u503c",source:"@site/docs/select/advanced-example/ZM05.md",sourceDirName:"select/advanced-example",slug:"/select/advanced-example/ZM05",permalink:"/docs/select/advanced-example/ZM05",tags:[],version:"current",frontMatter:{title:"\u52a8\u6001\u6570\u636e"},sidebar:"tutorialSidebar",previous:{title:"\u8fdc\u7a0b\u641c\u7d22",permalink:"/docs/select/advanced-example/ZM04"},next:{title:"\u5f39\u6846\u4e2d\u7684\u591a\u9009",permalink:"/docs/select/advanced-example/ZM06"}},u={},s=[{value:"\u672c\u5730\u6570\u636e\u52a8\u6001\u8d4b\u503c",id:"\u672c\u5730\u6570\u636e\u52a8\u6001\u8d4b\u503c",level:2},{value:"\u8fdc\u7a0b\u6570\u636e\u52a8\u6001\u8d4b\u503c",id:"\u8fdc\u7a0b\u6570\u636e\u52a8\u6001\u8d4b\u503c",level:2},{value:"\u52a8\u6001\u521b\u5efaxm-select\u591a\u9009",id:"\u52a8\u6001\u521b\u5efaxm-select\u591a\u9009",level:2}],p={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u672c\u5730\u6570\u636e\u52a8\u6001\u8d4b\u503c"},"\u672c\u5730\u6570\u636e\u52a8\u6001\u8d4b\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo1\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo1 = xmSelect.render({\n    el: '#demo1', \n    data: []\n})\n\ndemo1.update({\n    data: [\n        {name: '\u5f20\u4e09', value: 1, selected: true},\n        {name: '\u674e\u56db', value: 2, selected: true},\n        {name: '\u738b\u4e94', value: 3, disabled: true},\n    ]\n})\n\n<\/script>\n")),(0,l.kt)("h2",{id:"\u8fdc\u7a0b\u6570\u636e\u52a8\u6001\u8d4b\u503c"},"\u8fdc\u7a0b\u6570\u636e\u52a8\u6001\u8d4b\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo2\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo2 = xmSelect.render({\n    el: '#demo2', \n    toolbar: {show: true},\n    data: []\n})\n\naxios({\n    method: 'get',\n    url: 'https://www.fastmock.site/mock/98228b1f16b7e5112d6c0c87921eabc1/xmSelect/search',\n}).then(response => {\n    var res = response.data;\n    \n    demo2.update({\n        data: res.data,\n        autoRow: true,\n    })\n});\n\n<\/script>\n")),(0,l.kt)("h2",{id:"\u52a8\u6001\u521b\u5efaxm-select\u591a\u9009"},"\u52a8\u6001\u521b\u5efaxm-select\u591a\u9009"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<table id=\"form-create\" class=\"layui-table\">\n    <thead>\n        <tr>\n            <th style=\"width: 50px;\">\u5e8f\u53f7</th>\n            <th>\u6027\u522b</th>\n            <th>\u7231\u597d</th>\n            <th style=\"width: 150px;\">\u64cd\u4f5c</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td colspan=\"3\">\n                <span>\u8fd9\u91cc\u5462, \u6f14\u793a\u4e00\u4e0b\u52a8\u6001\u6dfb\u52a0\u591a\u9009\u7684\u4f8b\u5b50</span>\n            </td>\n            <td colspan=\"1\">\n                <div class=\"layui-btn-group\">\n                    <button type=\"button\" class=\"layui-btn add\">\u589e\u52a0</button>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<script>\nvar $ = layui.jquery;\nvar index = 1;\n                \n$('.add').on('click', function(){\n    var element = $([\n        '<tr>',\n            '<td>'+ index +'</td>',\n            '<td class=\"gender\"></td>',\n            '<td class=\"hobby\"></td>',\n            '<td class=\"handler\">',\n                '<button type=\"button\" class=\"layui-btn layui-btn-normal get\">\u53d6\u503c</button>',\n                '<button type=\"button\" class=\"layui-btn layui-btn-danger del\">\u5220\u9664</button>',\n            '</td>',\n        '</tr>',\n    ].join(''))\n    \n    var hobby = element.find('.hobby')[0];\n    var hobbySelect = xmSelect.render({\n        el: hobby,\n        data: function(){\n            return [\n                {name: '\u7bee\u7403' + index, value: 1},\n                {name: '\u8db3\u7403' + index, value: 2},\n                {name: '\u4e52\u4e53\u7403' + index, value: 3},\n            ]\n        }\n    })\n    \n    var gender = element.find('.gender')[0];\n    xmSelect.render({\n        el: gender,\n        radio: true,\n        clickClose: true,\n        model: { label: { type: 'text' } },\n        data: function(){\n            return [\n                {name: '\u7537', value: 1},\n                {name: '\u5973', value: 2},\n                {name: '\u4fdd\u5bc6', value: 3},\n            ]\n        },\n        on: function(data){\n            var changeItem = data.change[0];\n            if(data.isAdd && changeItem.value == 3){\n                this.update({ disabled: true })\n            }else{\n                this.update({ disabled: false })\n            }\n        }.bind(hobbySelect),\n    })\n    \n    element.find('.get').on('click', function(){\n        alert('valueStr: ' + this.getValue('valueStr'));\n    }.bind(hobbySelect))\n    \n    element.find('.del').on('click', function(){\n        $(this).parents('tr').remove();\n    })\n    \n    index++;\n    \n    $('#form-create tbody').append(element)\n});\n<\/script>\n")))}m.isMDXComponent=!0}}]);