(this["webpackJsonpasd-internship-datepicker"]=this["webpackJsonpasd-internship-datepicker"]||[]).push([[0],{27:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(10),c=t.n(i),l=(t(21),t(2)),o=t(8),u=t(11),d=t.n(u),s=t(0),b=function(e){var n=e.children;return Object(s.jsx)("div",{children:n})},j=function(e){var n=e.onClick,t=e.disabled,a=e.children;return Object(s.jsx)("button",{onClick:n,disabled:t,children:a})},g=function(e){var n=e.onChange,t=e.value,a=e.children;return Object(s.jsx)("select",{value:t,onChange:n,children:a})},p=function(e){var n=e.value,t=e.children;return Object(s.jsx)("option",{value:n,children:t})},f=[31,28,31,30,31,30,31,31,30,31,30,31],m=[6,0,1,2,3,4,5],h=1,x=[2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],O=["\u0421\u0456\u0447\u0435\u043d\u044c","\u041b\u044e\u0442\u0438\u0439","\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c","\u041a\u0432\u0456\u0442\u0435\u043d\u044c","\u0422\u0440\u0430\u0432\u0435\u043d\u044c","\u0427\u0435\u0440\u0432\u0435\u043d\u044c","\u041b\u0438\u043f\u0435\u043d\u044c","\u0421\u0435\u0440\u043f\u0435\u043d\u044c","\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c","\u0416\u043e\u0432\u0442\u0435\u043d\u044c","\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434","\u0413\u0440\u0443\u0434\u0435\u043d\u044c"],v=["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u041d\u0434"];function y(e,n){return!(!e||!n)&&(e.getFullYear()===n.getFullYear()&&e.getMonth()===n.getMonth()&&e.getDate()===n.getDate())}function w(e,n){for(var t=[],a=new Date(e,n),r=function(e){var n=e.getMonth(),t=e.getFullYear(),a=f[n];return function(e){return!(e%4||!(e%100)&&e%400)}(t)&&n===h?a+1:a}(a),i=function(e){var n=e.getDay();return m[n]}(a),c=1,l=0;l<(r+i)/7;l++){t[l]=[];for(var o=0;o<7;o++)t[l][o]=0===l&&o<i||c>r?void 0:new Date(e,n,c++)}return t}var k,T=function(e){var n=e.onChange,t=void 0===n?Function.prototype:n,r=e.type,i=e.years,c=void 0===i?x:i,u=e.monthNames,f=void 0===u?O:u,m=e.weekDayNames,h=void 0===m?v:m,k=Object(a.useState)(new Date),T=Object(l.a)(k,2),D=T[0],C=T[1],F=Object(a.useState)(null),S=Object(l.a)(F,2),M=S[0],N=S[1],Y=Object(a.useState)(null),_=Object(l.a)(Y,2),E=_[0],z=_[1],A=Object(a.useState)([]),B=Object(l.a)(A,2),I=B[0],J=B[1];Object(a.useEffect)((function(){t(M,E)}),[M,E,t]),Object(a.useEffect)((function(){J([]),N(null),z(null)}),[r]);var L=w(D.getFullYear(),D.getMonth()),R=function(e,n){var t=864e5;if(e.getTime()<n.getTime())for(var a=function(e){J((function(n){return[].concat(Object(o.a)(n),[new Date(e)])}))},r=e.getTime();r<=n.getTime();r+=t)a(r);else for(var i=function(e){J((function(n){return[].concat(Object(o.a)(n),[new Date(e)])}))},c=n.getTime();c<=e.getTime();c+=t)i(c)};return Object(s.jsxs)("div",{className:"calendar",children:[Object(s.jsxs)(b,{children:[Object(s.jsx)(j,{onClick:function(){C(new Date(D.getFullYear(),D.getMonth()-1))},disabled:D.getFullYear()===c[0]&&0===D.getMonth(),children:"<"}),Object(s.jsx)(g,{value:D.getMonth(),onChange:function(e){var n=e.target.value;C(new Date(D.getFullYear(),n))},children:f.map((function(e,n){return Object(s.jsx)(p,{value:n,children:e},e)}))}),Object(s.jsx)(g,{value:D.getFullYear(),onChange:function(e){var n=e.target.value;C(new Date(n,D.getMonth()))},children:c.map((function(e){return Object(s.jsx)(p,{value:e,children:e},e)}))}),Object(s.jsx)(j,{onClick:function(){C(new Date(D.getFullYear(),D.getMonth()+1))},disabled:D.getFullYear()===c[c.length-1]&&11===D.getMonth(),children:">"})]}),Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsx)("tr",{children:h.map((function(e){return Object(s.jsx)("th",{children:e},e)}))})}),Object(s.jsx)("tbody",{children:L.map((function(e,n){return Object(s.jsx)("tr",{className:"week",children:e.map((function(e,n){return e?Object(s.jsx)("td",{className:d()("day",{today:y(e,new Date),selected:y(e,M)||I.some((function(n){return y(e,n)}))}),onClick:function(){return function(e){if(r&&"simple"===r){if(y(e,M))return void N(null);N(e)}r&&"range"===r&&(null===M&&N(e),null!==M&&e.getTime()===M.getTime()&&(N(null),z(null),J([])),null!==M&&e.getTime()!==M.getTime()&&null===E&&(z(e),R(M,e)),null!==M&&null!==E&&M&&e.getTime()!==M.getTime()&&I.every((function(n){return n.getTime()!==e.getTime()}))&&(N(e),z(null),J([])),null!==M&&null!==E&&M&&e.getTime()!==M.getTime()&&I.some((function(n){return n.getTime()===e.getTime()}))&&(J([]),z(e),R(M,e)))}(e)},children:e.getDate()},n):Object(s.jsx)("td",{},n)}))},n)}))})]})]})},D=function(e){var n=e.onChange,t=function(e){n(e.target.value)};return Object(s.jsxs)("div",{className:"radiobuttons-form",onChange:function(e){return t(e)},children:[Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"radio",value:"simple",name:"type",defaultChecked:!0}),"Simple"]}),Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"radio",value:"range",name:"type"}),"Range"]}),Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"radio",value:"multirange",name:"type"}),"Multirange"]})]})},C=function(e){var n=e.type,t=e.start,a=e.end,r=e.ranges;return"simple"===n?Object(s.jsx)("div",{className:"inputs",children:Object(s.jsx)("input",{disabled:!0,value:t})}):"range"===n?Object(s.jsxs)("div",{className:"inputs",children:[Object(s.jsx)("input",{disabled:!0,value:t}),"__",Object(s.jsx)("input",{disabled:!0,value:a})]}):"multirange"===n?Object(s.jsx)(s.Fragment,{children:r.map((function(e){return e?Object(s.jsxs)("div",{className:"inputs",children:[Object(s.jsx)("input",{disabled:!0,value:t}),"__",Object(s.jsx)("input",{disabled:!0,value:t})]},e):Object(s.jsx)(s.Fragment,{})}))}):void 0},F=function(){var e=Object(a.useState)(null),n=Object(l.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)(null),c=Object(l.a)(i,2),o=c[0],u=c[1],d=Object(a.useState)("simple"),b=Object(l.a)(d,2),j=b[0],g=b[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(D,{onChange:function(e){return g(e)}}),Object(s.jsx)(C,{type:j,start:t?t.toLocaleDateString():"--.--.----",end:o?o.toLocaleDateString():"--.--.----",ranges:[1,2,3]}),Object(s.jsx)(T,{onChange:function(e,n){return function(e,n){"simple"===j&&r(e),"range"===j&&(e&&n&&e.getTime()>n.getTime()?(r(n),u(e)):(r(e),u(n)))}(e,n)},type:j})]})},S=t(12),M=t(13),N=Object(M.a)(k||(k=Object(S.a)(["\nbody {\n  background-color: dodgerblue;\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton,\ninput,\nselect {\n  height: 2em;\n  font-size: 1rem;\n  background-color: #fff;\n  color: #363636;\n  border: 1px solid #dbdbdb;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton:focus,\ninput:focus,\nselect:focus {\n  outline: none;\n}\n\nbutton {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.25em 0.75em;\n  text-align: center;\n}\n\nbutton[disabled] {\n  background-color: #dbdbdb;\n}\n\nselect,\ninput {\n  padding: 0.25em 0.5em;\n}\n\ninput {\n  max-width: 40%;\n}\n\n.App {\n  max-width: 320px;\n  padding: 10px;\n  border: 2px solid #0081ff;\n  border-radius: 20px;\n  background-color: #ffffff;\n}\n\n.radiobuttons-form {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 10px;\n}\n\n.inputs {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.calendar div {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 8px;\n}\n\n.calendar div button,\n.calendar div select {\n  margin: 0 4px;\n}\n\n.calendar table {\n  table-layout: fixed;\n  border-collapse: separate;\n  border-spacing: 0;\n  margin: auto;\n}\n\n.calendar th {\n  vertical-align: middle;\n  text-align: center;\n  height: 36px;\n}\n\n.calendar .day {\n  padding: 4px 8px;\n  vertical-align: middle;\n  text-align: center;\n  border: 2px solid transparent;\n  border-radius: 10px;\n}\n\n.calendar .day:hover {\n  background-color: #eaeaea;\n  cursor: pointer;\n}\n\n.calendar .day.selected {\n  border: 2px solid dodgerblue;\n}\n\n.calendar .day.today {\n  background-color: dodgerblue;\n  color: white;\n}\n\n.calendar .day.today:hover {\n  background-color: #0081ff;\n}\n\n.calendar .day.today.selected {\n  border: 2px solid lightgray;\n}\n"])));c.a.render(Object(s.jsxs)(r.a.StrictMode,{children:[Object(s.jsx)(N,{}),Object(s.jsx)(F,{})]}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.0e4e82cc.chunk.js.map