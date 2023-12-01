import{f as e,g as t,h as a,_ as s,j as o,r as l,k as i,w as r,l as n,x as c,m as d,o as h,S as p,i as u,s as m,a as b,e as v,t as f,p as g,b as y,c as _,q as x,u as w,v as k,y as C,n as S,d as z,z as H}from"./main2.js";import"./chunk.UA4TCQRU.js";import{L as T,s as $,H as A,a as L,g as M,b as D,w as j}from"./chunk.YZ7K2CWQ.js";import"./chunk.ZAEG3P4Y.js";import"./chunk.RK73WSZS.js";var q=e`
  ${t}

  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
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
`,E=class extends n{constructor(){super(...arguments),this.localize=new T(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();void 0!==this.cachedTextLabel?e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=e}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return(null!=(e=this.textContent)?e:"").trim()}render(){return c`
      <div
        part="base"
        class=${d({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};E.styles=q,E.dependencies={"sl-icon":a},s([o(".option__label")],E.prototype,"defaultSlot",2),s([l()],E.prototype,"current",2),s([l()],E.prototype,"selected",2),s([l()],E.prototype,"hasHover",2),s([i({reflect:!0})],E.prototype,"value",2),s([i({type:Boolean,reflect:!0})],E.prototype,"disabled",2),s([r("disabled")],E.prototype,"handleDisabledChange",1),s([r("selected")],E.prototype,"handleSelectedChange",1),s([r("value")],E.prototype,"handleValueChange",1),E.define("sl-option");var F=e`
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
`,U=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),B=class extends n{constructor(){super(...arguments),this.hasSlotController=new A(this,"icon","suffix"),this.localize=new T(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await L(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=M(this,"alert.show",{dir:this.localize.dir()});await D(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await L(this.base);const{keyframes:e,options:t}=M(this,"alert.hide",{dir:this.localize.dir()});await D(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,j(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,j(this,"sl-after-hide")}async toast(){return new Promise((e=>{null===U.parentElement&&document.body.append(U),U.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("sl-after-hide",(()=>{U.removeChild(this),e(),null===U.querySelector("sl-alert")&&U.remove()}),{once:!0})}))}render(){return c`
      <div
        part="base"
        class=${d({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

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
    `}};function O(e){let t,a,s,o,l,i,r,n,c,d,h,p,u;return{c(){t=b(),a=v("div"),s=v("h1"),s.textContent="Form - basic",o=b(),l=v("form"),l.innerHTML='<sl-input name="name" type="text" label="Name" required="" maxlength="10" help-text="Input your name, Maximum length: 10 characters."></sl-input> <br/> <sl-select name="favorite" label="Select your favorite" clearable="" required=""><sl-option value="birds">Birds</sl-option> <sl-option value="cats">Cats</sl-option> <sl-option value="dogs">Dogs</sl-option></sl-select> <br/> <sl-checkbox name="agree" value="yes" required="">I totally agree</sl-checkbox> <br/><br/> <sl-button type="submit" variant="primary">Submit</sl-button>',i=b(),r=v("sl-alert"),n=v("sl-icon"),c=b(),d=v("pre"),h=f(e[1]),document.title="Form - basic",g(n,"slot","icon"),g(n,"name","check2-circle"),g(r,"type","success"),g(r,"duration","3000"),g(r,"closable",""),y(a,"class","content")},m(m,b){_(m,t,b),_(m,a,b),x(a,s),x(a,o),x(a,l),x(a,i),x(a,r),x(r,n),x(r,c),x(r,d),x(d,h),e[3](r),p||(u=w(l,"submit",k(e[2])),p=!0)},p(e,[t]){2&t&&C(h,e[1])},i:S,o:S,d(s){s&&(z(t),z(a)),e[3](null),p=!1,u()}}}function I(e,t,a){let s,o="";return[s,o,function(e){console.log(e);const t=new FormData(e.target);a(1,o="");for(const[e,s]of t)a(1,o+=`${e}: ${s}\n`);s.toast()},function(e){H[e?"unshift":"push"]((()=>{s=e,a(0,s)}))}]}B.styles=F,B.dependencies={"sl-icon-button":h},s([o('[part~="base"]')],B.prototype,"base",2),s([i({type:Boolean,reflect:!0})],B.prototype,"open",2),s([i({type:Boolean,reflect:!0})],B.prototype,"closable",2),s([i({reflect:!0})],B.prototype,"variant",2),s([i({type:Number})],B.prototype,"duration",2),s([r("open",{waitUntilFirstUpdate:!0})],B.prototype,"handleOpenChange",1),s([r("duration")],B.prototype,"handleDurationChange",1),$("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),$("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),B.define("sl-alert"),a.define("sl-icon");class N extends p{constructor(e){super(),u(this,e,I,O,m,{})}}export{N as default};
