"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[482],{953:function(t,e,n){var r=n(152),u=n(791);e.Z=function(t){var e=(0,u.useState)(""),n=(0,r.Z)(e,2),a=n[0],o=n[1],l=(0,u.useState)(!1),i=(0,r.Z)(l,2),c=i[0],s=i[1];return{value:a,valueisvalid:t(a),istouched:c,reset:function(){o(""),s(!1)},changeinput:function(t){s(!0),o(t.target.value)},blurhandler:function(t){s(!0)}}}},482:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var r=n(791),u=n(394),a=n(953),o=n(412),l=n(206),i=n(658),c=n(184);function s(){var t=(0,o.I0)(),e=(0,a.Z)((function(t){return t.includes("@")})),n=e.value,s=e.valueisvalid,d=e.istouched,f=e.changeinput,p=e.blurhandler,m=n.replaceAll(".","");return(0,c.jsxs)(r.Fragment,{children:[(0,c.jsxs)("div",{className:"input-group  mt-2 p-3 p-md-5",children:[(0,c.jsx)("h4",{className:"text-center col-12 mt-3 mx-auto",children:"Enter your email address to use the App"}),(0,c.jsx)("input",{type:"search",className:" form-control shadow-none",placeholder:"Email Address",onChange:f,value:n,onBlur:p}),(0,c.jsx)(u.rU,{to:s?"/Main/".concat(m):"/login",className:"btn px-md-5 ".concat(i.Z.userbutton),type:"Button",onClick:function(){t(l.k0.setID(n))},children:"Go To App"})]}),!s&&d&&(0,c.jsx)("div",{className:"text-center col-12 mx-auto text-danger",children:"Please enter a valid Email Address!"})]})}},658:function(t,e){e.Z={userbutton:"Form_userbutton__7X-k4",userinput:"Form_userinput__N6k4f"}},152:function(t,e,n){function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,u,a=[],o=!0,l=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(i){l=!0,u=i}finally{try{o||null==n.return||n.return()}finally{if(l)throw u}}return a}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,{Z:function(){return u}})}}]);
//# sourceMappingURL=482.a80de455.chunk.js.map