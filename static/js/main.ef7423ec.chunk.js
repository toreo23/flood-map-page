(this["webpackJsonpflood-map"]=this["webpackJsonpflood-map"]||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),s=(n(56),n(13)),i=(n.p,n(57),n(58),n(104)),l=n(102),u=n(99),j=n(105),b=n(12),p=n.n(b),h=n(10),f=function(e){var t=e.level;return Object(a.useEffect)((function(){}),[t]),Object(h.jsx)(j.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://www.floodmap.net/getFMTile.ashx?x={x}&y={y}&z={z}&e="+t,opacity:.6})},O=n(96),d=n(100),g=n(101),x=n(107),m=n(39),v=n(40),y=n(106),S=p.a.icon({iconUrl:m.a,shadowUrl:v.a,iconSize:[25,41],iconAnchor:[10,41],popupAnchor:[2,-40]});p.a.Marker.prototype.options.icon=S;var k={color:"red"};var w=function(){var e=Object(a.useState)([22.3,114,2]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(15),o=Object(s.a)(r,2),b=o[0],p=o[1],m=Object(a.useState)(1500),v=Object(s.a)(m,2),S=v[0],w=v[1],z=Object(a.useState)(10),C=Object(s.a)(z,2),F=C[0],I=C[1];Object(a.useEffect)((function(){I(parseInt(.3048*S))}),[S]);var L=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2);t[0],t[1],Object(O.a)({click:function(e){c([e.latlng.lat,e.latlng.lng])}});return null};return Object(h.jsxs)("div",{className:"App",style:{display:"flex","flex-direction":"row"},children:[Object(h.jsxs)(i.a,{style:{flex:1},children:[Object(h.jsx)(l.a,{id:"radius",label:"Radius (km)",type:"number",value:b,InputLabelProps:{shrink:!0},onChange:function(e){return p(e.target.value)},margin:"dense"}),Object(h.jsx)(l.a,{id:"heightft",label:"Height (ft)",type:"number",value:S,InputLabelProps:{shrink:!0},onChange:function(e){return w(e.target.value)},margin:"dense"}),Object(h.jsxs)(u.a,{align:"center",children:["Source:",Object(h.jsx)(y.a,{href:"https://floodmap.net",target:"_blank",rel:"noreferrer",children:"https://floodmap.net"})]})]}),Object(h.jsx)(i.a,{style:{flex:4},children:Object(h.jsxs)(d.a,{center:n,zoom:11,style:{height:"100vh"},children:[Object(h.jsx)(j.a,{attribution:"",url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}),Object(h.jsx)(f,{level:F},F),Object(h.jsx)(g.a,{position:n}),Object(h.jsx)(x.a,{center:n,pathOptions:k,radius:1e3*b}),Object(h.jsx)(L,{})]})})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),z()}},[[65,1,2]]]);
//# sourceMappingURL=main.ef7423ec.chunk.js.map