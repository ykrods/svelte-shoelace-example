import{f as e,g as t,_ as n,h as s,j as i,w as o,k as a,l as r,y as l,o as d,S as h,i as p,s as c,e as u,a as m,m as g,p as w,b as v,c as y,q as f,r as b,v as k,n as D,d as C,A as E}from"./main2.js";import{g as A}from"./chunk.G7G6UAKI.js";import{s as x,L,w as I,a as O,g as T,b as K}from"./chunk.6FLA54KR.js";import"./chunk.QWGZ4US6.js";import"./chunk.2P3TWPRN.js";var S=e`
  ${t}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,$=class extends r{constructor(){super(...arguments),this.localize=new L(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==e?void 0:e.focus)&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find((e=>"sl-menu"===e.tagName.toLowerCase()))}handleKeyDown(e){this.open&&"Escape"===e.key&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())}handleDocumentKeyDown(e){var t;if("Escape"===e.key&&this.open)return e.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===e.key){if(this.open&&"sl-menu-item"===(null==(t=document.activeElement)?void 0:t.tagName.toLowerCase()))return e.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var e,t,n;const s=(null==(e=this.containingElement)?void 0:e.getRootNode())instanceof ShadowRoot?null==(n=null==(t=document.activeElement)?void 0:t.shadowRoot)?void 0:n.activeElement:document.activeElement;this.containingElement&&(null==s?void 0:s.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}}handleDocumentMouseDown(e){const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handlePanelSelect(e){const t=e.target;this.stayOpenOnSelect||"sl-menu"!==t.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key))return e.preventDefault(),void this.handleTriggerClick();const t=this.getMenu();if(t){const n=t.getAllItems(),s=n[0],i=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),n.length>0&&this.updateComplete.then((()=>{"ArrowDown"!==e.key&&"Home"!==e.key||(t.setCurrentItem(s),s.focus()),"ArrowUp"!==e.key&&"End"!==e.key||(t.setCurrentItem(i),i.focus())})))}}handleTriggerKeyUp(e){" "===e.key&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find((e=>A(e).start));let t;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":t=e.button;break;default:t=e}t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,I(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,I(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await O(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=T(this,"dropdown.show",{dir:this.localize.dir()});await K(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await O(this);const{keyframes:e,options:t}=T(this,"dropdown.hide",{dir:this.localize.dir()});await K(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return l`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${d({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <slot
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        ></slot>
      </sl-popup>
    `}};$.styles=S,n([s(".dropdown")],$.prototype,"popup",2),n([s(".dropdown__trigger")],$.prototype,"trigger",2),n([s(".dropdown__panel")],$.prototype,"panel",2),n([i({type:Boolean,reflect:!0})],$.prototype,"open",2),n([i({reflect:!0})],$.prototype,"placement",2),n([i({type:Boolean,reflect:!0})],$.prototype,"disabled",2),n([i({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],$.prototype,"stayOpenOnSelect",2),n([i({attribute:!1})],$.prototype,"containingElement",2),n([i({type:Number})],$.prototype,"distance",2),n([i({type:Number})],$.prototype,"skidding",2),n([i({type:Boolean})],$.prototype,"hoist",2),n([o("open",{waitUntilFirstUpdate:!0})],$.prototype,"handleOpenChange",1),$=n([a("sl-dropdown")],$),x("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),x("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var _=e`
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
`,z=class extends r{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};z.styles=_,n([i({type:Boolean,reflect:!0})],z.prototype,"vertical",2),n([o("vertical")],z.prototype,"handleVerticalChange",1),z=n([a("sl-divider")],z);var M=e`
  ${t}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,U=class extends r{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=e.target.closest("sl-menu-item");!t||t.disabled||t.inert||("checkbox"===t.type&&(t.checked=!t.checked),this.emit("sl-select",{detail:{item:t}}))}handleKeyDown(e){if("Enter"===e.key){const t=this.getCurrentItem();e.preventDefault(),null==t||t.click()}if(" "===e.key&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),n=this.getCurrentItem();let s=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),"ArrowDown"===e.key?s++:"ArrowUp"===e.key?s--:"Home"===e.key?s=0:"End"===e.key&&(s=t.length-1),s<0&&(s=t.length-1),s>t.length-1&&(s=0),this.setCurrentItem(t[s]),t[s].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return"sl-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(t=e.getAttribute("role"))?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((e=>!(e.inert||!this.isMenuItem(e))))}getCurrentItem(){return this.getAllItems().find((e=>"0"===e.getAttribute("tabindex")))}setCurrentItem(e){this.getAllItems().forEach((t=>{t.setAttribute("tabindex",t===e?"0":"-1")}))}render(){return l`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};function N(e){let t,n,s,i,o,a,r,l,d,h,p,c,A,x,L,I,O,T,K,S,$,_,z,M,U;return{c(){t=u("div"),n=u("h1"),n.textContent="Dropdown",s=m(),i=u("p"),o=u("sl-dropdown"),a=u("sl-button"),a.textContent="Dropdown",r=m(),l=u("sl-menu"),d=u("sl-menu-item"),h=g("Item 1"),c=m(),A=u("sl-menu-item"),x=g("Item 2"),I=m(),O=u("sl-divider"),T=m(),K=u("sl-menu-item"),K.textContent="Clear",S=m(),$=u("br"),_=g("\n    selected: "),z=g(e[0]),w(a,"slot","trigger"),w(a,"caret",""),w(d,"value","item1"),w(d,"checked",p="item1"===e[0]),w(A,"value","item2"),w(A,"checked",L="item2"===e[0]),v(t,"class","content")},m(p,u){y(p,t,u),f(t,n),f(t,s),f(t,i),f(i,o),f(o,a),f(o,r),f(o,l),f(l,d),f(d,h),f(l,c),f(l,A),f(A,x),f(l,I),f(l,O),f(l,T),f(l,K),f(i,S),f(i,$),f(i,_),f(i,z),M||(U=[b(K,"click",e[2]),b(o,"sl-select",e[1])],M=!0)},p(e,[t]){1&t&&p!==(p="item1"===e[0])&&w(d,"checked",p),1&t&&L!==(L="item2"===e[0])&&w(A,"checked",L),1&t&&k(z,e[0])},i:D,o:D,d(e){e&&C(t),M=!1,E(U)}}}function P(e,t,n){let s="";return[s,function(e){n(0,s=e.detail.item.value)},()=>{n(0,s="")}]}U.styles=M,n([s("slot")],U.prototype,"defaultSlot",2),U=n([a("sl-menu")],U);class j extends h{constructor(e){super(),p(this,e,P,N,c,{})}}export{j as default};
