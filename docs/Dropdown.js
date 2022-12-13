import{f as e,g as t,_ as a,j as s,w as r,k as i,l,S as o,i as n,s as c,e as d,a as p,t as m,m as h,b as u,c as v,p as b,q as g,u as k,n as C,d as f,M as w}from"./main2.js";import"./chunk.OCR5UKKD.js";import"./chunk.G5HV7L2U.js";var x=e`
  ${t}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,y=class extends l{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};function j(e){let t,a,s,r,i,l,o,n,c,x,y,j,D,V,A,I,K,U,q,z,B,G,H,L,M;return{c(){t=d("div"),a=d("h1"),a.textContent="Dropdown",s=p(),r=d("p"),i=d("sl-dropdown"),l=d("sl-button"),l.textContent="Dropdown",o=p(),n=d("sl-menu"),c=d("sl-menu-item"),x=m("Item 1"),j=p(),D=d("sl-menu-item"),V=m("Item 2"),I=p(),K=d("sl-divider"),U=p(),q=d("sl-menu-item"),q.textContent="Clear",z=p(),B=d("br"),G=m("\n    selected: "),H=m(e[0]),h(l,"slot","trigger"),h(l,"caret",""),h(c,"value","item1"),h(c,"checked",y="item1"===e[0]),h(D,"value","item2"),h(D,"checked",A="item2"===e[0]),u(t,"class","content")},m(d,p){v(d,t,p),b(t,a),b(t,s),b(t,r),b(r,i),b(i,l),b(i,o),b(i,n),b(n,c),b(c,x),b(n,j),b(n,D),b(D,V),b(n,I),b(n,K),b(n,U),b(n,q),b(r,z),b(r,B),b(r,G),b(r,H),L||(M=[g(q,"click",e[2]),g(i,"sl-select",e[1])],L=!0)},p(e,[t]){1&t&&y!==(y="item1"===e[0])&&h(c,"checked",y),1&t&&A!==(A="item2"===e[0])&&h(D,"checked",A),1&t&&k(H,e[0])},i:C,o:C,d(e){e&&f(t),L=!1,w(M)}}}function D(e,t,a){let s="";return[s,function(e){a(0,s=e.detail.item.value)},()=>{a(0,s="")}]}y.styles=x,a([s({type:Boolean,reflect:!0})],y.prototype,"vertical",2),a([r("vertical")],y.prototype,"handleVerticalChange",1),y=a([i("sl-divider")],y);class V extends o{constructor(e){super(),n(this,e,D,j,c,{})}}export{V as default};
