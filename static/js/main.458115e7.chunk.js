(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,c){"use strict";c.r(a);var t=c(4),n=c.n(t),r=c(3),l=c(1);c(9);var i=c(0),s=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,r=Math.ceil(a/c);return Object(i.jsxs)("ul",{className:"pagination",children:[Object(i.jsx)("li",{className:"page-item ".concat(0===t?"disabled":""),children:Object(i.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":0===t,onClick:function(e){e.preventDefault(),t-1<0||n(Number(t-1))},children:"\xab"})}),new Array(r).fill(void 0).map((function(e,a){return Object(i.jsx)("li",{className:"page-item ".concat(a===t?"active":""),children:Object(i.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(a+1),onClick:function(e){e.preventDefault(),n(Number(a))},children:a+1},e)})})),Object(i.jsx)("li",{className:"page-item ".concat(t+1===r?"disabled":""),children:Object(i.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t+1===r,onClick:function(e){e.preventDefault(),t+1!==r&&n(Number(t+1))},children:"\xbb"})})]})},o=function(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}(1,42).map((function(e){return"Item ".concat(e)})),j=function(){var e=Object(l.useState)(5),a=Object(r.a)(e,2),c=a[0],t=a[1],n=Object(l.useState)(0),j=Object(r.a)(n,2),u=j[0],d=j[1],m=c*u+1,b=c*u+c;return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:"Items with Pagination"}),Object(i.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(u+1," (items ").concat(m," - ").concat(b>o.length?o.length:b," of ").concat(o.length,")")}),Object(i.jsxs)("div",{className:"form-group row",children:[Object(i.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(i.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){d(0),t(Number(e.target.value))},value:c,children:[3,5,10,20].map((function(e){return Object(i.jsx)("option",{value:e,children:e})}))})}),Object(i.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(i.jsx)(s,{total:o.length,perPage:c,currentPage:u,onPageChange:d}),Object(i.jsx)("ul",{children:o.slice(m-1,b).map((function(e){return Object(i.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(i.jsx)(j,{}),document.getElementById("root"))},9:function(e,a,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.458115e7.chunk.js.map