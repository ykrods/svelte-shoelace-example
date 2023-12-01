import{f as e,g as t,_ as n,j as s,k as i,w as o,l as a,x as r,m as l,S as d,i as p,s as h,e as c,a as u,t as m,p as g,b as w,c as f,q as v,u as y,y as k,n as b,d as C,B as E}from"./main2.js";import{g as D}from"./chunk.YCHBWCKL.js";import{S as A}from"./chunk.ZAEG3P4Y.js";import{s as x,L,w as O,a as I,g as T,b as $}from"./chunk.YZ7K2CWQ.js";import"./chunk.YNKSE7KC.js";var K=e`
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
`,S=class extends a{constructor(){super(...arguments),this.localize=new L(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&"Escape"===e.key&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if("Escape"===e.key&&this.open)return e.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===e.key){if(this.open&&"sl-menu-item"===(null==(t=document.activeElement)?void 0:t.tagName.toLowerCase()))return e.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var e,t,n;const s=(null==(e=this.containingElement)?void 0:e.getRootNode())instanceof ShadowRoot?null==(n=null==(t=document.activeElement)?void 0:t.shadowRoot)?void 0:n.activeElement:document.activeElement;this.containingElement&&(null==s?void 0:s.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;this.stayOpenOnSelect||"sl-menu"!==t.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==e?void 0:e.focus)&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find((e=>"sl-menu"===e.tagName.toLowerCase()))}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key))return e.preventDefault(),void this.handleTriggerClick();const t=this.getMenu();if(t){const n=t.getAllItems(),s=n[0],i=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then((()=>{"ArrowDown"!==e.key&&"Home"!==e.key||(t.setCurrentItem(s),s.focus()),"ArrowUp"!==e.key&&"End"!==e.key||(t.setCurrentItem(i),i.focus())})))}}handleTriggerKeyUp(e){" "===e.key&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find((e=>D(e).start));let t;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":t=e.button;break;default:t=e}t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,O(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,O(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await I(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=T(this,"dropdown.show",{dir:this.localize.dir()});await $(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await I(this);const{keyframes:e,options:t}=T(this,"dropdown.hide",{dir:this.localize.dir()});await $(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return r`
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
        class=${l({dropdown:!0,"dropdown--open":this.open})}
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

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};S.styles=K,S.dependencies={"sl-popup":A},n([s(".dropdown")],S.prototype,"popup",2),n([s(".dropdown__trigger")],S.prototype,"trigger",2),n([s(".dropdown__panel")],S.prototype,"panel",2),n([i({type:Boolean,reflect:!0})],S.prototype,"open",2),n([i({reflect:!0})],S.prototype,"placement",2),n([i({type:Boolean,reflect:!0})],S.prototype,"disabled",2),n([i({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],S.prototype,"stayOpenOnSelect",2),n([i({attribute:!1})],S.prototype,"containingElement",2),n([i({type:Number})],S.prototype,"distance",2),n([i({type:Number})],S.prototype,"skidding",2),n([i({type:Boolean})],S.prototype,"hoist",2),n([o("open",{waitUntilFirstUpdate:!0})],S.prototype,"handleOpenChange",1),x("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),x("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),S.define("sl-dropdown");var _=e`
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
`,z=class extends a{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};z.styles=_,n([i({type:Boolean,reflect:!0})],z.prototype,"vertical",2),n([o("vertical")],z.prototype,"handleVerticalChange",1),z.define("sl-divider");var M=e`
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
`,N=class extends a{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],n=e.composedPath().find((e=>{var n;return t.includes((null==(n=null==e?void 0:e.getAttribute)?void 0:n.call(e,"role"))||"")}));if(!n)return;const s=n;"checkbox"===s.type&&(s.checked=!s.checked),this.emit("sl-select",{detail:{item:s}})}handleKeyDown(e){if("Enter"===e.key||" "===e.key){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),null==t||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),n=this.getCurrentItem();let s=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),"ArrowDown"===e.key?s++:"ArrowUp"===e.key?s--:"Home"===e.key?s=0:"End"===e.key&&(s=t.length-1),s<0&&(s=t.length-1),s>t.length-1&&(s=0),this.setCurrentItem(t[s]),t[s].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return"sl-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(t=e.getAttribute("role"))?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((e=>!(e.inert||!this.isMenuItem(e))))}getCurrentItem(){return this.getAllItems().find((e=>"0"===e.getAttribute("tabindex")))}setCurrentItem(e){this.getAllItems().forEach((t=>{t.setAttribute("tabindex",t===e?"0":"-1")}))}render(){return r`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};function P(e){let t,n,s,i,o,a,r,l,d,p,h,D,A,x,L,O,I,T,$,K,S,_,z,M,N;return{c(){t=c("div"),n=c("h1"),n.textContent="Dropdown",s=u(),i=c("p"),o=c("sl-dropdown"),a=c("sl-button"),a.textContent="Dropdown",r=u(),l=c("sl-menu"),d=c("sl-menu-item"),p=m("Item 1"),D=u(),A=c("sl-menu-item"),x=m("Item 2"),O=u(),I=c("sl-divider"),T=u(),$=c("sl-menu-item"),$.textContent="Clear",K=u(),S=c("br"),_=m("\n    selected: "),z=m(e[0]),g(a,"slot","trigger"),g(a,"caret",""),g(d,"value","item1"),g(d,"checked",h="item1"===e[0]),g(A,"value","item2"),g(A,"checked",L="item2"===e[0]),w(t,"class","content")},m(h,c){f(h,t,c),v(t,n),v(t,s),v(t,i),v(i,o),v(o,a),v(o,r),v(o,l),v(l,d),v(d,p),v(l,D),v(l,A),v(A,x),v(l,O),v(l,I),v(l,T),v(l,$),v(i,K),v(i,S),v(i,_),v(i,z),M||(N=[y($,"click",e[2]),y(o,"sl-select",e[1])],M=!0)},p(e,[t]){1&t&&h!==(h="item1"===e[0])&&g(d,"checked",h),1&t&&L!==(L="item2"===e[0])&&g(A,"checked",L),1&t&&k(z,e[0])},i:b,o:b,d(e){e&&C(t),M=!1,E(N)}}}function U(e,t,n){let s="";return[s,function(e){n(0,s=e.detail.item.value)},()=>{n(0,s="")}]}N.styles=M,n([s("slot")],N.prototype,"defaultSlot",2),N.define("sl-menu");class B extends d{constructor(e){super(),p(this,e,U,P,h,{})}}export{B as default};
