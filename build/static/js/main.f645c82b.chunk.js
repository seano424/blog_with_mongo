(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{217:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(84),a=n.n(s),r=(n(94),n(19)),o=(n(95),n(12)),l=n(1);function u(e){var t=e.children;return Object(l.jsxs)("div",{children:[Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex items-center my-4 mx-4 justify-between",children:[Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"border rounded-full border-green-300 px-4 py-2",children:Object(l.jsx)(o.b,{to:"/create",children:"Write"})})]})}),t]})}function d(){return Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("h1",{className:"absolute top-64 right-0 left-0 mx-auto w-full text-white font-mono text-7xl text-center",children:"Sean's Medium"}),Object(l.jsx)("img",{style:{height:"500px",objectFit:"cover"},className:"w-full",src:"https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1330&q=80",alt:"Landing Page Hero"})]})}var b=n(7),j=n(21),m=n(29),h=n(39),x=n.n(h),f="/api/blogs",p={getAll:function(){return x.a.get(f).then((function(e){return e.data}))},create:function(e){return x.a.post(f,e).then((function(e){return e.data}))},destroy:function(e){return x.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))}};function g(e){var t=e.setBlogs,n=e.blogs;return Object(l.jsx)(j.c,{initialValues:{title:"",author:"",content:""},validationSchema:m.a({title:m.b().max(45,"Must be 15 characters or less").required("Required "),author:m.b().max(20,"Must be 20 characters or less").required("Required "),content:m.b().required("Required ")}),onSubmit:function(e,c){var i=c.setSubmitting,s=c.resetForm;console.log("values",e);var a={title:e.title,author:e.author,content:e.content,image:e.image};p.create(a).then((function(e){t([].concat(Object(b.a)(n),[a]))})),setTimeout((function(){i(!1),s({values:{title:"",author:"",content:"",image:""}})}),400)},children:Object(l.jsxs)(j.b,{className:"flex flex-col gap-10 w-7/12 mx-auto",children:[Object(l.jsx)("div",{children:Object(l.jsx)(j.a,{placeholder:"Title",className:"w-full text-3xl font-mono focus:outline-none",name:"title",type:"text"})}),Object(l.jsx)("div",{children:Object(l.jsx)(j.a,{autoFocus:!0,placeholder:"Tell your story",className:"w-full h-64 focus:outline-none",as:"textarea",name:"content",type:"text"})}),Object(l.jsx)("div",{children:Object(l.jsx)(j.a,{placeholder:"Author",className:"w-full focus:outline-none",name:"author",type:"text"})}),Object(l.jsx)("div",{children:Object(l.jsx)(j.a,{placeholder:"Image URL",className:"w-full focus:outline-none",name:"image",type:"url"})}),Object(l.jsx)("button",{type:"submit",className:"bg-gray-100 w-min flex self-center px-10 py-2 rounded-full font-mono",children:"Publish"})]})})}function O(e){var t=e.blogs,n=e.setBlogs;return Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsxs)("div",{className:"flex items-center justify-between w-6/12 mx-auto my-10",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"font-mono border-b-8 border-yellow-200",children:Object(l.jsxs)(o.b,{to:"/blogs/".concat(e.title),children:[e.title," ",e.author&&"by ".concat(e.author)]})}),Object(l.jsx)("p",{className:"truncate w-96",children:e.content})]}),Object(l.jsx)("button",{onClick:function(){return c=e.id,n(t.filter((function(e){return e.id!==c}))),void p.destroy(c);var c},className:"bg-red-500 text-white rounded-full px-10 py-2",children:"Destroy Blog"})]},e.id)}))})}var v=n(2);function y(e){var t=e.blogs,n=Object(v.f)().blogTitle,c=t.find((function(e){return e.title===n}));return Object(l.jsxs)("div",{className:"w-6/12 mx-auto",children:[Object(l.jsx)("h1",{className:"text-4xl font-mono",children:c.title}),Object(l.jsx)("h4",{children:c.author&&"~ ".concat(c.author)}),c.image&&Object(l.jsx)("div",{className:"my-8",children:Object(l.jsx)("img",{src:c.image,alt:"".concat(c.title)})}),Object(l.jsxs)("p",{className:"mt-10 tracking-wider leading-8",children:[c.content," Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quibusdam hic sequi a tempore asperiores eius est placeat? Nihil, expedita quasi? Consectetur eligendi beatae vitae, incidunt autem explicabo suscipit obcaecati at dignissimos ea recusandae quidem velit. Vitae rerum omnis consectetur officiis reiciendis quod adipisci! Ea pariatur accusamus laboriosam id placeat cum rerum dicta, corporis repellat temporibus sunt. Fugiat nesciunt ut a voluptas officiis. Aut dolorem, voluptatibus laborum tempore incidunt aperiam consectetur provident, pariatur voluptas necessitatibus amet architecto fugiat cumque eius rerum, non ipsum nulla nesciunt cum perferendis est esse. Sapiente velit esse ipsa dolores ipsam autem, necessitatibus dolor tenetur optio?"]})]})}var w=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){p.getAll().then((function(e){i(e)}))}),[]),console.log(n),Object(l.jsx)(u,{children:Object(l.jsxs)(v.c,{children:[Object(l.jsx)(v.a,{path:"/blogs/:blogTitle",children:Object(l.jsx)(y,{blogs:n})}),Object(l.jsx)(v.a,{path:"/create",children:Object(l.jsx)(g,{setBlogs:i,blogs:n})}),Object(l.jsxs)(v.a,{path:"/",children:[Object(l.jsx)(d,{}),Object(l.jsx)(O,{setBlogs:i,blogs:n})]})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,218)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(w,{})})}),document.getElementById("root")),N()},94:function(e,t,n){},95:function(e,t,n){}},[[217,1,2]]]);
//# sourceMappingURL=main.f645c82b.chunk.js.map