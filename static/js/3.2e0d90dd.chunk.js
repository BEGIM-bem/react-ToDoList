(this["webpackJsonptasks1-to-do-list"]=this["webpackJsonptasks1-to-do-list"]||[]).push([[3],{18:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.r(e);var u=r(3),c=r(1),a=r(0);e.default=function(t){var e=t.onCreate,r={inputStyle:{marginBottom:"1rem",height:"30px",width:"400px",border:"2px solid white",borderRadius:"4px",background:"#722bba",boxShadow:"0 0 18px rgba(0,0,0,0.9)"},btn:{border:"2px solid white",borderRadius:"4px",height:"35px",marginLeft:"10px",width:"78px",background:"#8d4ff0",fontSize:"14px",fontWeight:"bold",whiteSpace:"nowrap ",boxShadow:"0 0 18px rgba(0,0,0,0.9)"}},n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=Object(c.useState)(t),r=Object(u.a)(e,2),n=r[0],o=r[1];return{bind:{value:n,onChange:function(t){return o(t.target.value)}},clear:function(){return o("")},value:function(){return n}}}("");return Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n.value().trim()&&(e(n.value()),n.clear())},children:[Object(a.jsx)("input",i(i({},n.bind),{},{style:r.inputStyle})),Object(a.jsx)("button",{type:"sumbit",style:r.btn,children:"Add Todo"})]})}}}]);
//# sourceMappingURL=3.2e0d90dd.chunk.js.map