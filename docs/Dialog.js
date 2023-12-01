import{M as e,f as t,g as i,o as a,_ as s,j as o,k as l,w as n,l as r,x as d,m as c,J as h,S as p,i as u,s as f,N as g,e as m,a as v,p as y,c as b,q as w,u as x,O as _,P as k,Q as $,R as C,U as E,d as L,B as D,V as z,W as F,z as K,X as A,Y as S,t as O,b as P,Z as q,$ as j,y as H,a0 as U}from"./main2.js";import{s as R,H as T,L as B,g as I,b as W,a as Y,w as Z}from"./chunk.YZ7K2CWQ.js";import{a as Q}from"./chunk.YCHBWCKL.js";import{l as J,u as M}from"./chunk.RK73WSZS.js";function*N(t=document.activeElement){null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*e(N(t.shadowRoot.activeElement))))}var V=[],X=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var t,i;if("Tab"!==e.key||this.isExternalActivated)return;if(!this.isActive())return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward",e.preventDefault();const a=Q(this.element),s=[...N()].pop();let o=a.findIndex((e=>e===s));if(-1===o)return this.currentFocus=a[0],void(null==(t=this.currentFocus)||t.focus({preventScroll:!0}));const l="forward"===this.tabDirection?1:-1;o+l>=a.length?o=0:o+l<0?o=a.length-1:o+=l,this.currentFocus=a[o],null==(i=this.currentFocus)||i.focus({preventScroll:!0}),setTimeout((()=>this.checkFocus()))},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){V.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){V=V.filter((e=>e!==this.element)),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return V[V.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Q(this.element);if(!this.element.matches(":focus-within")){const t=e[0],i=e[e.length-1],a="forward"===this.tabDirection?t:i;"function"==typeof(null==a?void 0:a.focus)&&(this.currentFocus=a,a.focus({preventScroll:!0}))}}}},G=t`
  ${i}

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

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
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

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,ee=class extends r{constructor(){super(...arguments),this.hasSlotController=new T(this,"footer"),this.localize=new B(this),this.modal=new X(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{"Escape"===e.key&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),J(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),M(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const e=I(this,"dialog.denyClose",{dir:this.localize.dir()});W(this.panel,e.keyframes,e.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),J(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Y(this.dialog),Y(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")}));const t=I(this,"dialog.show",{dir:this.localize.dir()}),i=I(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([W(this.panel,t.keyframes,t.options),W(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Y(this.dialog),Y(this.overlay)]);const e=I(this,"dialog.hide",{dir:this.localize.dir()}),t=I(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([W(this.overlay,t.keyframes,t.options).then((()=>{this.overlay.hidden=!0})),W(this.panel,e.keyframes,e.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,M(this);const i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout((()=>i.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Z(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"sl-after-hide")}render(){return d`
      <div
        part="base"
        class=${c({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${h(this.noHeader?this.label:void 0)}
          aria-labelledby=${h(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":d`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};function te(e){let t,i,a,s,o,l,n,r;const d=e[5].default,c=g(d,e,e[4],null);return{c(){t=m("sl-dialog"),c&&c.c(),i=v(),a=m("sl-button"),a.textContent="Cancel",s=v(),o=m("sl-button"),o.textContent="OK",y(a,"slot","footer"),y(a,"variant","secondary"),y(o,"slot","footer"),y(o,"variant","primary"),y(t,"label",e[0])},m(d,h){b(d,t,h),c&&c.m(t,null),w(t,i),w(t,a),w(t,s),w(t,o),e[8](t),l=!0,n||(r=[x(a,"click",e[6]),x(o,"click",e[7])],n=!0)},p(e,[i]){c&&c.p&&(!l||16&i)&&_(c,d,e,e[4],l?$(d,e[4],i,null):k(e[4]),null),(!l||1&i)&&y(t,"label",e[0])},i(e){l||(C(c,e),l=!0)},o(e){E(c,e),l=!1},d(i){i&&L(t),c&&c.d(i),e[8](null),n=!1,D(r)}}}function ie(e,t,i){let a,{$$slots:s={},$$scope:o}=t,{visible:l=!1}=t,{label:n=""}=t,r=z(),d=!1;F((()=>{const e=()=>{r(d?"confirmed":"cancelled"),i(3,l=!1)};return a.addEventListener("sl-after-hide",e),()=>{a.removeEventListener("sl-after-hide",e)}}));return e.$$set=e=>{"visible"in e&&i(3,l=e.visible),"label"in e&&i(0,n=e.label),"$$scope"in e&&i(4,o=e.$$scope)},e.$$.update=()=>{10&e.$$.dirty&&l&&(i(2,d=!1),a.show())},[n,a,d,l,o,s,()=>{a.hide()},()=>{i(2,d=!0),a.hide()},function(e){K[e?"unshift":"push"]((()=>{a=e,i(1,a)}))}]}ee.styles=G,ee.dependencies={"sl-icon-button":a},s([o(".dialog")],ee.prototype,"dialog",2),s([o(".dialog__panel")],ee.prototype,"panel",2),s([o(".dialog__overlay")],ee.prototype,"overlay",2),s([l({type:Boolean,reflect:!0})],ee.prototype,"open",2),s([l({reflect:!0})],ee.prototype,"label",2),s([l({attribute:"no-header",type:Boolean,reflect:!0})],ee.prototype,"noHeader",2),s([n("open",{waitUntilFirstUpdate:!0})],ee.prototype,"handleOpenChange",1),R("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),R("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),R("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),R("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),R("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),ee.define("sl-dialog");class ae extends p{constructor(e){super(),u(this,e,ie,te,f,{visible:3,label:0})}}function se(e){let t;return{c(){t=O("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(e,i){b(e,t,i)},d(e){e&&L(t)}}}function oe(e){let t,i,a,s,o,l,n,r,d,c,h,p,u;function f(t){e[2](t)}let g={label:"Confirmation",$$slots:{default:[se]},$$scope:{ctx:e}};return void 0!==e[0]&&(g.visible=e[0]),o=new ae({props:g}),K.push((()=>A(o,"visible",f))),o.$on("confirmed",e[3]),o.$on("cancelled",e[4]),{c(){t=m("div"),i=m("h1"),i.textContent="Dialog",a=v(),s=m("div"),S(o.$$.fragment),n=v(),r=m("sl-button"),r.textContent="Open",d=O("\n  result: "),c=O(e[1]),y(r,"variant","primary"),P(t,"class","content")},m(l,f){b(l,t,f),w(t,i),w(t,a),w(t,s),q(o,s,null),w(t,n),w(t,r),w(t,d),w(t,c),h=!0,p||(u=x(r,"click",e[5]),p=!0)},p(e,[t]){const i={};64&t&&(i.$$scope={dirty:t,ctx:e}),!l&&1&t&&(l=!0,i.visible=e[0],j((()=>l=!1))),o.$set(i),(!h||2&t)&&H(c,e[1])},i(e){h||(C(o.$$.fragment,e),h=!0)},o(e){E(o.$$.fragment,e),h=!1},d(e){e&&L(t),U(o),p=!1,u()}}}function le(e,t,i){let a=!1,s="";return[a,s,function(e){a=e,i(0,a)},()=>{i(1,s="confirmed!")},()=>{i(1,s="cancelled!")},()=>{i(0,a=!0)}]}class ne extends p{constructor(e){super(),u(this,e,le,oe,f,{})}}export{ne as default};
