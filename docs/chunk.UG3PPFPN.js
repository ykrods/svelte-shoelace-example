import{r as e,f as t,_ as n,g as i,j as o,k as s,M as r,m as l,$ as a,I as c,N as d,J as h,h as u,w as p,l as f,o as m,H as g}from"./main2.js";import{c as y,s as v,L as w,d as b,e as x,a as k,g as T,b as A}from"./chunk.YHAURCL4.js";var _=e`
  ${t}

  :host {
    display: block;
  }

  .menu {
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    background: var(--sl-panel-background-color);
    padding: var(--sl-spacing-x-small) 0;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,D=class extends s{constructor(){super(...arguments),this.typeToSelectString=""}firstUpdated(){this.setAttribute("role","menu")}getAllItems(e={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((t=>"menuitem"===t.getAttribute("role")&&!(!e.includeDisabled&&t.disabled)))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find((e=>"0"===e.getAttribute("tabindex")))}setCurrentItem(e){const t=this.getAllItems({includeDisabled:!1}),n=e.disabled?t[0]:e;t.forEach((e=>{e.setAttribute("tabindex",e===n?"0":"-1")}))}typeToSelect(e){var t;const n=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout((()=>this.typeToSelectString=""),1e3),"Backspace"===e.key?e.metaKey||e.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase(),r||n.forEach((e=>e.classList.remove("sl-focus-invisible")));for(const e of n){const n=null==(t=e.shadowRoot)?void 0:t.querySelector("slot:not([name])");if(y(n).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(e),e.focus();break}}}handleClick(e){const t=e.target.closest("sl-menu-item");!1===(null==t?void 0:t.disabled)&&l(this,"sl-select",{detail:{item:t}})}handleKeyUp(){if(!r){this.getAllItems().forEach((e=>{e.classList.remove("sl-focus-invisible")}))}}handleKeyDown(e){if("Enter"===e.key){const t=this.getCurrentItem();e.preventDefault(),null==t||t.click()}if(" "===e.key&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems({includeDisabled:!1}),n=this.getCurrentItem();let i=n?t.indexOf(n):0;if(t.length>0)return e.preventDefault(),"ArrowDown"===e.key?i++:"ArrowUp"===e.key?i--:"Home"===e.key?i=0:"End"===e.key&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),void t[i].focus()}this.typeToSelect(e)}handleMouseDown(e){const t=e.target;"menuitem"===t.getAttribute("role")&&(this.setCurrentItem(t),r||t.classList.add("sl-focus-invisible"))}handleSlotChange(){const e=this.getAllItems({includeDisabled:!1});e.length>0&&this.setCurrentItem(e[0])}render(){return a`
      <div
        part="base"
        class="menu"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @keyup=${this.handleKeyUp}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};function C(e){return e.split("-")[0]}function L(e){return e.split("-")[1]}function E(e){return["top","bottom"].includes(C(e))?"x":"y"}function S(e){return"y"===e?"height":"width"}function R(e,t,n){let{reference:i,floating:o}=e;const s=i.x+i.width/2-o.width/2,r=i.y+i.height/2-o.height/2,l=E(t),a=S(l),c=i[a]/2-o[a]/2,d="x"===l;let h;switch(C(t)){case"top":h={x:s,y:i.y-o.height};break;case"bottom":h={x:s,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:r};break;case"left":h={x:i.x-o.width,y:r};break;default:h={x:i.x,y:i.y}}switch(L(t)){case"start":h[l]-=c*(n&&d?-1:1);break;case"end":h[l]+=c*(n&&d?-1:1)}return h}D.styles=_,n([i(".menu")],D.prototype,"menu",2),n([i("slot")],D.prototype,"defaultSlot",2),D=n([o("sl-menu")],D);function P(e){return h(c({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}async function O(e,t){var n;void 0===t&&(t={});const{x:i,y:o,platform:s,rects:r,elements:l,strategy:a}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:f=!1,padding:m=0}=t,g=function(e){return"number"!=typeof e?c({top:0,right:0,bottom:0,left:0},e):{top:e,right:e,bottom:e,left:e}}(m),y=l[f?"floating"===p?"reference":"floating":p],v=P(await s.getClippingRect({element:null==(n=await(null==s.isElement?void 0:s.isElement(y)))||n?y:y.contextElement||await(null==s.getDocumentElement?void 0:s.getDocumentElement(l.floating)),boundary:d,rootBoundary:u,strategy:a})),w=P(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===p?h(c({},r.floating),{x:i,y:o}):r.reference,offsetParent:await(null==s.getOffsetParent?void 0:s.getOffsetParent(l.floating)),strategy:a}):r[p]);return{top:v.top-w.top+g.top,bottom:w.bottom-v.bottom+g.bottom,left:v.left-w.left+g.left,right:w.right-v.right+g.right}}var I=Math.min,M=Math.max;function H(e,t,n){return M(e,I(t,n))}var $={left:"right",right:"left",bottom:"top",top:"bottom"};function W(e){return e.replace(/left|right|bottom|top/g,(e=>$[e]))}var N={start:"end",end:"start"};function z(e){return e.replace(/start|end/g,(e=>N[e]))}["top","right","bottom","left"].reduce(((e,t)=>e.concat(t,t+"-start",t+"-end")),[]);var K=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:i,middlewareData:o,rects:s,initialPlacement:r,platform:l,elements:a}=t,c=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",flipAlignment:m=!0}=c,g=d(c,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),y=C(i),v=[r,...p||(y!==r&&m?function(e){const t=W(e);return[z(e),t,z(t)]}(r):[W(r)])],w=await O(t,g),b=[];let x=(null==(n=o.flip)?void 0:n.overflows)||[];if(h&&b.push(w[y]),u){const{main:e,cross:t}=function(e,t,n){void 0===n&&(n=!1);const i=L(e),o=E(e),s=S(o);let r="x"===o?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[s]>t.floating[s]&&(r=W(r)),{main:r,cross:W(r)}}(i,s,await(null==l.isRTL?void 0:l.isRTL(a.floating)));b.push(w[e],w[t])}if(x=[...x,{placement:i,overflows:b}],!b.every((e=>e<=0))){var k,T;const e=(null!=(k=null==(T=o.flip)?void 0:T.index)?k:0)+1,t=v[e];if(t)return{data:{index:e,overflows:x},reset:{placement:t}};let n="bottom";switch(f){case"bestFit":{var A;const e=null==(A=x.map((e=>[e,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:A[0].placement;e&&(n=e);break}case"initialPlacement":n=r}if(i!==n)return{reset:{placement:n}}}return{}}}};function U(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function B(e){if(null==e)return window;if(!U(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function j(e){return B(e).getComputedStyle(e)}function V(e){return U(e)?"":e?(e.nodeName||"").toLowerCase():""}function F(){const e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((e=>e.brand+"/"+e.version)).join(" "):navigator.userAgent}function q(e){return e instanceof B(e).HTMLElement}function Y(e){return e instanceof B(e).Element}function X(e){return"undefined"!=typeof ShadowRoot&&(e instanceof B(e).ShadowRoot||e instanceof ShadowRoot)}function J(e){const{overflow:t,overflowX:n,overflowY:i}=j(e);return/auto|scroll|overlay|hidden/.test(t+i+n)}function G(e){return["table","td","th"].includes(V(e))}function Q(e){const t=/firefox/i.test(F()),n=j(e);return"none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||["transform","perspective"].includes(n.willChange)||t&&"filter"===n.willChange||t&&!!n.filter&&"none"!==n.filter}function Z(){return!/^((?!chrome|android).)*safari/i.test(F())}var ee=Math.min,te=Math.max,ne=Math.round;function ie(e,t,n){var i,o,s,r;void 0===t&&(t=!1),void 0===n&&(n=!1);const l=e.getBoundingClientRect();let a=1,c=1;t&&q(e)&&(a=e.offsetWidth>0&&ne(l.width)/e.offsetWidth||1,c=e.offsetHeight>0&&ne(l.height)/e.offsetHeight||1);const d=Y(e)?B(e):window,h=!Z()&&n,u=(l.left+(h&&null!=(i=null==(o=d.visualViewport)?void 0:o.offsetLeft)?i:0))/a,p=(l.top+(h&&null!=(s=null==(r=d.visualViewport)?void 0:r.offsetTop)?s:0))/c,f=l.width/a,m=l.height/c;return{width:f,height:m,top:p,right:u+f,bottom:p+m,left:u,x:u,y:p}}function oe(e){return(t=e,(t instanceof B(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function se(e){return Y(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function re(e){return ie(oe(e)).left+se(e).scrollLeft}function le(e,t,n){const i=q(t),o=oe(t),s=ie(e,i&&function(e){const t=ie(e);return ne(t.width)!==e.offsetWidth||ne(t.height)!==e.offsetHeight}(t),"fixed"===n);let r={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(i||!i&&"fixed"!==n)if(("body"!==V(t)||J(o))&&(r=se(t)),q(t)){const e=ie(t,!0);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else o&&(l.x=re(o));return{x:s.left+r.scrollLeft-l.x,y:s.top+r.scrollTop-l.y,width:s.width,height:s.height}}function ae(e){return"html"===V(e)?e:e.assignedSlot||e.parentNode||(X(e)?e.host:null)||oe(e)}function ce(e){return q(e)&&"fixed"!==getComputedStyle(e).position?e.offsetParent:null}function de(e){const t=B(e);let n=ce(e);for(;n&&G(n)&&"static"===getComputedStyle(n).position;)n=ce(n);return n&&("html"===V(n)||"body"===V(n)&&"static"===getComputedStyle(n).position&&!Q(n))?t:n||function(e){let t=ae(e);for(X(t)&&(t=t.host);q(t)&&!["html","body"].includes(V(t));){if(Q(t))return t;t=t.parentNode}return null}(e)||t}function he(e){if(q(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=ie(e);return{width:t.width,height:t.height}}function ue(e){const t=ae(e);return["html","body","#document"].includes(V(t))?e.ownerDocument.body:q(t)&&J(t)?t:ue(t)}function pe(e,t){var n;void 0===t&&(t=[]);const i=ue(e),o=i===(null==(n=e.ownerDocument)?void 0:n.body),s=B(i),r=o?[s].concat(s.visualViewport||[],J(i)?i:[]):i,l=t.concat(r);return o?l:l.concat(pe(r))}function fe(e,t,n){return"viewport"===t?P(function(e,t){const n=B(e),i=oe(e),o=n.visualViewport;let s=i.clientWidth,r=i.clientHeight,l=0,a=0;if(o){s=o.width,r=o.height;const e=Z();(e||!e&&"fixed"===t)&&(l=o.offsetLeft,a=o.offsetTop)}return{width:s,height:r,x:l,y:a}}(e,n)):Y(t)?function(e,t){const n=ie(e,!1,"fixed"===t),i=n.top+e.clientTop,o=n.left+e.clientLeft;return{top:i,left:o,x:o,y:i,right:o+e.clientWidth,bottom:i+e.clientHeight,width:e.clientWidth,height:e.clientHeight}}(t,n):P(function(e){var t;const n=oe(e),i=se(e),o=null==(t=e.ownerDocument)?void 0:t.body,s=te(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),r=te(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let l=-i.scrollLeft+re(e);const a=-i.scrollTop;return"rtl"===j(o||n).direction&&(l+=te(n.clientWidth,o?o.clientWidth:0)-s),{width:s,height:r,x:l,y:a}}(oe(e)))}function me(e){const t=pe(e),n=["absolute","fixed"].includes(j(e).position)&&q(e)?de(e):e;return Y(n)?t.filter((e=>Y(e)&&function(e,t){const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&X(n)){let n=t;do{if(n&&e===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(e,n)&&"body"!==V(e))):[]}var ge={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:i,strategy:o}=e;const s=[..."clippingAncestors"===n?me(t):[].concat(n),i],r=s[0],l=s.reduce(((e,n)=>{const i=fe(t,n,o);return e.top=te(i.top,e.top),e.right=ee(i.right,e.right),e.bottom=ee(i.bottom,e.bottom),e.left=te(i.left,e.left),e}),fe(t,r,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:i}=e;const o=q(n),s=oe(n);if(n===s)return t;let r={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if((o||!o&&"fixed"!==i)&&(("body"!==V(n)||J(s))&&(r=se(n)),q(n))){const e=ie(n,!0);l.x=e.x+n.clientLeft,l.y=e.y+n.clientTop}return h(c({},t),{x:t.x-r.scrollLeft+l.x,y:t.y-r.scrollTop+l.y})},isElement:Y,getDimensions:he,getOffsetParent:de,getDocumentElement:oe,getElementRects:e=>{let{reference:t,floating:n,strategy:i}=e;return{reference:le(t,de(n),i),floating:h(c({},he(n)),{x:0,y:0})}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>"rtl"===j(e).direction};var ye=(e,t,n)=>(async(e,t,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:s=[],platform:r}=n,l=await(null==r.isRTL?void 0:r.isRTL(t));let a=await r.getElementRects({reference:e,floating:t,strategy:o}),{x:d,y:u}=R(a,i,l),p=i,f={};for(let n=0;n<s.length;n++){const{name:m,fn:g}=s[n],{x:y,y:v,data:w,reset:b}=await g({x:d,y:u,initialPlacement:i,placement:p,strategy:o,middlewareData:f,rects:a,platform:r,elements:{reference:e,floating:t}});d=null!=y?y:d,u=null!=v?v:u,f=h(c({},f),{[m]:c(c({},f[m]),w)}),b&&("object"==typeof b&&(b.placement&&(p=b.placement),b.rects&&(a=!0===b.rects?await r.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:d,y:u}=R(a,p,l))),n=-1)}return{x:d,y:u,placement:p,strategy:o,middlewareData:f}})(e,t,c({platform:ge},n)),ve=e`
  ${t}

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
`,we=class extends s{constructor(){super(...arguments),this.localize=new w(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}async firstUpdated(){this.panel.hidden=!this.open,this.open&&(await this.updateComplete,this.addOpenListeners(),this.startPositioner())}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide(),this.stopPositioner()}focusOnTrigger(){const e=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];"function"==typeof(null==e?void 0:e.focus)&&e.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).find((e=>"sl-menu"===e.tagName.toLowerCase()))}handleDocumentKeyDown(e){var t;if("Escape"===e.key)return this.hide(),void this.focusOnTrigger();if("Tab"===e.key){if(this.open&&"sl-menu-item"===(null==(t=document.activeElement)?void 0:t.tagName.toLowerCase()))return e.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var e,t,n;const i=(null==(e=this.containingElement)?void 0:e.getRootNode())instanceof ShadowRoot?null==(n=null==(t=document.activeElement)?void 0:t.shadowRoot)?void 0:n.activeElement:document.activeElement;this.containingElement&&(null==i?void 0:i.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}}handleDocumentMouseDown(e){const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(e){const t=e.target;b(t,this.panel)}handlePanelSelect(e){const t=e.target;this.stayOpenOnSelect||"sl-menu"!==t.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}handlePopoverOptionsChange(){this.updatePositioner()}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(e){if("Escape"===e.key)return this.focusOnTrigger(),void this.hide();if([" ","Enter"].includes(e.key))return e.preventDefault(),void this.handleTriggerClick();const t=this.getMenu();if(t){const n=t.defaultSlot.assignedElements({flatten:!0}),i=n[0],o=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),n.length>0&&requestAnimationFrame((()=>{"ArrowDown"!==e.key&&"Home"!==e.key||(t.setCurrentItem(i),i.focus()),"ArrowUp"!==e.key&&"End"!==e.key||(t.setCurrentItem(o),o.focus())})));const s=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!s.includes(e.key)&&t.typeToSelect(e)}}handleTriggerKeyUp(e){" "===e.key&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find((e=>x(e).start));let t;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":t=e.button;break;default:t=e}t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,f(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,f(this,"sl-after-hide")}reposition(){this.updatePositioner()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){l(this,"sl-show"),this.addOpenListeners(),await k(this),this.startPositioner(),this.panel.hidden=!1;const{keyframes:e,options:t}=T(this,"dropdown.show",{dir:this.localize.dir()});await A(this.panel,e,t),l(this,"sl-after-show")}else{l(this,"sl-hide"),this.removeOpenListeners(),await k(this);const{keyframes:e,options:t}=T(this,"dropdown.hide",{dir:this.localize.dir()});await A(this.panel,e,t),this.panel.hidden=!0,this.stopPositioner(),l(this,"sl-after-hide")}}startPositioner(){this.stopPositioner(),this.updatePositioner(),this.positionerCleanup=function(e,t,n,i){void 0===i&&(i={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:r=!0,animationFrame:l=!1}=i,a=o&&!l,c=s&&!l,d=a||c?[...Y(e)?pe(e):[],...pe(t)]:[];d.forEach((e=>{a&&e.addEventListener("scroll",n,{passive:!0}),c&&e.addEventListener("resize",n)}));let h,u=null;r&&(u=new ResizeObserver(n),Y(e)&&!l&&u.observe(e),u.observe(t));let p=l?ie(e):null;return l&&function t(){const i=ie(e);!p||i.x===p.x&&i.y===p.y&&i.width===p.width&&i.height===p.height||n(),p=i,h=requestAnimationFrame(t)}(),r||n(),()=>{var e;d.forEach((e=>{a&&e.removeEventListener("scroll",n),c&&e.removeEventListener("resize",n)})),null==(e=u)||e.disconnect(),u=null,l&&cancelAnimationFrame(h)}}(this.trigger,this.positioner,this.updatePositioner.bind(this))}updatePositioner(){var e,t,n;this.open&&this.trigger&&this.positioner&&ye(this.trigger,this.positioner,{placement:this.placement,middleware:[(n={mainAxis:this.distance,crossAxis:this.skidding},void 0===n&&(n=0),{name:"offset",options:n,async fn(e){const{x:t,y:i}=e,o=await async function(e,t){const{placement:n,platform:i,elements:o}=e,s=await(null==i.isRTL?void 0:i.isRTL(o.floating)),r=C(n),l=L(n),a="x"===E(n),d=["left","top"].includes(r)?-1:1,h=s&&a?-1:1,u="function"==typeof t?t(e):t;let{mainAxis:p,crossAxis:f,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:c({mainAxis:0,crossAxis:0,alignmentAxis:null},u);return l&&"number"==typeof m&&(f="end"===l?-1*m:m),a?{x:f*h,y:p*d}:{x:p*d,y:f*h}}(e,n);return{x:t+o.x,y:i+o.y,data:o}}}),K(),(void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:o}=e,s=t,{mainAxis:r=!0,crossAxis:l=!1,limiter:a={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}}}=s,u=d(s,["mainAxis","crossAxis","limiter"]),p={x:n,y:i},f=await O(e,u),m=E(C(o)),g="x"===m?"y":"x";let y=p[m],v=p[g];if(r){const e="y"===m?"bottom":"right";y=H(y+f["y"===m?"top":"left"],y,y-f[e])}if(l){const e="y"===g?"bottom":"right";v=H(v+f["y"===g?"top":"left"],v,v-f[e])}const w=a.fn(h(c({},e),{[m]:y,[g]:v}));return h(c({},w),{data:{x:w.x-n,y:w.y-i}})}}),(e={apply:({availableWidth:e,availableHeight:t})=>{Object.assign(this.panel.style,{maxWidth:`${e}px`,maxHeight:`${t}px`})}},void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:i,platform:o,elements:s}=t,r=e,{apply:l}=r,a=d(r,["apply"]),h=await O(t,a),u=C(n),p=L(n);let f,m;"top"===u||"bottom"===u?(f=u,m=p===(await(null==o.isRTL?void 0:o.isRTL(s.floating))?"start":"end")?"left":"right"):(m=u,f="end"===p?"top":"bottom");const g=M(h.left,0),y=M(h.right,0),v=M(h.top,0),w=M(h.bottom,0),b={availableHeight:i.floating.height-(["left","right"].includes(n)?2*(0!==v||0!==w?v+w:M(h.top,h.bottom)):h[f]),availableWidth:i.floating.width-(["top","bottom"].includes(n)?2*(0!==g||0!==y?g+y:M(h.left,h.right)):h[m])},x=await o.getDimensions(s.floating);null==l||l(c(c({},t),b));const k=await o.getDimensions(s.floating);return x.width!==k.width||x.height!==k.height?{reset:{rects:!0}}:{}}})],strategy:this.hoist?"fixed":"absolute"}).then((({x:e,y:t,placement:n})=>{this.positioner.setAttribute("data-placement",n),Object.assign(this.positioner.style,{position:this.hoist?"fixed":"absolute",left:`${e}px`,top:`${t}px`})}))}stopPositioner(){this.positionerCleanup&&(this.positionerCleanup(),this.positionerCleanup=void 0,this.positioner.removeAttribute("data-placement"))}render(){return a`
      <div
        part="base"
        id="dropdown"
        class=${m({dropdown:!0,"dropdown--open":this.open})}
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
    `}};we.styles=ve,n([i(".dropdown__trigger")],we.prototype,"trigger",2),n([i(".dropdown__panel")],we.prototype,"panel",2),n([i(".dropdown__positioner")],we.prototype,"positioner",2),n([u({type:Boolean,reflect:!0})],we.prototype,"open",2),n([u({reflect:!0})],we.prototype,"placement",2),n([u({type:Boolean,reflect:!0})],we.prototype,"disabled",2),n([u({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],we.prototype,"stayOpenOnSelect",2),n([u({attribute:!1})],we.prototype,"containingElement",2),n([u({type:Number})],we.prototype,"distance",2),n([u({type:Number})],we.prototype,"skidding",2),n([u({type:Boolean})],we.prototype,"hoist",2),n([p("distance"),p("hoist"),p("placement"),p("skidding")],we.prototype,"handlePopoverOptionsChange",1),n([p("open",{waitUntilFirstUpdate:!0})],we.prototype,"handleOpenChange",1),we=n([o("sl-dropdown")],we),v("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}}),v("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});var be=e`
  ${t}

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
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(${g}:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
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
`,xe=class extends s{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}getTextLabel(){return y(this.defaultSlot)}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleDefaultSlotChange(){const e=this.getTextLabel();void 0!==this.cachedTextLabel?e!==this.cachedTextLabel&&(this.cachedTextLabel=e,l(this,"sl-label-change")):this.cachedTextLabel=e}render(){return a`
      <div
        part="base"
        class=${m({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check-lg" library="system" aria-hidden="true"></sl-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};xe.styles=be,n([i("slot:not([name])")],xe.prototype,"defaultSlot",2),n([i(".menu-item")],xe.prototype,"menuItem",2),n([u({type:Boolean,reflect:!0})],xe.prototype,"checked",2),n([u()],xe.prototype,"value",2),n([u({type:Boolean,reflect:!0})],xe.prototype,"disabled",2),n([p("checked")],xe.prototype,"handleCheckedChange",1),n([p("disabled")],xe.prototype,"handleDisabledChange",1),xe=n([o("sl-menu-item")],xe);
