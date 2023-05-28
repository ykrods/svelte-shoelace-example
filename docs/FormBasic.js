import{f as e,g as t,_ as a,h as s,t as o,j as l,w as i,k as r,l as n,y as c,o as h,S as d,i as p,s as u,a as m,e as b,m as v,p as f,b as g,c as y,q as _,r as x,u as w,v as k,n as C,d as S,x as H}from"./main2.js";import"./chunk.CKDZLWPL.js";import{L,s as $,H as z,a as T,g as A,b as D,w as M}from"./chunk.6FLA54KR.js";import"./chunk.QWGZ4US6.js";import"./chunk.RK73WSZS.js";var j=e`
  ${t}

  :host {
    display: block;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,F=class extends n{constructor(){super(...arguments),this.localize=new L(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();void 0!==this.cachedTextLabel?e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=e}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return(null!=(e=this.textContent)?e:"").trim()}render(){return c`
      <div
        part="base"
        class=${h({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};F.styles=j,a([s(".option__label")],F.prototype,"defaultSlot",2),a([o()],F.prototype,"current",2),a([o()],F.prototype,"selected",2),a([o()],F.prototype,"hasHover",2),a([l({reflect:!0})],F.prototype,"value",2),a([l({type:Boolean,reflect:!0})],F.prototype,"disabled",2),a([i("disabled")],F.prototype,"handleDisabledChange",1),a([i("selected")],F.prototype,"handleSelectedChange",1),a([i("value")],F.prototype,"handleValueChange",1),F=a([r("sl-option")],F);var q=e`
  ${t}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,E=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),B=class extends n{constructor(){super(...arguments),this.hasSlotController=new z(this,"icon","suffix"),this.localize=new L(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await T(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=A(this,"alert.show",{dir:this.localize.dir()});await D(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await T(this.base);const{keyframes:e,options:t}=A(this,"alert.hide",{dir:this.localize.dir()});await D(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,M(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,M(this,"sl-after-hide")}async toast(){return new Promise((e=>{null===E.parentElement&&document.body.append(E),E.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("sl-after-hide",(()=>{E.removeChild(this),e(),null===E.querySelector("sl-alert")&&E.remove()}),{once:!0})}))}render(){return c`
      <div
        part="base"
        class=${h({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?c`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};function O(e){let t,a,s,o,l,i,r,n,c,h,d,p,u;return{c(){t=m(),a=b("div"),s=b("h1"),s.textContent="Form - basic",o=m(),l=b("form"),l.innerHTML='<sl-input name="name" type="text" label="Name" required="" maxlength="10" help-text="Input your name, Maximum length: 10 characters."></sl-input> \n    <br/> \n    <sl-select name="favorite" label="Select your favorite" clearable="" required=""><sl-option value="birds">Birds</sl-option> \n      <sl-option value="cats">Cats</sl-option> \n      <sl-option value="dogs">Dogs</sl-option></sl-select> \n    <br/> \n    <sl-checkbox name="agree" value="yes" required="">I totally agree</sl-checkbox> \n    <br/><br/> \n    <sl-button type="submit" variant="primary">Submit</sl-button>',i=m(),r=b("sl-alert"),n=b("sl-icon"),c=m(),h=b("pre"),d=v(e[1]),document.title="Form - basic",f(n,"slot","icon"),f(n,"name","check2-circle"),f(r,"type","success"),f(r,"duration","3000"),f(r,"closable",""),g(a,"class","content")},m(m,b){y(m,t,b),y(m,a,b),_(a,s),_(a,o),_(a,l),_(a,i),_(a,r),_(r,n),_(r,c),_(r,h),_(h,d),e[3](r),p||(u=x(l,"submit",w(e[2])),p=!0)},p(e,[t]){2&t&&k(d,e[1])},i:C,o:C,d(s){s&&S(t),s&&S(a),e[3](null),p=!1,u()}}}function U(e,t,a){let s,o="";return[s,o,function(e){console.log(e);const t=new FormData(e.target);a(1,o="");for(const[e,s]of t)a(1,o+=`${e}: ${s}\n`);s.toast()},function(e){H[e?"unshift":"push"]((()=>{s=e,a(0,s)}))}]}B.styles=q,a([s('[part~="base"]')],B.prototype,"base",2),a([l({type:Boolean,reflect:!0})],B.prototype,"open",2),a([l({type:Boolean,reflect:!0})],B.prototype,"closable",2),a([l({reflect:!0})],B.prototype,"variant",2),a([l({type:Number})],B.prototype,"duration",2),a([i("open",{waitUntilFirstUpdate:!0})],B.prototype,"handleOpenChange",1),a([i("duration")],B.prototype,"handleDurationChange",1),B=a([r("sl-alert")],B),$("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),$("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});class W extends d{constructor(e){super(),p(this,e,U,O,u,{})}}export{W as default};
