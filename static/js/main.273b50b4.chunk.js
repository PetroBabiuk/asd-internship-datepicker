(this["webpackJsonpasd-internship-datepicker"]=this["webpackJsonpasd-internship-datepicker"]||[]).push([[0],{27:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(10),c=t.n(i),l=(t(21),t(2)),o=t(8),u=t(11),d=t.n(u),s=[31,28,31,30,31,30,31,31,30,31,30,31],b=[6,0,1,2,3,4,5],g=1,j=[2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],p=["\u0421\u0456\u0447\u0435\u043d\u044c","\u041b\u044e\u0442\u0438\u0439","\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c","\u041a\u0432\u0456\u0442\u0435\u043d\u044c","\u0422\u0440\u0430\u0432\u0435\u043d\u044c","\u0427\u0435\u0440\u0432\u0435\u043d\u044c","\u041b\u0438\u043f\u0435\u043d\u044c","\u0421\u0435\u0440\u043f\u0435\u043d\u044c","\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c","\u0416\u043e\u0432\u0442\u0435\u043d\u044c","\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434","\u0413\u0440\u0443\u0434\u0435\u043d\u044c"],f=["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"];function m(e,n){return!(!e||!n)&&(e.getFullYear()===n.getFullYear()&&e.getMonth()===n.getMonth()&&e.getDate()===n.getDate())}function x(e,n){for(var t=[],a=new Date(e,n),r=function(e){var n=e.getMonth(),t=e.getFullYear(),a=s[n];return function(e){return!(e%4||!(e%100)&&e%400)}(t)&&n===g?a+1:a}(a),i=function(e){var n=e.getDay();return b[n]}(a),c=1,l=0;l<(r+i)/7;l++){t[l]=[];for(var o=0;o<7;o++)t[l][o]=0===l&&o<i||c>r?void 0:new Date(e,n,c++)}return t}var h,O=t(0),v=function(e){var n=e.onChange,t=void 0===n?Function.prototype:n,r=e.type,i=e.years,c=void 0===i?j:i,u=e.monthNames,s=void 0===u?p:u,b=e.weekDayNames,g=void 0===b?f:b,h=Object(a.useState)(new Date),v=Object(l.a)(h,2),y=v[0],w=v[1],T=Object(a.useState)(null),k=Object(l.a)(T,2),D=k[0],F=k[1],S=Object(a.useState)(null),M=Object(l.a)(S,2),C=M[0],N=M[1],Y=Object(a.useState)([]),_=Object(l.a)(Y,2),E=_[0],z=_[1];Object(a.useEffect)((function(){t(D,C)}),[D,C,t]),Object(a.useEffect)((function(){z([]),F(null),N(null)}),[r]);var A=x(y.getFullYear(),y.getMonth()),B=function(e,n){var t=864e5;if(e.getTime()<n.getTime())for(var a=function(e){z((function(n){return[].concat(Object(o.a)(n),[new Date(e)])}))},r=e.getTime();r<=n.getTime();r+=t)a(r);else for(var i=function(e){z((function(n){return[].concat(Object(o.a)(n),[new Date(e)])}))},c=n.getTime();c<=e.getTime();c+=t)i(c)};return Object(O.jsxs)("div",{className:"calendar",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:function(){w(new Date(y.getFullYear(),y.getMonth()-1))},disabled:y.getFullYear()===c[0]&&0===y.getMonth(),children:"<"}),Object(O.jsx)("select",{value:y.getMonth(),onChange:function(e){var n=e.target.value;w(new Date(y.getFullYear(),n))},children:s.map((function(e,n){return Object(O.jsx)("option",{value:n,children:e},e)}))}),Object(O.jsx)("select",{value:y.getFullYear(),onChange:function(e){var n=e.target.value;w(new Date(n,y.getMonth()))},children:c.map((function(e){return Object(O.jsx)("option",{value:e,children:e},e)}))}),Object(O.jsx)("button",{onClick:function(){w(new Date(y.getFullYear(),y.getMonth()+1))},disabled:y.getFullYear()===c[c.length-1]&&11===y.getMonth(),children:">"})]}),Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{children:g.map((function(e){return Object(O.jsx)("th",{children:e},e)}))})}),Object(O.jsx)("tbody",{children:A.map((function(e,n){return Object(O.jsx)("tr",{className:"week",children:e.map((function(e,n){return e?Object(O.jsx)("td",{className:d()("day",{today:m(e,new Date),selected:m(e,D)||E.some((function(n){return m(e,n)}))}),onClick:function(){return function(e){if(r&&"simple"===r){if(m(e,D))return void F(null);F(e)}r&&"range"===r&&(null===D&&F(e),null!==D&&e.getTime()===D.getTime()&&(F(null),N(null),z([])),null!==D&&e.getTime()!==D.getTime()&&null===C&&(N(e),B(D,e)),null!==D&&null!==C&&D&&e.getTime()!==D.getTime()&&E.every((function(n){return n.getTime()!==e.getTime()}))&&(F(e),N(null),z([])),null!==D&&null!==C&&D&&e.getTime()!==D.getTime()&&E.some((function(n){return n.getTime()===e.getTime()}))&&(z([]),N(e),B(D,e)))}(e)},children:e.getDate()},n):Object(O.jsx)("td",{},n)}))},n)}))})]})]})},y=function(e){var n=e.onChange,t=function(e){n(e.target.value)};return Object(O.jsxs)("div",{className:"radiobuttons-form",onChange:function(e){return t(e)},children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",value:"simple",name:"type",defaultChecked:!0}),"Simple"]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",value:"range",name:"type"}),"Range"]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",value:"multirange",name:"type"}),"Multirange"]})]})},w=function(e){var n=e.type,t=e.start,a=e.end,r=e.ranges;return"simple"===n?Object(O.jsx)("div",{className:"inputs",children:Object(O.jsx)("input",{disabled:!0,value:t})}):"range"===n?Object(O.jsxs)("div",{className:"inputs",children:[Object(O.jsx)("input",{disabled:!0,value:t}),"__",Object(O.jsx)("input",{disabled:!0,value:a})]}):"multirange"===n?Object(O.jsx)(O.Fragment,{children:r.map((function(e){return e?Object(O.jsxs)("div",{className:"inputs",children:[Object(O.jsx)("input",{disabled:!0,value:t}),"__",Object(O.jsx)("input",{disabled:!0,value:t})]},e):Object(O.jsx)(O.Fragment,{})}))}):void 0},T=function(){var e=Object(a.useState)(null),n=Object(l.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)(null),c=Object(l.a)(i,2),o=c[0],u=c[1],d=Object(a.useState)("simple"),s=Object(l.a)(d,2),b=s[0],g=s[1];return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(y,{onChange:function(e){return g(e)}}),Object(O.jsx)(w,{type:b,start:t?t.toLocaleDateString():"--.--.----",end:o?o.toLocaleDateString():"--.--.----",ranges:[1,2,3]}),Object(O.jsx)(v,{onChange:function(e,n){return function(e,n){"simple"===b&&r(e),"range"===b&&(e&&n&&e.getTime()>n.getTime()?(r(n),u(e)):(r(e),u(n)))}(e,n)},type:b})]})},k=t(12),D=t(13),F=Object(D.a)(h||(h=Object(k.a)(["\nbody {\n  background-color: dodgerblue;\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton,\ninput,\nselect {\n  height: 2em;\n  font-size: 1rem;\n  background-color: #fff;\n  color: #363636;\n  border: 1px solid #dbdbdb;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton:focus,\ninput:focus,\nselect:focus {\n  outline: none;\n}\n\nbutton {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.25em 0.75em;\n  text-align: center;\n}\n\nbutton[disabled] {\n  background-color: #dbdbdb;\n}\n\nselect,\ninput {\n  padding: 0.25em 0.5em;\n}\n\ninput {\n  max-width: 40%;\n}\n\n.App {\n  max-width: 320px;\n  padding: 10px;\n  border: 2px solid #0081ff;\n  border-radius: 20px;\n  background-color: #ffffff;\n}\n\n.radiobuttons-form {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 10px;\n}\n\n.inputs {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.calendar div {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 8px;\n}\n\n.calendar div button,\n.calendar div select {\n  margin: 0 4px;\n}\n\n.calendar table {\n  table-layout: fixed;\n  border-collapse: separate;\n  border-spacing: 0;\n  margin: auto;\n}\n\n.calendar th {\n  vertical-align: middle;\n  text-align: center;\n  height: 36px;\n}\n\n.calendar .day {\n  padding: 4px 8px;\n  vertical-align: middle;\n  text-align: center;\n  border: 2px solid transparent;\n  border-radius: 10px;\n}\n\n.calendar .day:hover {\n  background-color: #eaeaea;\n  cursor: pointer;\n}\n\n.calendar .day.selected {\n  border: 2px solid dodgerblue;\n}\n\n.calendar .day.today {\n  background-color: dodgerblue;\n  color: white;\n}\n\n.calendar .day.today:hover {\n  background-color: #0081ff;\n}\n\n.calendar .day.today.selected {\n  border: 2px solid lightgray;\n}\n"])));c.a.render(Object(O.jsxs)(r.a.StrictMode,{children:[Object(O.jsx)(F,{}),Object(O.jsx)(T,{})]}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.273b50b4.chunk.js.map