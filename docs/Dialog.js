import{r as e,f as t,_ as o,g as a,h as s,w as i,j as l,k as n,l as r,m as d,$ as c,o as h,F as u,S as p,i as f,s as g,N as m,e as v,a as y,p as b,c as w,q as $,u as _,O as x,P as k,Q as C,R as D,T as F,d as E,M as S,U as T,V as P,y as z,W as q,X as L,t as K,b as I,Y as O,Z as A,x as H,a0 as N}from"./main2.js";import{e as U,s as j,H as R,l as M,u as B,g as W,b as X,a as Q}from"./chunk.FTWX6OPR.js";var V,Y=[],Z=new Set,G=new MutationObserver(te),J=new Map,ee=document.documentElement.lang||navigator.language;function te(){ee=document.documentElement.lang||navigator.language,[...Z.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}G.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});!function(...e){e.map((e=>{const t=e.$code.toLowerCase();J.set(t,e),V||(V=e)})),te()}({$code:"en",$name:"English",$dir:"ltr",close:"Close",copy:"Copy",progress:"Progress",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",toggleColorFormat:"Toggle color format"});var oe=e`
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
    margin-left: var(--sl-spacing-x-small);
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
`,ae=class extends n{constructor(){super(...arguments),this.hasSlotController=new R(this,"footer"),this.localize=new class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Z.add(this.host)}hostDisconnected(){Z.delete(this.host)}term(e,...t){return function(e,t,...o){const a=e.toLowerCase().slice(0,2),s=e.length>2?e.toLowerCase():"",i=J.get(s),l=J.get(a);let n;if(i&&i[t])n=i[t];else if(l&&l[t])n=l[t];else{if(!V||!V[t])return console.error(`No translation found for: ${t}`),t;n=V[t]}return"function"==typeof n?n(...o):n}(this.host.lang||ee,e,...t)}date(e,t){return function(e,t,o){return t=new Date(t),new Intl.DateTimeFormat(e,o).format(t)}(this.host.lang||ee,e,t)}number(e,t){return function(e,t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(e,o).format(t)}(this.host.lang||ee,e,t)}relativeTime(e,t,o){return function(e,t,o,a){return new Intl.RelativeTimeFormat(e,a).format(t,o)}(this.host.lang||ee,e,t,o)}}(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new class{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}activate(){Y.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown)}deactivate(){Y=Y.filter((e=>e!==this.element)),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown)}isActive(){return Y[Y.length-1]===this.element}handleFocusIn(e){const t=e.composedPath();if(this.isActive()&&!t.includes(this.element)){const{start:e,end:t}=U(this.element),o="forward"===this.tabDirection?e:t;"function"==typeof(null==o?void 0:o.focus)&&o.focus({preventScroll:!0})}}handleKeyDown(e){"Tab"===e.key&&e.shiftKey&&(this.tabDirection="backward",setTimeout((()=>this.tabDirection="forward")))}}(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.modal.activate(),M(this))}disconnectedCallback(){super.disconnectedCallback(),B(this)}async show(){if(!this.open)return this.open=!0,r(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,r(this,"sl-after-hide")}requestClose(e){if(d(this,"sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const e=W(this,"dialog.denyClose");X(this.panel,e.keyframes,e.options)}else this.hide()}handleKeyDown(e){"Escape"===e.key&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){d(this,"sl-show"),this.originalTrigger=document.activeElement,this.modal.activate(),M(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Q(this.dialog),Q(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{d(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")}));const t=W(this,"dialog.show"),o=W(this,"dialog.overlay.show");await Promise.all([X(this.panel,t.keyframes,t.options),X(this.overlay,o.keyframes,o.options)]),d(this,"sl-after-show")}else{d(this,"sl-hide"),this.modal.deactivate(),await Promise.all([Q(this.dialog),Q(this.overlay)]);const e=W(this,"dialog.hide"),t=W(this,"dialog.overlay.hide");await Promise.all([X(this.panel,e.keyframes,e.options),X(this.overlay,t.keyframes,t.options)]),this.dialog.hidden=!0,B(this);const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),d(this,"sl-after-hide")}}render(){return c`
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
          aria-label=${u(this.noHeader?this.label:void 0)}
          aria-labelledby=${u(this.noHeader?void 0:"title")}
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
    `}};function se(e){let t,o,a,s,i,l,n,r;const d=e[5].default,c=m(d,e,e[4],null);return{c(){t=v("sl-dialog"),c&&c.c(),o=y(),a=v("sl-button"),a.textContent="Cancel",s=y(),i=v("sl-button"),i.textContent="OK",b(a,"slot","footer"),b(a,"variant","secondary"),b(i,"slot","footer"),b(i,"variant","primary"),b(t,"label",e[0])},m(d,h){w(d,t,h),c&&c.m(t,null),$(t,o),$(t,a),$(t,s),$(t,i),e[8](t),l=!0,n||(r=[_(a,"click",e[6]),_(i,"click",e[7])],n=!0)},p(e,[o]){c&&c.p&&(!l||16&o)&&x(c,d,e,e[4],l?C(d,e[4],o,null):k(e[4]),null),(!l||1&o)&&b(t,"label",e[0])},i(e){l||(D(c,e),l=!0)},o(e){F(c,e),l=!1},d(o){o&&E(t),c&&c.d(o),e[8](null),n=!1,S(r)}}}function ie(e,t,o){let a,{$$slots:s={},$$scope:i}=t,{visible:l=!1}=t,{label:n=""}=t,r=T(),d=!1;P((()=>{const e=()=>{r(d?"confirmed":"cancelled"),o(3,l=!1)};return a.addEventListener("sl-after-hide",e),()=>{a.removeEventListener("sl-after-hide",e)}}));return e.$$set=e=>{"visible"in e&&o(3,l=e.visible),"label"in e&&o(0,n=e.label),"$$scope"in e&&o(4,i=e.$$scope)},e.$$.update=()=>{10&e.$$.dirty&&l&&(o(2,d=!1),a.show())},[n,a,d,l,i,s,()=>{a.hide()},()=>{o(2,d=!0),a.hide()},function(e){z[e?"unshift":"push"]((()=>{a=e,o(1,a)}))}]}ae.styles=oe,o([a(".dialog")],ae.prototype,"dialog",2),o([a(".dialog__panel")],ae.prototype,"panel",2),o([a(".dialog__overlay")],ae.prototype,"overlay",2),o([s({type:Boolean,reflect:!0})],ae.prototype,"open",2),o([s({reflect:!0})],ae.prototype,"label",2),o([s({attribute:"no-header",type:Boolean,reflect:!0})],ae.prototype,"noHeader",2),o([i("open",{waitUntilFirstUpdate:!0})],ae.prototype,"handleOpenChange",1),ae=o([l("sl-dialog")],ae),j("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}}),j("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}}),j("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}}),j("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),j("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});class le extends p{constructor(e){super(),f(this,e,ie,se,g,{visible:3,label:0})}}function ne(e){let t;return{c(){t=K("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(e,o){w(e,t,o)},d(e){e&&E(t)}}}function re(e){let t,o,a,s,i,l,n,r,d,c,h,u,p;function f(t){e[2](t)}let g={label:"Confirmation",$$slots:{default:[ne]},$$scope:{ctx:e}};return void 0!==e[0]&&(g.visible=e[0]),i=new le({props:g}),z.push((()=>q(i,"visible",f))),i.$on("confirmed",e[3]),i.$on("cancelled",e[4]),{c(){t=v("div"),o=v("h1"),o.textContent="Dialog",a=y(),s=v("div"),L(i.$$.fragment),n=y(),r=v("sl-button"),r.textContent="Open",d=K("\n  result: "),c=K(e[1]),b(r,"variant","primary"),I(t,"class","content")},m(l,f){w(l,t,f),$(t,o),$(t,a),$(t,s),O(i,s,null),$(t,n),$(t,r),$(t,d),$(t,c),h=!0,u||(p=_(r,"click",e[5]),u=!0)},p(e,[t]){const o={};64&t&&(o.$$scope={dirty:t,ctx:e}),!l&&1&t&&(l=!0,o.visible=e[0],A((()=>l=!1))),i.$set(o),(!h||2&t)&&H(c,e[1])},i(e){h||(D(i.$$.fragment,e),h=!0)},o(e){F(i.$$.fragment,e),h=!1},d(e){e&&E(t),N(i),u=!1,p()}}}function de(e,t,o){let a=!1,s="";return[a,s,function(e){a=e,o(0,a)},()=>{o(1,s="confirmed!")},()=>{o(1,s="cancelled!")},()=>{o(0,a=!0)}]}class ce extends p{constructor(e){super(),f(this,e,de,re,g,{})}}export{ce as default};
