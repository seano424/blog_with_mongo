(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{220:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),a=n(86),c=n.n(a),i=(n(96),n(16)),o=(n(97),n(12)),l=n(1);function u(e){var t=e.message,n=e.user;return Object(l.jsx)("div",{children:null!==t&&null!==n&&Object(l.jsxs)("h1",{children:[" ",n.username," is logged in"]})})}function d(e){var t=e.user,n=e.setUser,s=e.children,r=e.message;return Object(l.jsxs)("div",{children:[Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex items-center my-4 mx-4 justify-between",children:[Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/",children:"Home"})}),Object(l.jsx)(u,{user:t,message:r}),Object(l.jsxs)("div",{className:"flex items-center gap-6",children:[Object(l.jsx)("li",{children:null===t?Object(l.jsx)(o.b,{to:"/login",children:"Login"}):Object(l.jsx)("button",{onClick:function(){window.localStorage.removeItem("loggedBlogappUser"),n(null)},children:"Logout"})}),Object(l.jsx)("li",{className:"border rounded-full border-green-300 px-4 py-2",children:Object(l.jsx)(o.b,{to:"/create",children:"Write"})})]})]})}),s]})}function b(){return Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("h1",{className:"absolute top-64 right-0 left-0 mx-auto w-full text-white font-mono text-7xl text-center",children:"Sean's Medium"}),Object(l.jsx)("img",{style:{height:"500px",objectFit:"cover"},className:"w-full",src:"https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1330&q=80",alt:"Landing Page Hero"})]})}var j=n(7),m=n(10),x=n(17),h=n(15),p=n.n(h),f=n(25),g=n(26),O=n.n(g),v="/api/blogs",w=null,y={getAll:function(){return O.a.get(v).then((function(e){return e.data}))},create:function(){var e=Object(f.a)(p.a.mark((function e(t){var n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:w}},e.next=3,O.a.post(v,t,n);case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),destroy:function(e){return O.a.delete("".concat(v,"/").concat(e)).then((function(e){return e.data}))},setToken:function(e){w="bearer ".concat(e)}};function N(e){var t=e.setBlogs,n=e.blogs;return Object(l.jsx)(m.c,{initialValues:{title:"",author:"",content:""},validationSchema:x.a({title:x.b().max(45,"Must be 15 characters or less").required("Required "),author:x.b().max(20,"Must be 20 characters or less").required("Required "),content:x.b().required("Required ")}),onSubmit:function(e,s){var r=s.setSubmitting,a=s.resetForm,c={title:e.title,author:e.author,content:e.content,image:e.image};y.create(c).then((function(e){t([].concat(Object(j.a)(n),[c]))})),setTimeout((function(){r(!1),a({values:{title:"",author:"",content:"",image:""}})}),400)},children:Object(l.jsxs)(m.b,{className:"flex flex-col gap-10 w-7/12 mx-auto",children:[Object(l.jsx)("div",{children:Object(l.jsx)(m.a,{placeholder:"Title",className:"w-full text-3xl font-mono focus:outline-none",name:"title",type:"text"})}),Object(l.jsx)("div",{children:Object(l.jsx)(m.a,{autoFocus:!0,placeholder:"Tell your story",className:"w-full h-64 focus:outline-none",as:"textarea",name:"content",type:"text"})}),Object(l.jsx)("div",{children:Object(l.jsx)(m.a,{placeholder:"Author",className:"w-full focus:outline-none",name:"author",type:"text"})}),Object(l.jsx)("div",{children:Object(l.jsx)(m.a,{placeholder:"Image URL",className:"w-full focus:outline-none",name:"image",type:"url"})}),Object(l.jsx)("button",{type:"submit",className:"bg-gray-100 w-min flex self-center px-10 py-2 rounded-full font-mono",children:"Publish"})]})})}function S(e){var t=e.blogs,n=e.setBlogs,s=e.user;return Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsxs)("div",{className:"flex items-center justify-between w-8/12 mx-auto my-10",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"font-mono border-b-8 border-yellow-200",children:Object(l.jsxs)(o.b,{to:"/blogs/".concat(e.title),children:[e.title," ",e.author&&"by ".concat(e.author)]})}),Object(l.jsx)("p",{className:"truncate w-96",children:e.content})]}),null!==s&&e.user&&e.user.username===s.username&&Object(l.jsx)("button",{onClick:function(){return s=e.id,n(t.filter((function(e){return e.id!==s}))),void y.destroy(s);var s},className:"bg-red-500 text-white rounded-full px-10 py-2",children:"Destroy Blog"})]},e.id)}))})}var q=n(2),k={login:function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(e){var t=e.setUser,n=e.setMessage,s=Object(q.f)();return Object(l.jsx)(m.c,{initialValues:{username:"",password:""},validationSchema:x.a({username:x.b().max(40,"Must be 40 characters or less").required("Required"),password:x.b().required("Required")}),onSubmit:function(){var e=Object(f.a)(p.a.mark((function e(r,a){var c,i,o,l,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.setSubmitting,i=a.resetForm,o=r.username,l=r.password,e.prev=2,e.next=5,k.login({username:o,password:l});case 5:u=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(u)),y.setToken(u.token),t(u),n("Correct credentials"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),n("Wrong credentials");case 15:setTimeout((function(){n(null),c(!1),i({values:{username:"",password:""}}),"/create"===s.location.pathname?s.goForward():s.goBack()}),1e3);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n){return e.apply(this,arguments)}}(),children:Object(l.jsxs)(m.b,{className:"flex flex-col w-4/12 mx-auto",children:[Object(l.jsxs)("div",{className:"flex flex-col py-4",children:[Object(l.jsx)("label",{htmlFor:"username",children:"Username"}),Object(l.jsx)(m.a,{className:"border p-1",name:"username",type:"text"})]}),Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)(m.a,{className:"border p-1",name:"password",type:"password"}),Object(l.jsx)("button",{className:"border border-green-200 rounded-full w-max px-4 py-3 mx-auto mt-4",type:"submit",children:"Submit"})]})})};function F(e){var t=e.blogs,n=Object(q.g)().blogTitle,s=t.find((function(e){return e.title===n}));return Object(l.jsxs)("div",{className:"w-6/12 mx-auto",children:[Object(l.jsx)("h1",{className:"text-4xl font-mono",children:s.title}),Object(l.jsx)("h4",{children:s.author&&"~ ".concat(s.author)}),s.image&&Object(l.jsx)("div",{className:"my-8",children:Object(l.jsx)("img",{src:s.image,alt:"".concat(s.title)})}),Object(l.jsx)("p",{className:"mt-10 tracking-wider leading-8",children:s.content}),Object(l.jsx)("p",{className:"tracking-wider leading-8",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quibusdam hic sequi a tempore asperiores eius est placeat? Nihil, expedita quasi? Consectetur eligendi beatae vitae, incidunt autem explicabo suscipit obcaecati at dignissimos ea recusandae quidem velit. Vitae rerum omnis consectetur officiis reiciendis quod adipisci! Ea pariatur accusamus laboriosam id placeat cum rerum dicta, corporis repellat temporibus sunt. Fugiat nesciunt ut a voluptas officiis. Aut dolorem, voluptatibus laborum tempore incidunt aperiam consectetur provident, pariatur voluptas necessitatibus amet architecto fugiat cumque eius rerum, non ipsum nulla nesciunt cum perferendis est esse. Sapiente velit esse ipsa dolores ipsam autem, necessitatibus dolor tenetur optio?"})]})}var M=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(null),c=Object(i.a)(a,2),o=c[0],u=c[1],j=Object(s.useState)(null),m=Object(i.a)(j,2),x=m[0],h=m[1];return console.log("user: ",o),console.log("blogs: ",n),Object(s.useEffect)((function(){y.getAll().then((function(e){r(e)}))}),[]),Object(s.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);u(t),y.setToken(t.token)}}),[]),Object(l.jsx)(d,{message:x,user:o,setUser:u,children:Object(l.jsxs)(q.c,{children:[Object(l.jsx)(q.a,{path:"/blogs/:blogTitle",children:Object(l.jsx)(F,{blogs:n})}),Object(l.jsx)(q.a,{path:"/create",children:null===o?Object(l.jsx)(B,{setUser:u,setMessage:h}):Object(l.jsx)(N,{setBlogs:r,blogs:n})}),Object(l.jsx)(q.a,{path:"/login",children:Object(l.jsx)(B,{setUser:u,setMessage:h})}),Object(l.jsxs)(q.a,{path:"/",children:[Object(l.jsx)(b,{}),Object(l.jsx)(S,{setBlogs:r,blogs:n,user:o})]})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,221)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))};c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(M,{})})}),document.getElementById("root")),T()},96:function(e,t,n){},97:function(e,t,n){}},[[220,1,2]]]);
//# sourceMappingURL=main.ca13b054.chunk.js.map