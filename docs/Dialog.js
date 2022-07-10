import{r as e,f as t,_ as a,g as s,h as o,w as i,j as l,k as n,l as r,m as d,$ as c,o as h,G as p,S as u,i as f,s as g,Q as m,e as y,a as v,p as b,c as w,q as _,u as x,R as $,T as k,U as C,V as z,W as K,d as D,P as E,X as F,Y as L,y as U,Z as q,a0 as P,t as S,b as A,a1 as H,a2 as I,x as T,a3 as j}from"./main2.js";import{e as O,s as B,H as R,L as Y,l as G,u as Q,g as V,b as W,a as X}from"./chunk.YHAURCL4.js";var Z=[],J=e`
  ${t}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }
`,M=class extends n{constructor(){super(...arguments),this.hasSlotController=new R(this,"footer"),this.localize=new Y(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new class{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Z.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Z=Z.filter((e=>e!==this.element)),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Z[Z.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:e,end:t}=O(this.element),a="forward"===this.tabDirection?e:t;"function"==typeof(null==a?void 0:a.focus)&&a.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(e){"Tab"===e.key&&e.shiftKey&&(this.tabDirection="backward"),requestAnimationFrame((()=>this.checkFocus()))}handleKeyUp(){this.tabDirection="forward"}}(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.modal.activate(),G(this))}disconnectedCallback(){super.disconnectedCallback(),Q(this)}async show(){if(!this.open)return this.open=!0,r(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,r(this,"sl-after-hide")}requestClose(e){if(d(this,"sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const e=V(this,"dialog.denyClose",{dir:this.localize.dir()});W(this.panel,e.keyframes,e.options)}else this.hide()}handleKeyDown(e){"Escape"===e.key&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){d(this,"sl-show"),this.originalTrigger=document.activeElement,this.modal.activate(),G(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([X(this.dialog),X(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{d(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")}));const t=V(this,"dialog.show",{dir:this.localize.dir()}),a=V(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([W(this.panel,t.keyframes,t.options),W(this.overlay,a.keyframes,a.options)]),d(this,"sl-after-show")}else{d(this,"sl-hide"),this.modal.deactivate(),await Promise.all([X(this.dialog),X(this.overlay)]);const e=V(this,"dialog.hide",{dir:this.localize.dir()}),t=V(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([W(this.panel,e.keyframes,e.options),W(this.overlay,t.keyframes,t.options)]),this.dialog.hidden=!0,Q(this);const a=this.originalTrigger;"function"==typeof(null==a?void 0:a.focus)&&setTimeout((()=>a.focus())),d(this,"sl-after-hide")}}render(){return c`
      <div
        part="base"
        class=${h({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${p(this.noHeader?this.label:void 0)}
          aria-labelledby=${p(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":c`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="dialog__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click="${()=>this.requestClose("close-button")}"
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};function N(e){let t,a,s,o,i,l,n,r;const d=e[5].default,c=m(d,e,e[4],null);return{c(){t=y("sl-dialog"),c&&c.c(),a=v(),s=y("sl-button"),s.textContent="Cancel",o=v(),i=y("sl-button"),i.textContent="OK",b(s,"slot","footer"),b(s,"variant","secondary"),b(i,"slot","footer"),b(i,"variant","primary"),b(t,"label",e[0])},m(d,h){w(d,t,h),c&&c.m(t,null),_(t,a),_(t,s),_(t,o),_(t,i),e[8](t),l=!0,n||(r=[x(s,"click",e[6]),x(i,"click",e[7])],n=!0)},p(e,[a]){c&&c.p&&(!l||16&a)&&$(c,d,e,e[4],l?C(d,e[4],a,null):k(e[4]),null),(!l||1&a)&&b(t,"label",e[0])},i(e){l||(z(c,e),l=!0)},o(e){K(c,e),l=!1},d(a){a&&D(t),c&&c.d(a),e[8](null),n=!1,E(r)}}}function ee(e,t,a){let s,{$$slots:o={},$$scope:i}=t,{visible:l=!1}=t,{label:n=""}=t,r=F(),d=!1;L((()=>{const e=()=>{r(d?"confirmed":"cancelled"),a(3,l=!1)};return s.addEventListener("sl-after-hide",e),()=>{s.removeEventListener("sl-after-hide",e)}}));return e.$$set=e=>{"visible"in e&&a(3,l=e.visible),"label"in e&&a(0,n=e.label),"$$scope"in e&&a(4,i=e.$$scope)},e.$$.update=()=>{10&e.$$.dirty&&l&&(a(2,d=!1),s.show())},[n,s,d,l,i,o,()=>{s.hide()},()=>{a(2,d=!0),s.hide()},function(e){U[e?"unshift":"push"]((()=>{s=e,a(1,s)}))}]}M.styles=J,a([s(".dialog")],M.prototype,"dialog",2),a([s(".dialog__panel")],M.prototype,"panel",2),a([s(".dialog__overlay")],M.prototype,"overlay",2),a([o({type:Boolean,reflect:!0})],M.prototype,"open",2),a([o({reflect:!0})],M.prototype,"label",2),a([o({attribute:"no-header",type:Boolean,reflect:!0})],M.prototype,"noHeader",2),a([i("open",{waitUntilFirstUpdate:!0})],M.prototype,"handleOpenChange",1),M=a([l("sl-dialog")],M),B("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}}),B("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}}),B("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}}),B("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),B("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});class te extends u{constructor(e){super(),f(this,e,ee,N,g,{visible:3,label:0})}}function ae(e){let t;return{c(){t=S("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(e,a){w(e,t,a)},d(e){e&&D(t)}}}function se(e){let t,a,s,o,i,l,n,r,d,c,h,p,u;function f(t){e[2](t)}let g={label:"Confirmation",$$slots:{default:[ae]},$$scope:{ctx:e}};return void 0!==e[0]&&(g.visible=e[0]),i=new te({props:g}),U.push((()=>q(i,"visible",f))),i.$on("confirmed",e[3]),i.$on("cancelled",e[4]),{c(){t=y("div"),a=y("h1"),a.textContent="Dialog",s=v(),o=y("div"),P(i.$$.fragment),n=v(),r=y("sl-button"),r.textContent="Open",d=S("\n  result: "),c=S(e[1]),b(r,"variant","primary"),A(t,"class","content")},m(l,f){w(l,t,f),_(t,a),_(t,s),_(t,o),H(i,o,null),_(t,n),_(t,r),_(t,d),_(t,c),h=!0,p||(u=x(r,"click",e[5]),p=!0)},p(e,[t]){const a={};64&t&&(a.$$scope={dirty:t,ctx:e}),!l&&1&t&&(l=!0,a.visible=e[0],I((()=>l=!1))),i.$set(a),(!h||2&t)&&T(c,e[1])},i(e){h||(z(i.$$.fragment,e),h=!0)},o(e){K(i.$$.fragment,e),h=!1},d(e){e&&D(t),j(i),p=!1,u()}}}function oe(e,t,a){let s=!1,o="";return[s,o,function(e){s=e,a(0,s)},()=>{a(1,o="confirmed!")},()=>{a(1,o="cancelled!")},()=>{a(0,s=!0)}]}class ie extends u{constructor(e){super(),f(this,e,oe,se,g,{})}}export{ie as default};
