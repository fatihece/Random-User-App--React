(this["webpackJsonprandom-user-app--react"]=this["webpackJsonprandom-user-app--react"]||[]).push([[0],{19:function(e,t,s){},20:function(e,t,s){},22:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(13),n=s.n(a),i=(s(19),s(4)),r=(s(20),s(0)),l=function(e){var t=e.onButtonClick;return Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:t,children:"Random User"})})},o=(s(22),s.p+"static/media/email.e1f03bb9.svg"),j=s.p+"static/media/location.0b7d98ab.svg",d=s.p+"static/media/phone.d017e1ae.svg",b=function(e){return Object(r.jsxs)("div",{className:"container mt-5",children:[Object(r.jsxs)("div",{className:"info-box",children:[Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("img",{className:"avatar",src:e.image}),Object(r.jsxs)("h3",{children:[e.title," ",e.name," ",e.last]})]}),Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("img",{height:40,width:40,src:o,alt:"email"}),Object(r.jsx)("p",{children:e.email})]}),Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("img",{height:40,width:40,src:d,alt:"phone"}),Object(r.jsx)("p",{children:e.cell})]}),Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("img",{height:40,width:40,src:j,alt:"location"}),Object(r.jsxs)("p",{children:[e.city," / ",e.country]})]})]}),Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsx)("p",{children:"Age: ".concat(e.age)}),Object(r.jsx)("p",{children:"Register Date: ".concat(e.date)})]})]})},u=s(14),m=s.n(u),h=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),o=Object(i.a)(n,2),j=o[0],d=o[1];return Object(c.useEffect)((function(){m.a.get("https://randomuser.me/api/").then((function(e){return d(e.data)}))}),[s]),console.log(j),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(b,{image:j.results[0].picture.large,title:j.results[0].name.title,last:j.results[0].name.last,email:j.results[0].email,cell:j.results[0].phone,name:j.results[0].name.first,country:j.results[0].location.country,city:j.results[0].location.city,age:j.results[0].dob.age,date:j.results[0].registered.date.slice(0,10)}),Object(r.jsx)(l,{onButtonClick:function(){a(!s)}})]})};n.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.685c6428.chunk.js.map