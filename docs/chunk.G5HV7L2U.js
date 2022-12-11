import{G as t,H as o,f as e,g as r,_ as n,h as a,E as s,j as l,w as i,k as u,l as d,I as c,J as b,o as h,F as m,y as p}from"./main2.js";var v=class extends Event{constructor(t){super("formdata"),this.formData=t}},f=class extends FormData{constructor(t){var o=(...t)=>{super(...t)};t?(o(t),this.form=t,t.dispatchEvent(new v(this))):o()}append(t,o){if(!this.form)return super.append(t,o);let e=this.form.elements[t];if(e||(e=document.createElement("input"),e.type="hidden",e.name=t,this.form.appendChild(e)),this.has(t)){const r=this.getAll(t),n=r.indexOf(e.value);-1!==n&&r.splice(n,1),r.push(o),this.set(t,r)}else super.append(t,o);e.value=o}};function g(){window.FormData&&!function(){const t=document.createElement("form");let o=!1;return document.body.append(t),t.addEventListener("submit",(t=>{new FormData(t.target),t.preventDefault()})),t.addEventListener("formdata",(()=>o=!0)),t.dispatchEvent(new Event("submit",{cancelable:!0})),t.remove(),o}()&&(window.FormData=f,window.addEventListener("submit",(t=>{t.defaultPrevented||new FormData(t.target)})))}"complete"===document.readyState?g():window.addEventListener("DOMContentLoaded",(()=>g()));var y,w=new WeakMap,_=new WeakMap,k=new WeakMap,x=class{constructor(o,e){(this.host=o).addController(this),this.options=t({form:t=>t.closest("form"),name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var o;return null!=(o=t.disabled)&&o},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),setValue:(t,o)=>t.value=o},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(w.has(this.form)?w.get(this.form).add(this.host):w.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),k.has(this.form)||(k.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){var t;this.form&&(null==(t=w.get(this.form))||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),k.has(this.form)&&(this.form.reportValidity=k.get(this.form),k.delete(this.form)),this.form=void 0),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){var t;const o=this.host,e=Boolean(_.get(o)),r=Boolean(o.invalid),n=Boolean(o.required);(null==(t=this.form)?void 0:t.noValidate)?(o.removeAttribute("data-required"),o.removeAttribute("data-optional"),o.removeAttribute("data-invalid"),o.removeAttribute("data-valid"),o.removeAttribute("data-user-invalid"),o.removeAttribute("data-user-valid")):(o.toggleAttribute("data-required",n),o.toggleAttribute("data-optional",!n),o.toggleAttribute("data-invalid",r),o.toggleAttribute("data-valid",!r),o.toggleAttribute("data-user-invalid",r&&e),o.toggleAttribute("data-user-valid",!r&&e))}handleFormData(t){const o=this.options.disabled(this.host),e=this.options.name(this.host),r=this.options.value(this.host),n="sl-button"===this.host.tagName.toLowerCase();o||n||"string"!=typeof e||void 0===r||(Array.isArray(r)?r.forEach((o=>{t.formData.append(e,o.toString())})):t.formData.append(e,r.toString()))}handleFormSubmit(t){var o;const e=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(o=w.get(this.form))||o.forEach((t=>{this.setUserInteracted(t,!0)}))),!this.form||this.form.noValidate||e||r(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const o of t)if("function"==typeof o.reportValidity&&!o.reportValidity())return!1}return!0}setUserInteracted(t,o){_.set(t,o),t.requestUpdate()}doAction(t,o){if(this.form){const e=document.createElement("button");e.type=t,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",o&&(e.name=o.name,e.value=o.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{o.hasAttribute(t)&&e.setAttribute(t,o.getAttribute(t))}))),this.form.append(e),e.click(),e.remove()}}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}},E=new Set,C=new MutationObserver(A),L=new Map,F=document.documentElement.dir||"ltr",S=document.documentElement.lang||navigator.language;function A(){F=document.documentElement.dir||"ltr",S=document.documentElement.lang||navigator.language,[...E.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}C.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var D=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){E.add(this.host)}hostDisconnected(){E.delete(this.host)}dir(){return`${this.host.dir||F}`.toLowerCase()}lang(){return`${this.host.lang||S}`.toLowerCase()}term(t,...o){var e,r;const n=new Intl.Locale(this.lang()),a=null==n?void 0:n.language.toLowerCase(),s=null!==(r=null===(e=null==n?void 0:n.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==r?r:"",l=L.get(`${a}-${s}`),i=L.get(a);let u;if(l&&l[t])u=l[t];else if(i&&i[t])u=i[t];else{if(!y||!y[t])return console.error(`No translation found for: ${String(t)}`),t;u=y[t]}return"function"==typeof u?u(...o):u}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,e){return new Intl.RelativeTimeFormat(this.lang(),e).format(t,o)}},V=class extends D{};!function(...t){t.map((t=>{const o=t.$code.toLowerCase();L.has(o)?L.set(o,Object.assign(Object.assign({},L.get(o)),t)):L.set(o,t),y||(y=t)})),A()}({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var $=class{constructor(t,...o){this.slotNames=[],(this.host=t).addController(this),this.slotNames=o,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const o=t;if("sl-visually-hidden"===o.tagName.toLowerCase())return!1;if(!o.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const o=t.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()}};function B(t){if(!t)return"";const o=t.assignedNodes({flatten:!0});let e="";return[...o].forEach((t=>{t.nodeType===Node.TEXT_NODE&&(e+=t.textContent)})),e}function T(t){const o=t.tagName.toLowerCase();return"-1"!==t.getAttribute("tabindex")&&(!t.hasAttribute("disabled")&&((!t.hasAttribute("aria-disabled")||"false"===t.getAttribute("aria-disabled"))&&(!("input"===o&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))&&(null!==t.offsetParent&&("hidden"!==window.getComputedStyle(t).visibility&&(!("audio"!==o&&"video"!==o||!t.hasAttribute("controls"))||(!!t.hasAttribute("tabindex")||(!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(o)))))))))}function N(t){var o,e;const r=[];!function t(o){o instanceof HTMLElement&&(r.push(o),null!==o.shadowRoot&&"open"===o.shadowRoot.mode&&t(o.shadowRoot)),[...o.children].forEach((o=>t(o)))}(t);return{start:null!=(o=r.find((t=>T(t))))?o:null,end:null!=(e=r.reverse().find((t=>T(t))))?e:null}}var z=new Set;function R(t){z.add(t),document.body.classList.add("sl-scroll-lock")}function U(t){z.delete(t),0===z.size&&document.body.classList.remove("sl-scroll-lock")}function I(t,o,e="vertical",r="smooth"){const n=function(t,o){return{top:Math.round(t.getBoundingClientRect().top-o.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-o.getBoundingClientRect().left)}}(t,o),a=n.top+o.scrollTop,s=n.left+o.scrollLeft,l=o.scrollLeft,i=o.scrollLeft+o.offsetWidth,u=o.scrollTop,d=o.scrollTop+o.offsetHeight;"horizontal"!==e&&"both"!==e||(s<l?o.scrollTo({left:s,behavior:r}):s+t.clientWidth>i&&o.scrollTo({left:s-o.offsetWidth+t.clientWidth,behavior:r})),"vertical"!==e&&"both"!==e||(a<u?o.scrollTo({top:a,behavior:r}):a+t.clientHeight>d&&o.scrollTo({top:a-o.offsetHeight+t.clientHeight,behavior:r}))}function P(t,o){return new Promise((e=>{t.addEventListener(o,(function r(n){n.target===t&&(t.removeEventListener(o,r),e())}))}))}function M(e,r,n){return new Promise((a=>{if((null==n?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(r,o(t({},n),{duration:W()?0:n.duration}));s.addEventListener("cancel",a,{once:!0}),s.addEventListener("finish",a,{once:!0})}))}function W(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function q(t){return Promise.all(t.getAnimations().map((t=>new Promise((o=>{const e=requestAnimationFrame(o);t.addEventListener("cancel",(()=>e),{once:!0}),t.addEventListener("finish",(()=>e),{once:!0}),t.cancel()})))))}var O=new Map,H=new WeakMap;function j(t,o){return"rtl"===o.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function X(t,o){O.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(o))}function G(t,o,e){const r=H.get(t);if(null==r?void 0:r[o])return j(r[o],e.dir);const n=O.get(o);return n?j(n,e.dir):{keyframes:[],options:{duration:0}}}var J=e`
  ${r}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,K=class extends d{constructor(){super(...arguments),this.formSubmitController=new x(this,{form:t=>{if(t.hasAttribute("form")){const o=t.getRootNode(),e=t.getAttribute("form");return o.getElementById(e)}return t.closest("form")}}),this.hasSlotController=new $(this,"[default]","prefix","suffix"),this.localize=new V(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&(this.invalid=!this.button.checkValidity())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.invalid=!this.button.checkValidity())}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){if(this.disabled||this.loading)return t.preventDefault(),void t.stopPropagation();"submit"===this.type&&this.formSubmitController.submit(this),"reset"===this.type&&this.formSubmitController.reset(this)}handleDisabledChange(){this.isButton()&&(this.button.disabled=this.disabled,this.invalid=!this.button.checkValidity())}isButton(){return!this.href}isLink(){return!!this.href}render(){const t=this.isLink(),o=t?c`a`:c`button`;return b`
      <${o}
        part="base"
        class=${h({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${m(t?void 0:this.disabled)}
        type=${m(t?void 0:this.type)}
        title=${this.title}
        name=${m(t?void 0:this.name)}
        value=${m(t?void 0:this.value)}
        href=${m(t?this.href:void 0)}
        target=${m(t?this.target:void 0)}
        download=${m(t?this.download:void 0)}
        rel=${m(t&&this.target?"noreferrer noopener":void 0)}
        role=${m(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?b` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?b`<sl-spinner></sl-spinner>`:""}
      </${o}>
    `}};K.styles=J,n([a(".button")],K.prototype,"button",2),n([s()],K.prototype,"hasFocus",2),n([s()],K.prototype,"invalid",2),n([l()],K.prototype,"title",2),n([l({reflect:!0})],K.prototype,"variant",2),n([l({reflect:!0})],K.prototype,"size",2),n([l({type:Boolean,reflect:!0})],K.prototype,"caret",2),n([l({type:Boolean,reflect:!0})],K.prototype,"disabled",2),n([l({type:Boolean,reflect:!0})],K.prototype,"loading",2),n([l({type:Boolean,reflect:!0})],K.prototype,"outline",2),n([l({type:Boolean,reflect:!0})],K.prototype,"pill",2),n([l({type:Boolean,reflect:!0})],K.prototype,"circle",2),n([l()],K.prototype,"type",2),n([l()],K.prototype,"name",2),n([l()],K.prototype,"value",2),n([l()],K.prototype,"href",2),n([l()],K.prototype,"target",2),n([l()],K.prototype,"download",2),n([l()],K.prototype,"form",2),n([l({attribute:"formaction"})],K.prototype,"formAction",2),n([l({attribute:"formenctype"})],K.prototype,"formEnctype",2),n([l({attribute:"formmethod"})],K.prototype,"formMethod",2),n([l({attribute:"formnovalidate",type:Boolean})],K.prototype,"formNoValidate",2),n([l({attribute:"formtarget"})],K.prototype,"formTarget",2),n([i("disabled",{waitUntilFirstUpdate:!0})],K.prototype,"handleDisabledChange",1),K=n([u("sl-button")],K);var Q=e`
  ${r}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      rotate: 0deg;
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      rotate: 450deg;
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      rotate: 1080deg;
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Y=class extends d{constructor(){super(...arguments),this.localize=new V(this)}render(){return p`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Y.styles=Q,Y=n([u("sl-spinner")],Y);export{x as F,$ as H,V as L,q as a,M as b,B as c,I as d,N as e,G as g,R as l,X as s,U as u,P as w};
