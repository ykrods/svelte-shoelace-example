import{f as e,g as t,_ as a,h as s,j as r,w as o,k as i,l,y as n,o as c,S as h,i as d,s as u,a as p,e as m,t as b,m as g,b as v,c as f,p as y,q as w,r as _,u as x,n as k,d as C,v as H}from"./main2.js";import"./chunk.4IDZJHT6.js";import{s as z,H as $,L as T,w as D,a as j,g as q,b as F}from"./chunk.G5HV7L2U.js";import"./chunk.OCR5UKKD.js";var M=e`
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
`,S=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),A=class extends l{constructor(){super(...arguments),this.hasSlotController=new $(this,"icon","suffix"),this.localize=new T(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,D(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,D(this,"sl-after-hide")}async toast(){return new Promise((e=>{null===S.parentElement&&document.body.append(S),S.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("sl-after-hide",(()=>{S.removeChild(this),e(),null===S.querySelector("sl-alert")&&S.remove()}),{once:!0})}))}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await j(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=q(this,"alert.show",{dir:this.localize.dir()});await F(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await j(this.base);const{keyframes:e,options:t}=q(this,"alert.hide",{dir:this.localize.dir()});await F(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return n`
      <div
        part="base"
        class=${c({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?n`
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
    `}};function U(e){let t,a,s,r,o,i,l,n,c,h,d,u,H;return{c(){t=p(),a=m("div"),s=m("h1"),s.textContent="Form - basic",r=p(),o=m("form"),o.innerHTML='<sl-input name="name" type="text" label="Name" required="" maxlength="10" help-text="Input your name, Maximum length: 10 characters."></sl-input> \n    <br/> \n    <sl-select name="favorite" label="Select your favorite" clearable="" required=""><sl-menu-item value="birds">Birds</sl-menu-item> \n      <sl-menu-item value="cats">Cats</sl-menu-item> \n      <sl-menu-item value="dogs">Dogs</sl-menu-item></sl-select> \n    <br/> \n    <sl-checkbox name="agree" value="yes" required="">I totally agree</sl-checkbox> \n    <br/><br/> \n    <sl-button type="submit" variant="primary">Submit</sl-button>',i=p(),l=m("sl-alert"),n=m("sl-icon"),c=p(),h=m("pre"),d=b(e[1]),document.title="Form - basic",g(n,"slot","icon"),g(n,"name","check2-circle"),g(l,"type","success"),g(l,"duration","3000"),g(l,"closable",""),v(a,"class","content")},m(p,m){f(p,t,m),f(p,a,m),y(a,s),y(a,r),y(a,o),y(a,i),y(a,l),y(l,n),y(l,c),y(l,h),y(h,d),e[3](l),u||(H=w(o,"submit",_(e[2])),u=!0)},p(e,[t]){2&t&&x(d,e[1])},i:k,o:k,d(s){s&&C(t),s&&C(a),e[3](null),u=!1,H()}}}function L(e,t,a){let s,r="";return[s,r,function(e){console.log(e);const t=new FormData(e.target);a(1,r="");for(const[e,s]of t)a(1,r+=`${e}: ${s}\n`);s.toast()},function(e){H[e?"unshift":"push"]((()=>{s=e,a(0,s)}))}]}A.styles=M,a([s('[part~="base"]')],A.prototype,"base",2),a([r({type:Boolean,reflect:!0})],A.prototype,"open",2),a([r({type:Boolean,reflect:!0})],A.prototype,"closable",2),a([r({reflect:!0})],A.prototype,"variant",2),a([r({type:Number})],A.prototype,"duration",2),a([o("open",{waitUntilFirstUpdate:!0})],A.prototype,"handleOpenChange",1),a([o("duration")],A.prototype,"handleDurationChange",1),A=a([i("sl-alert")],A),z("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),z("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});class O extends h{constructor(e){super(),d(this,e,L,U,u,{})}}export{O as default};
