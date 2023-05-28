import{f as e,g as t,_ as a,h as i,j as s,w as o,k as l,l as n,y as r,o as d,H as c,S as h,i as p,s as u,L as f,e as g,a as m,p as y,c as v,q as b,r as _,M as w,N as x,O as k,P as $,Q as C,d as D,A as K,R as L,T as z,x as E,U as F,V as O,m as S,b as U,W as q,X as A,v as P,Y as j}from"./main2.js";import{s as H,H as I,L as T,g as R,b as B,a as G,w as W}from"./chunk.6FLA54KR.js";import{g as M}from"./chunk.G7G6UAKI.js";import{l as N,u as Q}from"./chunk.RK73WSZS.js";var V=[],X=e`
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
`,Y=class extends n{constructor(){super(...arguments),this.hasSlotController=new I(this,"footer"),this.localize=new T(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new class{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){V.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){V=V.filter((e=>e!==this.element)),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return V[V.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:e,end:t}=M(this.element),a="forward"===this.tabDirection?e:t;"function"==typeof(null==a?void 0:a.focus)&&a.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(e){"Tab"===e.key&&e.shiftKey&&(this.tabDirection="backward",requestAnimationFrame((()=>this.checkFocus())))}handleKeyUp(){this.tabDirection="forward"}}(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),N(this))}disconnectedCallback(){super.disconnectedCallback(),Q(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const e=R(this,"dialog.denyClose",{dir:this.localize.dir()});B(this.panel,e.keyframes,e.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(e){this.open&&"Escape"===e.key&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),N(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([G(this.dialog),G(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")}));const t=R(this,"dialog.show",{dir:this.localize.dir()}),a=R(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([B(this.panel,t.keyframes,t.options),B(this.overlay,a.keyframes,a.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([G(this.dialog),G(this.overlay)]);const e=R(this,"dialog.hide",{dir:this.localize.dir()}),t=R(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([B(this.overlay,t.keyframes,t.options).then((()=>{this.overlay.hidden=!0})),B(this.panel,e.keyframes,e.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Q(this);const a=this.originalTrigger;"function"==typeof(null==a?void 0:a.focus)&&setTimeout((()=>a.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,W(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,W(this,"sl-after-hide")}render(){return r`
      <div
        part="base"
        class=${d({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${c(this.noHeader?this.label:void 0)}
          aria-labelledby=${c(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":r`
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

          <slot part="body" class="dialog__body"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};function Z(e){let t,a,i,s,o,l,n,r;const d=e[5].default,c=f(d,e,e[4],null);return{c(){t=g("sl-dialog"),c&&c.c(),a=m(),i=g("sl-button"),i.textContent="Cancel",s=m(),o=g("sl-button"),o.textContent="OK",y(i,"slot","footer"),y(i,"variant","secondary"),y(o,"slot","footer"),y(o,"variant","primary"),y(t,"label",e[0])},m(d,h){v(d,t,h),c&&c.m(t,null),b(t,a),b(t,i),b(t,s),b(t,o),e[8](t),l=!0,n||(r=[_(i,"click",e[6]),_(o,"click",e[7])],n=!0)},p(e,[a]){c&&c.p&&(!l||16&a)&&w(c,d,e,e[4],l?k(d,e[4],a,null):x(e[4]),null),(!l||1&a)&&y(t,"label",e[0])},i(e){l||($(c,e),l=!0)},o(e){C(c,e),l=!1},d(a){a&&D(t),c&&c.d(a),e[8](null),n=!1,K(r)}}}function J(e,t,a){let i,{$$slots:s={},$$scope:o}=t,{visible:l=!1}=t,{label:n=""}=t,r=L(),d=!1;z((()=>{const e=()=>{r(d?"confirmed":"cancelled"),a(3,l=!1)};return i.addEventListener("sl-after-hide",e),()=>{i.removeEventListener("sl-after-hide",e)}}));return e.$$set=e=>{"visible"in e&&a(3,l=e.visible),"label"in e&&a(0,n=e.label),"$$scope"in e&&a(4,o=e.$$scope)},e.$$.update=()=>{10&e.$$.dirty&&l&&(a(2,d=!1),i.show())},[n,i,d,l,o,s,()=>{i.hide()},()=>{a(2,d=!0),i.hide()},function(e){E[e?"unshift":"push"]((()=>{i=e,a(1,i)}))}]}Y.styles=X,a([i(".dialog")],Y.prototype,"dialog",2),a([i(".dialog__panel")],Y.prototype,"panel",2),a([i(".dialog__overlay")],Y.prototype,"overlay",2),a([s({type:Boolean,reflect:!0})],Y.prototype,"open",2),a([s({reflect:!0})],Y.prototype,"label",2),a([s({attribute:"no-header",type:Boolean,reflect:!0})],Y.prototype,"noHeader",2),a([o("open",{waitUntilFirstUpdate:!0})],Y.prototype,"handleOpenChange",1),Y=a([l("sl-dialog")],Y),H("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),H("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),H("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),H("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),H("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});class ee extends h{constructor(e){super(),p(this,e,J,Z,u,{visible:3,label:0})}}function te(e){let t;return{c(){t=S("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(e,a){v(e,t,a)},d(e){e&&D(t)}}}function ae(e){let t,a,i,s,o,l,n,r,d,c,h,p,u;function f(t){e[2](t)}let w={label:"Confirmation",$$slots:{default:[te]},$$scope:{ctx:e}};return void 0!==e[0]&&(w.visible=e[0]),o=new ee({props:w}),E.push((()=>F(o,"visible",f))),o.$on("confirmed",e[3]),o.$on("cancelled",e[4]),{c(){t=g("div"),a=g("h1"),a.textContent="Dialog",i=m(),s=g("div"),O(o.$$.fragment),n=m(),r=g("sl-button"),r.textContent="Open",d=S("\n  result: "),c=S(e[1]),y(r,"variant","primary"),U(t,"class","content")},m(l,f){v(l,t,f),b(t,a),b(t,i),b(t,s),q(o,s,null),b(t,n),b(t,r),b(t,d),b(t,c),h=!0,p||(u=_(r,"click",e[5]),p=!0)},p(e,[t]){const a={};64&t&&(a.$$scope={dirty:t,ctx:e}),!l&&1&t&&(l=!0,a.visible=e[0],A((()=>l=!1))),o.$set(a),(!h||2&t)&&P(c,e[1])},i(e){h||($(o.$$.fragment,e),h=!0)},o(e){C(o.$$.fragment,e),h=!1},d(e){e&&D(t),j(o),p=!1,u()}}}function ie(e,t,a){let i=!1,s="";return[i,s,function(e){i=e,a(0,i)},()=>{a(1,s="confirmed!")},()=>{a(1,s="cancelled!")},()=>{a(0,i=!0)}]}class se extends h{constructor(e){super(),p(this,e,ie,ae,u,{})}}export{se as default};
