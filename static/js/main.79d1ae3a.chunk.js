(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(7),c=n.n(o),r=n(4),s=n(6),i=n(1),u=(n(12),n(0)),b=function(t){var e=t.goods;return Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsx)("li",{children:t},t)}))})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],a=function(){var t=Object(i.useState)(j),e=Object(s.a)(t,2),n=e[0],o=e[1],c=Object(i.useState)(!1),a=Object(s.a)(c,2),l=a[0],d=a[1];return l?Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Goods"}),Object(u.jsx)("button",{type:"button",onClick:function(){o(Object(r.a)(n).reverse())},children:"Reverse"}),Object(u.jsx)("button",{type:"button",onClick:function(){o(Object(r.a)(n).sort((function(t,e){return t.localeCompare(e)})))},children:"Sort by Name"}),Object(u.jsx)("button",{type:"button",onClick:function(){o(Object(r.a)(n).sort((function(t,e){return t.length-e.length})))},children:"Sort by Length"}),Object(u.jsx)("button",{type:"button",onClick:function(){o(j)},children:"Reset"}),Object(u.jsx)(b,{goods:n})]}):Object(u.jsx)("button",{type:"button",onClick:function(){d(!0)},children:"Start"})};c.a.render(Object(u.jsx)(a,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.79d1ae3a.chunk.js.map