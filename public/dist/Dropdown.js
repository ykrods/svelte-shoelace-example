import{S as e,i as t,s,e as n,a as c,t as a,q as i,b as o,c as r,r as m,u as d,v as l,n as u,d as p,J as h}from"./main2.js";import"./chunk.XEUDMZWS.js";function k(e){let t,s,k,f,x,b,w,D,g,j,v,C,I,S,q,E,J,M,U,W,X;return{c(){t=n("div"),s=n("h1"),s.textContent="Dropdown",k=c(),f=n("p"),x=n("sl-dropdown"),b=n("sl-button"),b.textContent="Dropdown",w=c(),D=n("sl-menu"),g=n("sl-menu-item"),j=a("Item 1"),C=c(),I=n("sl-menu-item"),S=a("Item 2"),E=c(),J=n("br"),M=a("\n    selected: "),U=a(e[0]),i(b,"slot","trigger"),i(b,"caret",""),i(g,"checked",v="item1"===e[0]),i(I,"checked",q="item2"===e[0]),o(t,"class","content")},m(n,c){r(n,t,c),m(t,s),m(t,k),m(t,f),m(f,x),m(x,b),m(x,w),m(x,D),m(D,g),m(g,j),m(D,C),m(D,I),m(I,S),m(f,E),m(f,J),m(f,M),m(f,U),W||(X=[d(g,"click",e[1]),d(I,"click",e[2])],W=!0)},p(e,[t]){1&t&&v!==(v="item1"===e[0])&&i(g,"checked",v),1&t&&q!==(q="item2"===e[0])&&i(I,"checked",q),1&t&&l(U,e[0])},i:u,o:u,d(e){e&&p(t),W=!1,h(X)}}}function f(e,t,s){let n="";return[n,()=>{s(0,n="item1")},()=>{s(0,n="item2")}]}export default class extends e{constructor(e){super(),t(this,e,f,k,s,{})}}