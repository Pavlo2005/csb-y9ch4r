(this["webpackJsonpgoit-textbook-lesson-15-16-auth-final"]=this["webpackJsonpgoit-textbook-lesson-15-16-auth-final"]||[]).push([[4],{93:function(t,e,s){t.exports={wrapper:"Task_wrapper__1Un4J",text:"Task_text__7szr-",button:"Task_button__3pPk3"}},94:function(t,e,s){t.exports={list:"TaskList_list__2xVr5"}},95:function(t,e,s){t.exports={form:"TaskEditor_form__2xrrE",input:"TaskEditor_input__tR2ob",button:"TaskEditor_button__nCK47"}},97:function(t,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return k}));var n=s(0),c=s(11),r=s(84),a=s(12),o=s(93),i=s.n(o),b=s(3);const u=t=>{let{id:e,text:s}=t;const n=Object(c.b)();return Object(b.jsxs)("div",{className:i.a.wrapper,children:[Object(b.jsx)("p",{className:i.a.text,children:s}),Object(b.jsx)("button",{type:"button",className:i.a.button,onClick:()=>n(Object(a.b)(e)),children:"Delete"})]})},j=t=>t.tasks.loading,l=t=>t.tasks.items;var x=s(94),p=s.n(x);const d=()=>{const t=Object(c.c)(l);return Object(b.jsx)("ul",{className:p.a.list,children:t.map((t=>{let{id:e,text:s}=t;return Object(b.jsx)("li",{children:Object(b.jsx)(u,{id:e,text:s})},e)}))})};var O=s(95),_=s.n(O);const m=()=>{const t=Object(c.b)();return Object(b.jsxs)("form",{className:_.a.form,onSubmit:e=>{e.preventDefault();const s=e.currentTarget,n=s.elements.text.value;if(""!==n)return t(Object(a.a)(n)),void s.reset();alert("Task cannot be empty. Enter some text!")},children:[Object(b.jsx)("input",{name:"text",className:_.a.input}),Object(b.jsx)("button",{type:"submit",className:_.a.button,children:"Add task"})]})};function k(){const t=Object(c.b)(),e=Object(c.c)(j);return Object(n.useEffect)((()=>{t(Object(a.c)())}),[t]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(r.a,{children:Object(b.jsx)("title",{children:"Your tasks"})}),Object(b.jsx)(m,{}),Object(b.jsx)("div",{children:e&&"Request in progress..."}),Object(b.jsx)(d,{})]})}}}]);
//# sourceMappingURL=4.5002da45.chunk.js.map