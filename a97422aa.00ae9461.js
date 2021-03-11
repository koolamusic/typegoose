(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{105:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return d}));var n=o(3),a=o(7),i=(o(0),o(134)),r={id:"faq",title:"FAQ"},c={unversionedId:"guides/faq",id:"guides/faq",isDocsHomePage:!1,title:"FAQ",description:"Repository",source:"@site/../docs/guides/faq.md",slug:"/guides/faq",permalink:"/typegoose/docs/guides/faq",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/faq.md",version:"current",sidebar:"guides",previous:{title:"Quick Start Guide",permalink:"/typegoose/docs/guides/quick-start-guide"},next:{title:"Known Issues",permalink:"/typegoose/docs/guides/known-issues"}},s=[{value:"Repository",id:"repository",children:[{value:"What happened to the original author?",id:"what-happened-to-the-original-author",children:[]},{value:"Is this Project still active?",id:"is-this-project-still-active",children:[]},{value:"Why is the original project not archived?",id:"why-is-the-original-project-not-archived",children:[]},{value:"Why is the package now released in another package?",id:"why-is-the-package-now-released-in-another-package",children:[]},{value:"Why @typegoose/typegoose",id:"why-typegoosetypegoose",children:[]}]},{value:"Functional",id:"functional",children:[{value:"Why does <code>new Model({})</code> not have types?",id:"why-does-new-model-not-have-types",children:[]},{value:"Why is 7.4.x constrained to mongoose 5.10.18?",id:"why-is-74x-constrained-to-mongoose-51018",children:[]}]},{value:"Edge Cases",id:"edge-cases",children:[{value:"I want to the return document with property <code>id</code> instead of <code>_id</code>",id:"i-want-to-the-return-document-with-property-id-instead-of-_id",children:[]}]}],p={toc:s};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"repository"},"Repository"),Object(i.b)("h3",{id:"what-happened-to-the-original-author"},"What happened to the original author?"),Object(i.b)("p",null,"A: The original author szokodiakos (github name) ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/szokodiakos/typegoose/issues/99#issuecomment-364639150"}),"has abandoned the project"),", but might look into it again at some time."),Object(i.b)("h3",{id:"is-this-project-still-active"},"Is this Project still active?"),Object(i.b)("p",null,"A: Yes it is, but not on the main repository anymore because of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#what-happened-to-the-original-author"}),"What happened to the original author?")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/en/articles/permission-levels-for-a-user-account-repository"}),"Github Permissions")," (TL;DR: a collaborator cannot add another collaborater, only the owner can)"),Object(i.b)("h3",{id:"why-is-the-original-project-not-archived"},"Why is the original project not archived?"),Object(i.b)("p",null,"A: because a collaborator cannot archive a project, only the owner can (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#what-happened-to-the-original-author"}),"What happened to the original author?"),")"),Object(i.b)("h3",{id:"why-is-the-package-now-released-in-another-package"},"Why is the package now released in another package?"),Object(i.b)("p",null,"(context: from ",Object(i.b)("inlineCode",{parentName:"p"},"typegoose")," to ",Object(i.b)("inlineCode",{parentName:"p"},"@typegoose/typegoose"),")",Object(i.b)("br",null),"\nA: Because of a Repository Switch (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#is-this-project-still-active"}),"reasons"),") and because a name cannot be used by multiple packages, except if it is scoped."),Object(i.b)("h3",{id:"why-typegoosetypegoose"},"Why @typegoose/typegoose"),Object(i.b)("p",null,"A: because I (hasezoey) don't have permissions over the old ",Object(i.b)("inlineCode",{parentName:"p"},"typegoose")," repository and I dont want to touch the old npm package. It is a typical forking and continuation of an OSS project."),Object(i.b)("h2",{id:"functional"},"Functional"),Object(i.b)("h3",{id:"why-does-new-model-not-have-types"},"Why does ",Object(i.b)("inlineCode",{parentName:"h3"},"new Model({})")," not have types?"),Object(i.b)("p",null,"A: because Typegoose doesn't modify any Mongoose code, it is still the same as Mongoose's original ",Object(i.b)("inlineCode",{parentName:"p"},"new Model()"),", you would have to do ",Object(i.b)("inlineCode",{parentName:"p"},"new Model({} as Class)")," (or sometimes ",Object(i.b)("inlineCode",{parentName:"p"},"new Model({} as Partial<Class>)"),", because of functions.)"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"since ",Object(i.b)("inlineCode",{parentName:"p"},"@types/mongoose@5.7.22")," there are typings for ",Object(i.b)("inlineCode",{parentName:"p"},".create"),", but are not fully compatible with Typegoose. For more information please read ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/typegoose/docs/guides/known-issues#typesmongoose5722-and-higher"}),"known-issues")))),Object(i.b)("h3",{id:"why-is-74x-constrained-to-mongoose-51018"},"Why is 7.4.x constrained to mongoose 5.10.18?"),Object(i.b)("p",null,"A: this because in mongoose 5.10.19 and higher, mongoose has its own typescript definitions, and typegoose is not upgraded for that yet"),Object(i.b)("h2",{id:"edge-cases"},"Edge Cases"),Object(i.b)("h3",{id:"i-want-to-the-return-document-with-property-id-instead-of-_id"},"I want to the return document with property ",Object(i.b)("inlineCode",{parentName:"h3"},"id")," instead of ",Object(i.b)("inlineCode",{parentName:"h3"},"_id")),Object(i.b)("p",null,"Mongoose automatically adds a virtual named ",Object(i.b)("inlineCode",{parentName:"p"},"id"),", use the following for type definitions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"class Cat {\n  id: mongoose.Types.ObjectId;\n  _id: mongoose.Types.ObjectId;\n}\n")))}d.isMDXComponent=!0},134:function(e,t,o){"use strict";o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return u}));var n=o(0),a=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},l=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(o),b=n,u=l["".concat(r,".").concat(b)]||l[b]||h[b]||i;return o?a.a.createElement(u,c(c({ref:t},p),{},{components:o})):a.a.createElement(u,c({ref:t},p))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var p=2;p<i;p++)r[p]=o[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);