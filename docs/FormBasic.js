import{r as e,f as t,_ as a,g as s,h as r,w as o,j as l,k as i,l as n,m as c,y as h,o as d,S as p,i as u,s as m,a as b,e as g,t as f,p as y,b as v,c as w,q as _,u as x,v as k,n as C,d as H,x as $}from"./main2.js";import"./chunk.5F2F437P.js";import{s as F,a as T,g as q,b as z}from"./chunk.4W7IZJQJ.js";var M=e`
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
    background-color: rgb(var(--sl-surface-base-alt));
    border: solid var(--sl-panel-border-width) rgb(var(--sl-panel-border-color));
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--box-shadow);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: rgb(var(--sl-color-neutral-700));
    margin: inherit;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
  }

  .alert__icon ::slotted(*) {
    margin-left: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: rgb(var(--sl-color-primary-600));
  }

  .alert--primary .alert__icon {
    color: rgb(var(--sl-color-primary-600));
  }

  .alert--success {
    border-top-color: rgb(var(--sl-color-success-600));
  }

  .alert--success .alert__icon {
    color: rgb(var(--sl-color-success-600));
  }

  .alert--neutral {
    border-top-color: rgb(var(--sl-color-neutral-600));
  }

  .alert--neutral .alert__icon {
    color: rgb(var(--sl-color-neutral-600));
  }

  .alert--warning {
    border-top-color: rgb(var(--sl-color-warning-600));
  }

  .alert--warning .alert__icon {
    color: rgb(var(--sl-color-warning-600));
  }

  .alert--danger {
    border-top-color: rgb(var(--sl-color-danger-600));
  }

  .alert--danger .alert__icon {
    color: rgb(var(--sl-color-danger-600));
  }

  .alert__message {
    flex: 1 1 auto;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-right: var(--sl-spacing-medium);
  }
`,j=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),A=class extends i{constructor(){super(...arguments),this.open=!1,this.closable=!1,this.type="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,n(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,n(this,"sl-after-hide")}async toast(){return new Promise((e=>{j.parentElement||document.body.append(j),j.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("sl-after-hide",(()=>{j.removeChild(this),e(),j.querySelector("sl-alert")||j.remove()}),{once:!0})}))}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=setTimeout((()=>this.hide()),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){c(this,"sl-show"),this.duration<1/0&&this.restartAutoHide(),await T(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=q(this,"alert.show");await z(this.base,e,t),c(this,"sl-after-show")}else{c(this,"sl-hide"),clearTimeout(this.autoHideTimeout),await T(this.base);const{keyframes:e,options:t}=q(this,"alert.hide");await z(this.base,e,t),this.base.hidden=!0,c(this,"sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return h`
      <div
        part="base"
        class=${d({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--primary":"primary"===this.type,"alert--success":"success"===this.type,"alert--neutral":"neutral"===this.type,"alert--warning":"warning"===this.type,"alert--danger":"danger"===this.type})}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <span part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </span>

        <span part="message" class="alert__message">
          <slot></slot>
        </span>

        ${this.closable?h`
              <span class="alert__close">
                <sl-icon-button
                  exportparts="base:close-button"
                  name="x"
                  library="system"
                  @click=${this.handleCloseClick}
                ></sl-icon-button>
              </span>
            `:""}
      </div>
    `}};function D(e){let t,a,s,r,o,l,i,n,c,h,d,p,u,m;return{c(){t=b(),a=g("div"),s=g("h1"),s.textContent="Form - basic",r=b(),o=g("p"),l=g("sl-form"),l.innerHTML='<sl-input name="name" type="text" label="Name" required="" maxlength="10" help-text="Input your name, Maximum length: 10 characters."></sl-input> \n      <br/> \n      <sl-select name="favorite" label="Select your favorite" clearable="" required=""><sl-menu-item value="birds">Birds</sl-menu-item> \n        <sl-menu-item value="cats">Cats</sl-menu-item> \n        <sl-menu-item value="dogs">Dogs</sl-menu-item></sl-select> \n      <br/> \n      <sl-checkbox name="agree" value="yes" required="">I totally agree</sl-checkbox> \n      <br/><br/> \n      <sl-button submit="">Submit</sl-button>',i=b(),n=g("sl-alert"),c=g("sl-icon"),h=b(),d=g("pre"),p=f(e[1]),document.title="Form - basic",y(c,"slot","icon"),y(c,"name","check2-circle"),y(n,"type","success"),y(n,"duration","3000"),y(n,"closable",""),v(a,"class","content")},m(b,g){w(b,t,g),w(b,a,g),_(a,s),_(a,r),_(a,o),_(o,l),_(o,i),_(o,n),_(n,c),_(n,h),_(n,d),_(d,p),e[3](n),u||(m=x(l,"sl-submit",e[2]),u=!0)},p(e,[t]){2&t&&k(p,e[1])},i:C,o:C,d(s){s&&H(t),s&&H(a),e[3](null),u=!1,m()}}}function S(e,t,a){let s,r="";return[s,r,function(e){a(1,r="");for(const[e,t]of event.detail.formData)a(1,r+=`${e}: ${t}\n`);s.toast()},function(e){$[e?"unshift":"push"]((()=>{s=e,a(0,s)}))}]}A.styles=M,a([s('[part="base"]')],A.prototype,"base",2),a([r({type:Boolean,reflect:!0})],A.prototype,"open",2),a([r({type:Boolean,reflect:!0})],A.prototype,"closable",2),a([r({reflect:!0})],A.prototype,"type",2),a([r({type:Number})],A.prototype,"duration",2),a([o("open",{waitUntilFirstUpdate:!0})],A.prototype,"handleOpenChange",1),a([o("duration")],A.prototype,"handleDurationChange",1),A=a([l("sl-alert")],A),F("alert.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}}),F("alert.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});class B extends p{constructor(e){super(),u(this,e,S,D,m,{})}}export{B as default};
