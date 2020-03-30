(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{yP2n:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return p}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var a=n("/FXl"),i=n("TjRS"),o=n("ZFoC"),r=n("jH8T"),l=n("MYPM");n("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/Editable/doc/Editable.mdx"}});var c={_frontmatter:b},d=i.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(d,s({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"editable"},"Editable"),Object(a.b)("p",null,"This component control the inline edition for the element passed as child. The element(s) passed as children only will be visible\nwhen are in edit mode after edition the value will be displayed by this component."),Object(a.b)("h2",{id:"how-to-use"},"How to use"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-javascript"}),'import { Editable } from "@outsystemsui";\n\nconst MyEditableInputComponent = () => {\n    const inputRef = useRef();\n    const [task, setTask] = useState("");\n\n    return (\n        <Editable\n            text={task}\n            placeholder="Write a task name"\n            childRef={inputRef}\n            type="input"\n        >\n            <input\n                ref={inputRef}\n                type="text"\n                name="task"\n                placeholder="Write a task name"\n                value={task}\n                onChange={e => setTask(e.target.value)}\n            />\n        </Editable>\n    );\n};\n\nexport default MyEditableComponent;\n')),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"with-input"},"With Input"),Object(a.b)(l.a,{mdxType:"UsageWithInput"}),Object(a.b)("h3",{id:"with-textarea"},"With TextArea"),Object(a.b)(l.b,{mdxType:"UsageWithTextArea"}),Object(a.b)("h2",{id:"playground"},"Playground"),Object(a.b)(o.c,{__position:2,__code:"<div></div>",__scope:{props:n,DefaultLayout:i.a,Playground:o.c,Props:o.d,Editable:r.a,UsageWithInput:l.a,UsageWithTextArea:l.b},mdxType:"Playground"},Object(a.b)("div",null)),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)(o.d,{of:r.a,mdxType:"Props"}))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/Editable/doc/Editable.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-editable-doc-editable-mdx-3349fc6e4a88618eed8a.js.map