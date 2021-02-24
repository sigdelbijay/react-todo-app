(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(e,t,n){e.exports={item:"TodoItem_item__1qmQU",checkbox:"TodoItem_checkbox__qBfuw",textInput:"TodoItem_textInput__1-LEa"}},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(24),i=n.n(a),s=n(8),r=n(11),l=n(22),u=n(9),d=n(3),j=n(41),b=n(16),p=n(17),h=n.n(p),x=n(2),O=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),o=n[0],a=n[1];Object(c.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]);var i=e.todo,s=i.completed,r=i.id,l=i.title,d={},j={};return o?d.display="none":j.display="none",Object(x.jsxs)("li",{className:h.a.item,children:[Object(x.jsxs)("div",{onDoubleClick:function(){a(!0)},style:d,children:[Object(x.jsx)("input",{type:"checkbox",className:h.a.checkbox,checked:s,onChange:function(){return e.handleChangeProps(r)}}),Object(x.jsx)("button",{onClick:function(){return e.deleteTodoProps(r)},children:Object(x.jsx)(b.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(x.jsx)("span",{style:s?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:l})]}),Object(x.jsx)("input",{type:"text",style:j,className:h.a.textInput,value:l,onChange:function(t){e.setUpdateProps(t.target.value,r)},onKeyDown:function(e){"Enter"===e.key&&a(!1)}})]})},f=function(e){return Object(x.jsx)("ul",{children:e.todos.map((function(t){return Object(x.jsx)(O,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdateProps:e.setUpdateProps},t.id)}))})},m=function(){return Object(x.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(x.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"Todos"})})},g=n(14),y=function(e){var t=Object(c.useState)({title:""}),n=Object(u.a)(t,2),o=n[0],a=n[1];return Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o.title.trim()?(e.addTodoProps(o.title),a({title:""})):alert("Please write item")},className:"form-container",children:[Object(x.jsx)("input",{type:"text",className:"input-text",placeholder:"Add Todo...",value:o.title,name:"title",onChange:function(e){a(Object(r.a)(Object(r.a)({},o),{},Object(g.a)({},e.target.name,e.target.value)))}}),Object(x.jsx)("button",{className:"input-submit",children:Object(x.jsx)(b.a,{style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"}})})]})},v=function(){console.log("useParams",Object(d.f)());var e=Object(d.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(t){return t.slug===e})),n=t.title,c=t.description;return Object(x.jsxs)("div",{className:"main__content",children:[Object(x.jsx)("h1",{children:n}),Object(x.jsx)("p",{children:c})]})},N=function(e){console.log("useRouteMatch",Object(d.g)());var t=Object(d.g)(),n=t.url,c=t.path;return Object(x.jsxs)("div",{className:"about__content",children:[Object(x.jsxs)("ul",{className:"about__list",children:[Object(x.jsx)("li",{children:Object(x.jsx)(s.b,{to:"".concat(n,"/about-app"),children:"About app"})}),Object(x.jsx)("li",{children:Object(x.jsx)(s.b,{to:"".concat(n,"/about-author"),children:"About author"})})]}),Object(x.jsx)(d.a,{path:"".concat(c,"/:slug"),children:Object(x.jsx)(v,{})})]})},w=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h3",{children:"Not match for this page"})})},T=n(26),k=n(27),P=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(x.jsxs)("nav",{className:"navBar",children:[Object(x.jsx)("button",{onClick:function(){o((function(e){return!e}))},children:n?Object(x.jsx)(T.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(x.jsx)(k.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(x.jsx)("ul",{className:"menuNav ".concat(n?" showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(s.c,{to:e.path,activeClassName:"active-link",onClick:function(){o(!1)},exact:!0,children:e.text})},e.id)}))})]})},S=function(){var e=Object(c.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(P,{}),Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{exact:!0,path:"/",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"inner",children:[Object(x.jsx)(m,{}),Object(x.jsx)(y,{addTodoProps:function(e){o([].concat(Object(l.a)(n),[{id:Object(j.a)(),title:e,completed:!1}]))}}),Object(x.jsx)(f,{todos:n,handleChangeProps:function(e){o((function(t){return t.todos.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){o(Object(l.a)(n.filter((function(t){return t.id!==e}))))},setUpdateProps:function(e,t){o(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]})})}),Object(x.jsx)(d.a,{path:"/about",children:Object(x.jsx)(N,{})}),Object(x.jsx)(d.a,{path:"*",children:Object(x.jsx)(w,{})})]})]})};n(38);i.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(s.a,{children:Object(x.jsx)(S,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6b08475e.chunk.js.map