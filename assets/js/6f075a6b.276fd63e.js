"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[749],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},387:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={title:"SSH\u516c\u94a5"},l=void 0,c={unversionedId:"ssh/sshkey",id:"ssh/sshkey",title:"SSH\u516c\u94a5",description:"\u751f\u6210\u516c\u94a5",source:"@site/docs/ssh/sshkey.md",sourceDirName:"ssh",slug:"/ssh/sshkey",permalink:"/docs/ssh/sshkey",tags:[],version:"current",frontMatter:{title:"SSH\u516c\u94a5"},sidebar:"tutorialSidebar",previous:{title:"\u8d26\u53f7\u5207\u6362",permalink:"/docs/ssh/change"},next:{title:"CSS",permalink:"/docs/css/"}},u={},p=[{value:"\u751f\u6210\u516c\u94a5",id:"\u751f\u6210\u516c\u94a5",level:2},{value:"ed25519",id:"ed25519",level:3},{value:"rsa",id:"rsa",level:3},{value:"\u6dfb\u52a0\u516c\u94a5",id:"\u6dfb\u52a0\u516c\u94a5",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u751f\u6210\u516c\u94a5"},"\u751f\u6210\u516c\u94a5"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210sshkey\uff1a"),(0,s.kt)("h3",{id:"ed25519"},"ed25519"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -t ed25519 -C "ur_email@example.com"\n')),(0,s.kt)("h3",{id:"rsa"},"rsa"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -t rsa -b 4096 -C "ur_email@example.com"\n')),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f\u4e0d\u652f\u6301 Ed25519 \u7b97\u6cd5\u7684\u65e7\u7cfb\u7edf\uff0c\u8bf7\u4f7f\u7528\u7b2c\u4e8c\u79cd ",(0,s.kt)("inlineCode",{parentName:"strong"},"rsa")," \u3002"),(0,s.kt)("br",{parentName:"p"}),"\n","\u8fd9\u91cc\u7684 ",(0,s.kt)("a",{parentName:"p",href:"mailto:ur_email@example.com"},"ur_email@example.com")," \u53ea\u662f\u751f\u6210\u7684 sshkey \u7684\u540d\u79f0\uff0c\u5e76\u4e0d\u7ea6\u675f\u6216\u8981\u6c42\u5177\u4f53\u547d\u540d\u4e3a\u67d0\u4e2a\u90ae\u7bb1\u3002"))),(0,s.kt)("p",null,"\u6309\u7167\u63d0\u793a\u5b8c\u6210\u4e09\u6b21\u56de\u8f66\uff0c\u5373\u53ef\u751f\u6210shh key\u3002\u901a\u8fc7\u67e5\u770b ~/.ssh/id_ed25519.pub \u6587\u4ef6\u5185\u5bb9\uff0c\u83b7\u53d6\u5230\u4f60\u7684 public key \u516c\u94a5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.ssh/id_ed25519.pub\n# ssh-ed25519 AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc....\n")),(0,s.kt)("h2",{id:"\u6dfb\u52a0\u516c\u94a5"},"\u6dfb\u52a0\u516c\u94a5"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"\u4ee5Github\u4e3a\u4f8b"))),(0,s.kt)("p",null,"\u590d\u5236\u751f\u6210\u540e\u7684 ssh key\uff0c\u901a\u8fc7\u4e2a\u4eba\u4e2d\u5fc3 \u300csetting\u300d->\u300cSSH and GPG keys\u300d->\u300cNew SSH key\u300d\uff0c\u6dfb\u52a0\u751f\u6210\u7684 public key \u6dfb\u52a0\u5230SSH keys\u4e2d\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://fuckjs.gitee.io/cdn/docs-leedom-me/add-public-key.png",alt:"\u6dfb\u52a0\u516c\u94a5\u81f3github"})),(0,s.kt)("p",null,"\u6dfb\u52a0\u540e\uff0c\u5728\u7ec8\u7aef\uff08Terminal\uff09\u4e2d\u8f93\u5165"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -T git@github.com\n# Hi XXX! You've successfully authenticated, but GitHub does not provide shell access.\n")),(0,s.kt)("p",null,"\u9996\u6b21\u4f7f\u7528\u9700\u8981\u786e\u8ba4\u5e76\u6dfb\u52a0\u4e3b\u673a\u5230\u672c\u673aSSH\u53ef\u4fe1\u5217\u8868\u3002\u82e5\u8fd4\u56de ",(0,s.kt)("inlineCode",{parentName:"p"},"Hi XXX! You've successfully authenticated, but GitHub does not provide shell access.")," \u5185\u5bb9\uff0c\u5219\u8bc1\u660e\u6dfb\u52a0\u6210\u529f\ud83c\udf89\u3002\u6dfb\u52a0\u6210\u529f\u540e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528SSH\u534f\u8bae\u5bf9\u4ed3\u5e93\u8fdb\u884c\u64cd\u4f5c\u4e86\ud83d\ude09\u3002"))}m.isMDXComponent=!0}}]);