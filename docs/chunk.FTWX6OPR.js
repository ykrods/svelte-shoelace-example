import{H as t,I as e,J as o,r as n,f as r,_ as i,g as a,h as s,w as l,j as c,k as u,l as d,m as h,$ as p,o as b,G as m,E as f,F as g}from"./main2.js";var v=class extends Event{constructor(t){super("formdata"),this.formData=t}},y=class extends FormData{constructor(t){super(t),this.form=t,t.dispatchEvent(new v(this))}append(t,e){let o=this.form.elements[t];if(o||(o=document.createElement("input"),o.type="hidden",o.name=t,this.form.appendChild(o)),this.has(t)){const n=this.getAll(t),r=n.indexOf(o.value);-1!==r&&n.splice(r,1),n.push(e),this.set(t,n)}else super.append(t,e);o.value=e}};function w(){window.FormData&&!function(){const t=document.createElement("form");let e=!1;return document.body.append(t),t.addEventListener("submit",(t=>{new FormData(t.target),t.preventDefault()})),t.addEventListener("formdata",(()=>e=!0)),t.dispatchEvent(new Event("submit",{cancelable:!0})),t.remove(),e}()&&(window.FormData=y,window.addEventListener("submit",(t=>{t.defaultPrevented||new FormData(t.target)})))}"complete"===document.readyState?w():window.addEventListener("DOMContentLoaded",(()=>w()));var x=class{constructor(e,o){(this.host=e).addController(this),this.options=t({form:t=>t.closest("form"),name:t=>t.name,value:t=>t.value,disabled:t=>t.disabled,reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity()},o),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form=void 0)}handleFormData(t){const e=this.options.disabled(this.host),o=this.options.name(this.host),n=this.options.value(this.host);e||"string"!=typeof o||void 0===n||(Array.isArray(n)?n.forEach((e=>{t.formData.append(o,e.toString())})):t.formData.append(o,n.toString()))}handleFormSubmit(t){const e=this.options.disabled(this.host),o=this.options.reportValidity;!this.form||this.form.noValidate||e||o(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}submit(t){if(this.form){const e=document.createElement("button");e.type="submit",e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clip="rect(0 0 0 0)",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.formAction=t.formAction,e.formMethod=t.formMethod,e.formNoValidate=t.formNoValidate,e.formTarget=t.formTarget),this.form.append(e),e.click(),e.remove()}}},_=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){if(!t.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}};function k(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach((t=>{t.nodeType===Node.TEXT_NODE&&(o+=t.textContent)})),o}function E(t){return t.split("-")[0]}function C(t){return t.split("-")[1]}function D(t){return["top","bottom"].includes(E(t))?"x":"y"}function A(t){return"y"===t?"height":"width"}function T(t,e,o){let{reference:n,floating:r}=t;const i=n.x+n.width/2-r.width/2,a=n.y+n.height/2-r.height/2,s=D(e),l=A(s),c=n[l]/2-r[l]/2,u="x"===s;let d;switch(E(e)){case"top":d={x:i,y:n.y-r.height};break;case"bottom":d={x:i,y:n.y+n.height};break;case"right":d={x:n.x+n.width,y:a};break;case"left":d={x:n.x-r.width,y:a};break;default:d={x:n.x,y:n.y}}switch(C(e)){case"start":d[s]-=c*(o&&u?-1:1);break;case"end":d[s]+=c*(o&&u?-1:1)}return d}function S(e){return"number"!=typeof e?function(e){return t({top:0,right:0,bottom:0,left:0},e)}(e):{top:e,right:e,bottom:e,left:e}}function L(e){return o(t({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}async function $(e,n){var r;void 0===n&&(n={});const{x:i,y:a,platform:s,rects:l,elements:c,strategy:u}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:b=!1,padding:m=0}=n,f=S(m),g=c[b?"floating"===p?"reference":"floating":p],v=L(await s.getClippingRect({element:null==(r=await(null==s.isElement?void 0:s.isElement(g)))||r?g:g.contextElement||await(null==s.getDocumentElement?void 0:s.getDocumentElement(c.floating)),boundary:d,rootBoundary:h})),y=L(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===p?o(t({},l.floating),{x:i,y:a}):l.reference,offsetParent:await(null==s.getOffsetParent?void 0:s.getOffsetParent(c.floating)),strategy:u}):l[p]);return{top:v.top-y.top+f.top,bottom:y.bottom-v.bottom+f.bottom,left:v.left-y.left+f.left,right:y.right-v.right+f.right}}var R=Math.min,P=Math.max;function N(t,e,o){return P(t,R(e,o))}var F={left:"right",right:"left",bottom:"top",top:"bottom"};function M(t){return t.replace(/left|right|bottom|top/g,(t=>F[t]))}var O={start:"end",end:"start"};function B(t){return t.replace(/start|end/g,(t=>O[t]))}var z=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(o){var n;const{placement:r,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:c}=o,u=t,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:b="bestFit",flipAlignment:m=!0}=u,f=e(u,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),g=E(r),v=p||(g===s||!m?[M(s)]:function(t){const e=M(t);return[B(t),e,B(e)]}(s)),y=[s,...v],w=await $(o,f),x=[];let _=(null==(n=i.flip)?void 0:n.overflows)||[];if(d&&x.push(w[g]),h){const{main:t,cross:e}=function(t,e,o){void 0===o&&(o=!1);const n=C(t),r=D(t),i=A(r);let a="x"===r?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return e.reference[i]>e.floating[i]&&(a=M(a)),{main:a,cross:M(a)}}(r,a,await(null==l.isRTL?void 0:l.isRTL(c.floating)));x.push(w[t],w[e])}if(_=[..._,{placement:r,overflows:x}],!x.every((t=>t<=0))){var k,T;const t=(null!=(k=null==(T=i.flip)?void 0:T.index)?k:0)+1,e=y[t];if(e)return{data:{index:t,overflows:_},reset:{skip:!1,placement:e}};let o="bottom";switch(b){case"bestFit":{var S;const t=null==(S=_.slice().sort(((t,e)=>t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)-e.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)))[0])?void 0:S.placement;t&&(o=t);break}case"initialPlacement":o=s}return{reset:{placement:o}}}return{}}}};var W=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(n){const{x:r,y:i,placement:a,rects:s,platform:l,elements:c}=n,u=function(e,n,r,i){void 0===i&&(i=!1);const a=E(e),s=C(e),l="x"===D(e),c=["left","top"].includes(a)?-1:1;let u=1;"end"===s&&(u=-1),i&&l&&(u*=-1);const d="function"==typeof r?r(o(t({},n),{placement:e})):r,{mainAxis:h,crossAxis:p}="number"==typeof d?{mainAxis:d,crossAxis:0}:t({mainAxis:0,crossAxis:0},d);return l?{x:p*u,y:h*c}:{x:h*c,y:p*u}}(a,s,e,await(null==l.isRTL?void 0:l.isRTL(c.floating)));return{x:r+u.x,y:i+u.y,data:u}}}};var H=function(o){return void 0===o&&(o={}),{name:"size",options:o,async fn(n){const{placement:r,rects:i,platform:a,elements:s}=n,l=o,{apply:c}=l,u=e(l,["apply"]),d=await $(n,u),h=E(r),p=C(r);let b,m;"top"===h||"bottom"===h?(b=h,m=p===(await(null==a.isRTL?void 0:a.isRTL(s.floating))?"start":"end")?"left":"right"):(m=h,b="end"===p?"top":"bottom");const f=P(d.left,0),g=P(d.right,0),v=P(d.top,0),y=P(d.bottom,0),w={height:i.floating.height-(["left","right"].includes(r)?2*(0!==v||0!==y?v+y:P(d.top,d.bottom)):d[b]),width:i.floating.width-(["top","bottom"].includes(r)?2*(0!==f||0!==g?f+g:P(d.left,d.right)):d[m])};return null==c||c(t(t({},w),i)),{reset:{rects:!0}}}}};function V(t){return"[object Window]"===(null==t?void 0:t.toString())}function I(t){if(null==t)return window;if(!V(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function j(t){return I(t).getComputedStyle(t)}function U(t){return V(t)?"":t?(t.nodeName||"").toLowerCase():""}function q(t){return t instanceof I(t).HTMLElement}function K(t){return t instanceof I(t).Element}function X(t){return t instanceof I(t).ShadowRoot||t instanceof ShadowRoot}function Y(t){const{overflow:e,overflowX:o,overflowY:n}=j(t);return/auto|scroll|overlay|hidden/.test(e+n+o)}function G(t){return["table","td","th"].includes(U(t))}function J(t){const e=navigator.userAgent.toLowerCase().includes("firefox"),o=j(t);return"none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||["transform","perspective"].includes(o.willChange)||e&&"filter"===o.willChange||e&&!!o.filter&&"none"!==o.filter}var Q=Math.min,Z=Math.max,tt=Math.round;function et(t,e){void 0===e&&(e=!1);const o=t.getBoundingClientRect();let n=1,r=1;return e&&q(t)&&(n=t.offsetWidth>0&&tt(o.width)/t.offsetWidth||1,r=t.offsetHeight>0&&tt(o.height)/t.offsetHeight||1),{width:o.width/n,height:o.height/r,top:o.top/r,right:o.right/n,bottom:o.bottom/r,left:o.left/n,x:o.left/n,y:o.top/r}}function ot(t){return(e=t,(e instanceof I(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function nt(t){return V(t)?{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}:{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function rt(t){return et(ot(t)).left+nt(t).scrollLeft}function it(t,e,o){const n=q(e),r=ot(e),i=et(t,n&&function(t){const e=et(t);return tt(e.width)!==t.offsetWidth||tt(e.height)!==t.offsetHeight}(e));let a={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(n||!n&&"fixed"!==o)if(("body"!==U(e)||Y(r))&&(a=nt(e)),q(e)){const t=et(e,!0);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else r&&(s.x=rt(r));return{x:i.left+a.scrollLeft-s.x,y:i.top+a.scrollTop-s.y,width:i.width,height:i.height}}function at(t){return"html"===U(t)?t:t.assignedSlot||t.parentNode||(X(t)?t.host:null)||ot(t)}function st(t){return q(t)&&"fixed"!==getComputedStyle(t).position?t.offsetParent:null}function lt(t){const e=I(t);let o=st(t);for(;o&&G(o)&&"static"===getComputedStyle(o).position;)o=st(o);return o&&("html"===U(o)||"body"===U(o)&&"static"===getComputedStyle(o).position&&!J(o))?e:o||function(t){let e=at(t);for(X(e)&&(e=e.host);q(e)&&!["html","body"].includes(U(e));){if(J(e))return e;e=e.parentNode}return null}(t)||e}function ct(t){if(q(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=et(t);return{width:e.width,height:e.height}}function ut(t){return["html","body","#document"].includes(U(t))?t.ownerDocument.body:q(t)&&Y(t)?t:ut(at(t))}function dt(t,e){var o;void 0===e&&(e=[]);const n=ut(t),r=n===(null==(o=t.ownerDocument)?void 0:o.body),i=I(n),a=r?[i].concat(i.visualViewport||[],Y(n)?n:[]):n,s=e.concat(a);return r?s:s.concat(dt(at(a)))}function ht(t,e){return"viewport"===e?L(function(t){const e=I(t),o=ot(t),n=e.visualViewport;let r=o.clientWidth,i=o.clientHeight,a=0,s=0;return n&&(r=n.width,i=n.height,Math.abs(e.innerWidth/n.scale-n.width)<.01&&(a=n.offsetLeft,s=n.offsetTop)),{width:r,height:i,x:a,y:s}}(t)):K(e)?function(t){const e=et(t),o=e.top+t.clientTop,n=e.left+t.clientLeft;return{top:o,left:n,x:n,y:o,right:n+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e):L(function(t){var e;const o=ot(t),n=nt(t),r=null==(e=t.ownerDocument)?void 0:e.body,i=Z(o.scrollWidth,o.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=Z(o.scrollHeight,o.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0);let s=-n.scrollLeft+rt(t);const l=-n.scrollTop;return"rtl"===j(r||o).direction&&(s+=Z(o.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}(ot(t)))}function pt(t){const e=dt(at(t)),o=["absolute","fixed"].includes(j(t).position)&&q(t)?lt(t):t;return K(o)?e.filter((t=>K(t)&&function(t,e){const o=null==e.getRootNode?void 0:e.getRootNode();if(t.contains(e))return!0;if(o&&X(o)){let o=e;do{if(o&&t===o)return!0;o=o.parentNode||o.host}while(o)}return!1}(t,o)&&"body"!==U(t))):[]}var bt={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:n}=t;const r=[..."clippingAncestors"===o?pt(e):[].concat(o),n],i=r[0],a=r.reduce(((t,o)=>{const n=ht(e,o);return t.top=Z(n.top,t.top),t.right=Q(n.right,t.right),t.bottom=Q(n.bottom,t.bottom),t.left=Z(n.left,t.left),t}),ht(e,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:n,offsetParent:r,strategy:i}=e;const a=q(r),s=ot(r);if(r===s)return n;let l={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if((a||!a&&"fixed"!==i)&&(("body"!==U(r)||Y(s))&&(l=nt(r)),q(r))){const t=et(r,!0);c.x=t.x+r.clientLeft,c.y=t.y+r.clientTop}return o(t({},n),{x:n.x-l.scrollLeft+c.x,y:n.y-l.scrollTop+c.y})},isElement:K,getDimensions:ct,getOffsetParent:lt,getDocumentElement:ot,getElementRects:e=>{let{reference:n,floating:r,strategy:i}=e;return{reference:it(n,lt(r),i),floating:o(t({},ct(r)),{x:0,y:0})}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===j(t).direction};var mt=(e,n,r)=>(async(e,n,r)=>{const{placement:i="bottom",strategy:a="absolute",middleware:s=[],platform:l}=r,c=await(null==l.isRTL?void 0:l.isRTL(n));let u=await l.getElementRects({reference:e,floating:n,strategy:a}),{x:d,y:h}=T(u,i,c),p=i,b={};const m=new Set;for(let r=0;r<s.length;r++){const{name:f,fn:g}=s[r];if(m.has(f))continue;const{x:v,y:y,data:w,reset:x}=await g({x:d,y:h,initialPlacement:i,placement:p,strategy:a,middlewareData:b,rects:u,platform:l,elements:{reference:e,floating:n}});d=null!=v?v:d,h=null!=y?y:h,b=o(t({},b),{[f]:t(t({},b[f]),w)}),x&&("object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(u=!0===x.rects?await l.getElementRects({reference:e,floating:n,strategy:a}):x.rects),({x:d,y:h}=T(u,p,c)),!1!==x.skip&&m.add(f)),r=-1)}return{x:d,y:h,placement:p,strategy:a,middlewareData:b}})(e,n,t({platform:bt},r)),ft=n`
  ${r}

  :host {
    display: inline-block;
  }

  .dropdown {
    position: relative;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__positioner {
    position: absolute;
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    box-shadow: var(--sl-shadow-large);
    overflow: auto;
    overscroll-behavior: none;
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  .dropdown__positioner[data-placement^='top'] .dropdown__panel {
    transform-origin: bottom;
  }

  .dropdown__positioner[data-placement^='bottom'] .dropdown__panel {
    transform-origin: top;
  }

  .dropdown__positioner[data-placement^='left'] .dropdown__panel {
    transform-origin: right;
  }

  .dropdown__positioner[data-placement^='right'] .dropdown__panel {
    transform-origin: left;
  }
`;function gt(t){const e=t.tagName.toLowerCase();return"-1"!==t.getAttribute("tabindex")&&(!t.hasAttribute("disabled")&&((!t.hasAttribute("aria-disabled")||"false"===t.getAttribute("aria-disabled"))&&(!("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))&&(null!==t.offsetParent&&("hidden"!==window.getComputedStyle(t).visibility&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||(!!t.hasAttribute("tabindex")||(!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(e)))))))))}function vt(t,e,o="vertical",n="smooth"){const r=function(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),i=r.top+e.scrollTop,a=r.left+e.scrollLeft,s=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,u=e.scrollTop+e.offsetHeight;"horizontal"!==o&&"both"!==o||(a<s?e.scrollTo({left:a,behavior:n}):a+t.clientWidth>l&&e.scrollTo({left:a-e.offsetWidth+t.clientWidth,behavior:n})),"vertical"!==o&&"both"!==o||(i<c?e.scrollTo({top:i,behavior:n}):i+t.clientHeight>u&&e.scrollTo({top:i-e.offsetHeight+t.clientHeight,behavior:n}))}function yt(e,n,r){return new Promise((i=>{if((null==r?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const a=e.animate(n,o(t({},r),{duration:wt()?0:r.duration}));a.addEventListener("cancel",i,{once:!0}),a.addEventListener("finish",i,{once:!0})}))}function wt(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function xt(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const o=requestAnimationFrame(e);t.addEventListener("cancel",(()=>o),{once:!0}),t.addEventListener("finish",(()=>o),{once:!0}),t.cancel()})))))}var _t=new Map,kt=new WeakMap;function Et(t,e){_t.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function Ct(t,e){const o=kt.get(t);if(null==o?void 0:o[e])return o[e];const n=_t.get(e);return n||{keyframes:[],options:{duration:0}}}var Dt=class extends u{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}async firstUpdated(){this.panel.hidden=!this.open,this.open&&(await this.updateComplete,this.startPositioner())}disconnectedCallback(){super.disconnectedCallback(),this.hide(),this.stopPositioner()}focusOnTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).find((t=>"sl-menu"===t.tagName.toLowerCase()))}handleDocumentKeyDown(t){var e;if("Escape"===t.key)return this.hide(),void this.focusOnTrigger();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var t,e,o;const n=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?null==(o=null==(e=document.activeElement)?void 0:e.shadowRoot)?void 0:o.activeElement:document.activeElement;this.containingElement&&(null==n?void 0:n.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}}handleDocumentMouseDown(t){const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(t){vt(t.target,this.panel)}handlePanelSelect(t){const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}handlePopoverOptionsChange(){this.updatePositioner()}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(t){const e=this.getMenu(),o=e.defaultSlot.assignedElements({flatten:!0}),n=o[0],r=o[o.length-1];if("Escape"===t.key)return this.focusOnTrigger(),void this.hide();if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||this.show(),requestAnimationFrame((()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(n),n.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(r),r.focus())})));this.open&&!["Tab","Shift","Meta","Ctrl","Alt"].includes(t.key)&&e.typeToSelect(t)}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find((t=>function(t){var e,o;const n=[];return function t(e){e instanceof HTMLElement&&(n.push(e),null!==e.shadowRoot&&"open"===e.shadowRoot.mode&&t(e.shadowRoot)),[...e.querySelectorAll("*")].forEach((e=>t(e)))}(t),{start:null!=(e=n.find((t=>gt(t))))?e:null,end:null!=(o=n.reverse().find((t=>gt(t))))?o:null}}(t).start));t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,d(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,d(this,"sl-after-hide")}reposition(){this.updatePositioner()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){h(this,"sl-show"),this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),await xt(this),this.startPositioner(),this.panel.hidden=!1;const{keyframes:t,options:e}=Ct(this,"dropdown.show");await yt(this.panel,t,e),h(this,"sl-after-show")}else{h(this,"sl-hide"),this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),await xt(this);const{keyframes:t,options:e}=Ct(this,"dropdown.hide");await yt(this.panel,t,e),this.panel.hidden=!0,this.stopPositioner(),h(this,"sl-after-hide")}}startPositioner(){this.stopPositioner(),this.updatePositioner(),this.positionerCleanup=function(t,e,o,n){void 0===n&&(n={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:a=!0,animationFrame:s=!1}=n;let l=!1;const c=r&&!s,u=i&&!s,d=a&&!s,h=c||u?[...K(t)?dt(t):[],...dt(e)]:[];h.forEach((t=>{c&&t.addEventListener("scroll",o,{passive:!0}),u&&t.addEventListener("resize",o)}));let p,b=null;d&&(b=new ResizeObserver(o),K(t)&&b.observe(t),b.observe(e));let m=s?et(t):null;return s&&function e(){if(l)return;const n=et(t);!m||n.x===m.x&&n.y===m.y&&n.width===m.width&&n.height===m.height||o(),m=n,p=requestAnimationFrame(e)}(),()=>{var t;l=!0,h.forEach((t=>{c&&t.removeEventListener("scroll",o),u&&t.removeEventListener("resize",o)})),null==(t=b)||t.disconnect(),b=null,s&&cancelAnimationFrame(p)}}(this.trigger,this.positioner,this.updatePositioner.bind(this))}updatePositioner(){var n;this.open&&this.trigger&&this.positioner&&mt(this.trigger,this.positioner,{placement:this.placement,middleware:[W({mainAxis:this.distance,crossAxis:this.skidding}),z(),(void 0===n&&(n={}),{name:"shift",options:n,async fn(r){const{x:i,y:a,placement:s}=r,l=n,{mainAxis:c=!0,crossAxis:u=!1,limiter:d={fn:t=>{let{x:e,y:o}=t;return{x:e,y:o}}}}=l,h=e(l,["mainAxis","crossAxis","limiter"]),p={x:i,y:a},b=await $(r,h),m=D(E(s)),f="x"===m?"y":"x";let g=p[m],v=p[f];if(c){const t="y"===m?"bottom":"right";g=N(g+b["y"===m?"top":"left"],g,g-b[t])}if(u){const t="y"===f?"bottom":"right";v=N(v+b["y"===f?"top":"left"],v,v-b[t])}const y=d.fn(o(t({},r),{[m]:g,[f]:v}));return o(t({},y),{data:{x:y.x-i,y:y.y-a}})}}),H({apply:({width:t,height:e})=>{Object.assign(this.panel.style,{maxWidth:`${t}px`,maxHeight:`${e}px`})},padding:8})],strategy:this.hoist?"fixed":"absolute"}).then((({x:t,y:e,placement:o})=>{this.positioner.setAttribute("data-placement",o),Object.assign(this.positioner.style,{position:this.hoist?"fixed":"absolute",left:`${t}px`,top:`${e}px`})}))}stopPositioner(){this.positionerCleanup&&(this.positionerCleanup(),this.positionerCleanup=void 0,this.positioner.removeAttribute("data-placement"))}render(){return p`
      <div
        part="base"
        id="dropdown"
        class=${b({dropdown:!0,"dropdown--open":this.open})}
      >
        <span
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <!-- Position the panel with a wrapper since the popover makes use of translate. This let's us add animations
        on the panel without interfering with the position. -->
        <div class="dropdown__positioner">
          <div
            part="panel"
            class="dropdown__panel"
            aria-hidden=${this.open?"false":"true"}
            aria-labelledby="dropdown"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `}};Dt.styles=ft,i([a(".dropdown__trigger")],Dt.prototype,"trigger",2),i([a(".dropdown__panel")],Dt.prototype,"panel",2),i([a(".dropdown__positioner")],Dt.prototype,"positioner",2),i([s({type:Boolean,reflect:!0})],Dt.prototype,"open",2),i([s({reflect:!0})],Dt.prototype,"placement",2),i([s({type:Boolean})],Dt.prototype,"disabled",2),i([s({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Dt.prototype,"stayOpenOnSelect",2),i([s({attribute:!1})],Dt.prototype,"containingElement",2),i([s({type:Number})],Dt.prototype,"distance",2),i([s({type:Number})],Dt.prototype,"skidding",2),i([s({type:Boolean})],Dt.prototype,"hoist",2),i([l("distance"),l("hoist"),l("placement"),l("skidding")],Dt.prototype,"handlePopoverOptionsChange",1),i([l("open",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleOpenChange",1),Dt=i([c("sl-dropdown")],Dt),Et("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}}),Et("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});var At=n`
  ${r}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    text-align: left;
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    color: var(--sl-color-neutral-400);
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-right: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-left: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(${m}:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }
`,Tt=class extends u{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return p`
      <div
        part="base"
        class=${b({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span class="menu-item__check">
          <sl-icon name="check-lg" library="default" aria-hidden="true"></sl-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="default" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};Tt.styles=At,i([a(".menu-item")],Tt.prototype,"menuItem",2),i([s({type:Boolean,reflect:!0})],Tt.prototype,"checked",2),i([s()],Tt.prototype,"value",2),i([s({type:Boolean,reflect:!0})],Tt.prototype,"disabled",2),i([l("checked")],Tt.prototype,"handleCheckedChange",1),i([l("disabled")],Tt.prototype,"handleDisabledChange",1),Tt=i([c("sl-menu-item")],Tt);var St,Lt=n`
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
    transition: var(--sl-transition-fast) background-color, var(--sl-transition-fast) color,
      var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
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

  .button__label ::slotted(sl-icon) {
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

  .button--standard.button--default${m}:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
    box-shadow: var(--sl-focus-ring);
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

  .button--standard.button--primary${m}:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
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

  .button--standard.button--success${m}:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
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

  .button--standard.button--neutral${m}:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
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

  .button--standard.button--warning${m}:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
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

  .button--standard.button--danger${m}:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
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

  .button--outline.button--default:hover:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default${m}:not(.button--disabled) {
    border-color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
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

  .button--outline.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary${m}:not(.button--disabled) {
    border-color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
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

  .button--outline.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success${m}:not(.button--disabled) {
    border-color: var(--sl-color-success-500);
    box-shadow: var(--sl-focus-ring);
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

  .button--outline.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral${m}:not(.button--disabled) {
    border-color: var(--sl-color-neutral-500);
    box-shadow: var(--sl-focus-ring);
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

  .button--outline.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning${m}:not(.button--disabled) {
    border-color: var(--sl-color-warning-500);
    box-shadow: var(--sl-focus-ring);
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

  .button--outline.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger${m}:not(.button--disabled) {
    border-color: var(--sl-color-danger-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
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

  .button--text${m}:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
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
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
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
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
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
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-right: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-left: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump focused buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus) {
    z-index: 2;
  }
`,$t=(t,...e)=>({_$litStatic$:e.reduce(((e,o,n)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[n+1]),t[0])}),Rt=new Map,Pt=(St=p,(t,...e)=>{var o;const n=e.length;let r,i;const a=[],s=[];let l,c=0,u=!1;for(;c<n;){for(l=t[c];c<n&&void 0!==(i=e[c],r=null===(o=i)||void 0===o?void 0:o._$litStatic$);)l+=r+t[++c],u=!0;s.push(i),a.push(l),c++}if(c===n&&a.push(t[n]),u){const o=a.join("$$lit$$");void 0===(t=Rt.get(o))&&(a.raw=a,Rt.set(o,t=a)),e=s}return St(t,...e)}),Nt=class extends u{constructor(){super(...arguments),this.formSubmitController=new x(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")}}),this.hasSlotController=new _(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,h(this,"sl-blur")}handleFocus(){this.hasFocus=!0,h(this,"sl-focus")}handleClick(t){if(this.disabled||this.loading)return t.preventDefault(),void t.stopPropagation();"submit"===this.type&&this.formSubmitController.submit(this)}render(){const t=!!this.href,e=t?$t`a`:$t`button`;return Pt`
      <${e}
        part="base"
        class=${b({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${g(t?void 0:this.disabled)}
        type=${this.type}
        name=${g(t?void 0:this.name)}
        value=${g(t?void 0:this.value)}
        href=${g(this.href)}
        target=${g(this.target)}
        download=${g(this.download)}
        rel=${g(this.target?"noreferrer noopener":void 0)}
        role="button"
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?Pt`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?Pt`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};Nt.styles=Lt,i([a(".button")],Nt.prototype,"button",2),i([f()],Nt.prototype,"hasFocus",2),i([s({reflect:!0})],Nt.prototype,"variant",2),i([s({reflect:!0})],Nt.prototype,"size",2),i([s({type:Boolean,reflect:!0})],Nt.prototype,"caret",2),i([s({type:Boolean,reflect:!0})],Nt.prototype,"disabled",2),i([s({type:Boolean,reflect:!0})],Nt.prototype,"loading",2),i([s({type:Boolean,reflect:!0})],Nt.prototype,"outline",2),i([s({type:Boolean,reflect:!0})],Nt.prototype,"pill",2),i([s({type:Boolean,reflect:!0})],Nt.prototype,"circle",2),i([s()],Nt.prototype,"type",2),i([s()],Nt.prototype,"name",2),i([s()],Nt.prototype,"value",2),i([s()],Nt.prototype,"href",2),i([s()],Nt.prototype,"target",2),i([s()],Nt.prototype,"download",2),i([s()],Nt.prototype,"form",2),i([s({attribute:"formaction"})],Nt.prototype,"formAction",2),i([s({attribute:"formmethod"})],Nt.prototype,"formMethod",2),i([s({attribute:"formnovalidate",type:Boolean})],Nt.prototype,"formNoValidate",2),i([s({attribute:"formtarget"})],Nt.prototype,"formTarget",2),Nt=i([c("sl-button")],Nt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ft=n`
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
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Mt=class extends u{render(){return p`
      <svg part="base" class="spinner" role="status">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Mt.styles=Ft,Mt=i([c("sl-spinner")],Mt);export{x as F,_ as H,xt as a,yt as b,k as c,Ct as g,Et as s};
