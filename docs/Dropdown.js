import{S as t,i as e,s,e as n,a as c,t as a,m as i,b as o,c as m,p as r,q as d,u as l,n as u,d as p,M as h}from"./main2.js";import"./chunk.OCR5UKKD.js";import"./chunk.G5HV7L2U.js";function k(t){let e,s,k,f,x,b,j,w,C,D,g,I,K,U,q,v,G,H,L,M,O;return{c(){e=n("div"),s=n("h1"),s.textContent="Dropdown",k=c(),f=n("p"),x=n("sl-dropdown"),b=n("sl-button"),b.textContent="Dropdown",j=c(),w=n("sl-menu"),C=n("sl-menu-item"),D=a("Item 1"),I=c(),K=n("sl-menu-item"),U=a("Item 2"),v=c(),G=n("br"),H=a("\n    selected: "),L=a(t[0]),i(b,"slot","trigger"),i(b,"caret",""),i(C,"checked",g="item1"===t[0]),i(K,"checked",q="item2"===t[0]),o(e,"class","content")},m(n,c){m(n,e,c),r(e,s),r(e,k),r(e,f),r(f,x),r(x,b),r(x,j),r(x,w),r(w,C),r(C,D),r(w,I),r(w,K),r(K,U),r(f,v),r(f,G),r(f,H),r(f,L),M||(O=[d(C,"click",t[1]),d(K,"click",t[2])],M=!0)},p(t,[e]){1&e&&g!==(g="item1"===t[0])&&i(C,"checked",g),1&e&&q!==(q="item2"===t[0])&&i(K,"checked",q),1&e&&l(L,t[0])},i:u,o:u,d(t){t&&p(e),M=!1,h(O)}}}function f(t,e,s){let n="";return[n,()=>{s(0,n="item1")},()=>{s(0,n="item2")}]}class x extends t{constructor(t){super(),e(this,t,f,k,s,{})}}export{x as default};
