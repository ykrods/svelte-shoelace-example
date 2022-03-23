import{r as e,f as t,_ as a,g as s,h as r,w as o,j as l,k as i,l as n,m as c,$ as h,o as d,S as u,i as p,s as m,a as b,e as f,t as v,p as g,b as y,c as w,q as _,u as x,v as k,x as C,n as H,d as T,y as $}from"./main2.js";import"./chunk.4RYHHWIR.js";import{s as j,H as F,a as S,g as q,b as z}from"./chunk.FTWX6OPR.js";import"./chunk.XTJ7LSDZ.js";import"./chunk.2ZCLEOHE.js";var D=e`
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
    box-shadow: var(--box-shadow);
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
    padding-left: var(--sl-spacing-large);
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
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-right: var(--sl-spacing-medium);
  }
`,M=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),A=class extends i{constructor(){super(...arguments),this.hasSlotController=new F(this,"icon","suffix"),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,n(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,n(this,"sl-after-hide")}async toast(){return new Promise((e=>{null===M.parentElement&&document.body.append(M),M.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("sl-after-hide",(()=>{M.removeChild(this),e(),null===M.querySelector("sl-alert")&&M.remove()}),{once:!0})}))}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){c(this,"sl-show"),this.duration<1/0&&this.restartAutoHide(),await S(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=q(this,"alert.show");await z(this.base,e,t),c(this,"sl-after-show")}else{c(this,"sl-hide"),clearTimeout(this.autoHideTimeout),await S(this.base);const{keyframes:e,options:t}=q(this,"alert.hide");await z(this.base,e,t),this.base.hidden=!0,c(this,"sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return h`
      <div
        part="base"
        class=${d({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
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
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x"
                library="system"
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};function E(e){let t,a,s,r,o,l,i,n,c,h,d,u,p;return{c(){t=b(),a=f("div"),s=f("h1"),s.textContent="Form - basic",r=b(),o=f("form"),o.innerHTML='<sl-input name="name" type="text" label="Name" required="" maxlength="10" help-text="Input your name, Maximum length: 10 characters."></sl-input> \n    <br/> \n    <sl-select name="favorite" label="Select your favorite" clearable="" required=""><sl-menu-item value="birds">Birds</sl-menu-item> \n      <sl-menu-item value="cats">Cats</sl-menu-item> \n      <sl-menu-item value="dogs">Dogs</sl-menu-item></sl-select> \n    <br/> \n    <sl-checkbox name="agree" value="yes" required="">I totally agree</sl-checkbox> \n    <br/><br/> \n    <sl-button type="submit" variant="primary">Submit</sl-button>',l=b(),i=f("sl-alert"),n=f("sl-icon"),c=b(),h=f("pre"),d=v(e[1]),document.title="Form - basic",g(n,"slot","icon"),g(n,"name","check2-circle"),g(i,"type","success"),g(i,"duration","3000"),g(i,"closable",""),y(a,"class","content")},m(m,b){w(m,t,b),w(m,a,b),_(a,s),_(a,r),_(a,o),_(a,l),_(a,i),_(i,n),_(i,c),_(i,h),_(h,d),e[3](i),u||(p=x(o,"submit",k(e[2])),u=!0)},p(e,[t]){2&t&&C(d,e[1])},i:H,o:H,d(s){s&&T(t),s&&T(a),e[3](null),u=!1,p()}}}function O(e,t,a){let s,r="";return[s,r,function(e){console.log(e);const t=new FormData(e.target);a(1,r="");for(const[e,s]of t)a(1,r+=`${e}: ${s}\n`);s.toast()},function(e){$[e?"unshift":"push"]((()=>{s=e,a(0,s)}))}]}A.styles=D,a([s('[part="base"]')],A.prototype,"base",2),a([r({type:Boolean,reflect:!0})],A.prototype,"open",2),a([r({type:Boolean,reflect:!0})],A.prototype,"closable",2),a([r({reflect:!0})],A.prototype,"variant",2),a([r({type:Number})],A.prototype,"duration",2),a([o("open",{waitUntilFirstUpdate:!0})],A.prototype,"handleOpenChange",1),a([o("duration")],A.prototype,"handleDurationChange",1),A=a([l("sl-alert")],A),j("alert.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}}),j("alert.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});class L extends u{constructor(e){super(),p(this,e,O,E,m,{})}}export{L as default};
