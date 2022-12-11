import{f as t,g as e,_ as i,h as n,k as o,l as s,y as a,j as r,w as l,o as c,K as h,G as d,H as p}from"./main2.js";import{c as u,s as f,L as m,d as g,e as y,w,a as b,g as v,b as x}from"./chunk.G5HV7L2U.js";var k=t`
  ${e}

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
`,E=class extends s{constructor(){super(...arguments),this.typeToSelectString=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}getAllItems(t={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((e=>"menuitem"===e.getAttribute("role")&&!(!t.includeDisabled&&e.disabled)))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find((t=>"0"===t.getAttribute("tabindex")))}setCurrentItem(t){const e=this.getAllItems({includeDisabled:!1}),i=t.disabled?e[0]:t;e.forEach((t=>{t.setAttribute("tabindex",t===i?"0":"-1")}))}typeToSelect(t){var e;const i=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout((()=>this.typeToSelectString=""),1e3),"Backspace"===t.key?t.metaKey||t.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const t of i){const i=null==(e=t.shadowRoot)?void 0:e.querySelector("slot:not([name])");if(u(i).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(t),t.focus();break}}}handleClick(t){const e=t.target.closest("sl-menu-item");!1===(null==e?void 0:e.disabled)&&this.emit("sl-select",{detail:{item:e}})}handleKeyDown(t){if("Enter"===t.key){const e=this.getCurrentItem();t.preventDefault(),null==e||e.click()}if(" "===t.key&&t.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems({includeDisabled:!1}),i=this.getCurrentItem();let n=i?e.indexOf(i):0;if(e.length>0)return t.preventDefault(),"ArrowDown"===t.key?n++:"ArrowUp"===t.key?n--:"Home"===t.key?n=0:"End"===t.key&&(n=e.length-1),n<0&&(n=e.length-1),n>e.length-1&&(n=0),this.setCurrentItem(e[n]),void e[n].focus()}this.typeToSelect(t)}handleMouseDown(t){const e=t.target;"menuitem"===e.getAttribute("role")&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems({includeDisabled:!1});t.length>0&&this.setCurrentItem(t[0])}render(){return a`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};E.styles=k,i([n("slot")],E.prototype,"defaultSlot",2),E=i([o("sl-menu")],E);var A=t`
  ${e}

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
    color: var(--color);
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
`,T=class extends s{constructor(){super(...arguments),this.localize=new m(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find((t=>"sl-menu"===t.tagName.toLowerCase()))}handleKeyDown(t){this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())}handleDocumentKeyDown(t){var e;if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var t,e,i;const n=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?null==(i=null==(e=document.activeElement)?void 0:e.shadowRoot)?void 0:i.activeElement:document.activeElement;this.containingElement&&(null==n?void 0:n.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}}handleDocumentMouseDown(t){const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(t){const e=t.target;g(e,this.panel)}handlePanelSelect(t){const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(t){if("Escape"===t.key&&this.open)return t.stopPropagation(),this.focusOnTrigger(),void this.hide();if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const i=e.defaultSlot.assignedElements({flatten:!0}),n=i[0],o=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||this.show(),i.length>0&&requestAnimationFrame((()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(n),n.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(o),o.focus())})));const s=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!s.includes(t.key)&&e.typeToSelect(t)}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find((t=>y(t).start));let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,w(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,w(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await b(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=v(this,"dropdown.show",{dir:this.localize.dir()});await x(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await b(this);const{keyframes:t,options:e}=v(this,"dropdown.hide",{dir:this.localize.dir()});await x(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return a`
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
        class=${c({dropdown:!0,"dropdown--open":this.open})}
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
    `}};T.styles=A,i([n(".dropdown")],T.prototype,"popup",2),i([n(".dropdown__trigger")],T.prototype,"trigger",2),i([n(".dropdown__panel")],T.prototype,"panel",2),i([r({type:Boolean,reflect:!0})],T.prototype,"open",2),i([r({reflect:!0})],T.prototype,"placement",2),i([r({type:Boolean,reflect:!0})],T.prototype,"disabled",2),i([r({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],T.prototype,"stayOpenOnSelect",2),i([r({attribute:!1})],T.prototype,"containingElement",2),i([r({type:Number})],T.prototype,"distance",2),i([r({type:Number})],T.prototype,"skidding",2),i([r({type:Boolean})],T.prototype,"hoist",2),i([l("open",{waitUntilFirstUpdate:!0})],T.prototype,"handleOpenChange",1),T=i([o("sl-dropdown")],T),f("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),f("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var D=t`
  ${e}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;function S(t){return t.split("-")[0]}function C(t){return t.split("-")[1]}function L(t){return["top","bottom"].includes(S(t))?"x":"y"}function P(t){return"y"===t?"height":"width"}function z(t,e,i){let{reference:n,floating:o}=t;const s=n.x+n.width/2-o.width/2,a=n.y+n.height/2-o.height/2,r=L(e),l=P(r),c=n[l]/2-o[l]/2,h="x"===r;let d;switch(S(e)){case"top":d={x:s,y:n.y-o.height};break;case"bottom":d={x:s,y:n.y+n.height};break;case"right":d={x:n.x+n.width,y:a};break;case"left":d={x:n.x-o.width,y:a};break;default:d={x:n.x,y:n.y}}switch(C(e)){case"start":d[r]-=c*(i&&h?-1:1);break;case"end":d[r]+=c*(i&&h?-1:1)}return d}function _(t){return"number"!=typeof t?d({top:0,right:0,bottom:0,left:0},t):{top:t,right:t,bottom:t,left:t}}function R(t){return p(d({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}async function O(t,e){var i;void 0===e&&(e={});const{x:n,y:o,platform:s,rects:a,elements:r,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:f=!1,padding:m=0}=e,g=_(m),y=r[f?"floating"===u?"reference":"floating":u],w=R(await s.getClippingRect({element:null==(i=await(null==s.isElement?void 0:s.isElement(y)))||i?y:y.contextElement||await(null==s.getDocumentElement?void 0:s.getDocumentElement(r.floating)),boundary:c,rootBoundary:h,strategy:l})),b=R(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===u?p(d({},a.floating),{x:n,y:o}):a.reference,offsetParent:await(null==s.getOffsetParent?void 0:s.getOffsetParent(r.floating)),strategy:l}):a[u]);return{top:w.top-b.top+g.top,bottom:b.bottom-w.bottom+g.bottom,left:w.left-b.left+g.left,right:b.right-w.right+g.right}}var $=Math.min,I=Math.max;function B(t,e,i){return I(t,$(e,i))}var H={left:"right",right:"left",bottom:"top",top:"bottom"};function M(t){return t.replace(/left|right|bottom|top/g,(t=>H[t]))}var K={start:"end",end:"start"};function W(t){return t.replace(/start|end/g,(t=>K[t]))}["top","right","bottom","left"].reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]);var N=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var i;const{placement:n,middlewareData:o,rects:s,initialPlacement:a,platform:r,elements:l}=e,c=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",flipAlignment:m=!0}=c,g=h(c,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),y=S(n),w=[a,...u||(y!==a&&m?function(t){const e=M(t);return[W(t),e,W(e)]}(a):[M(a)])],b=await O(e,g),v=[];let x=(null==(i=o.flip)?void 0:i.overflows)||[];if(d&&v.push(b[y]),p){const{main:t,cross:e}=function(t,e,i){void 0===i&&(i=!1);const n=C(t),o=L(t),s=P(o);let a="x"===o?n===(i?"end":"start")?"right":"left":"start"===n?"bottom":"top";return e.reference[s]>e.floating[s]&&(a=M(a)),{main:a,cross:M(a)}}(n,s,await(null==r.isRTL?void 0:r.isRTL(l.floating)));v.push(b[t],b[e])}if(x=[...x,{placement:n,overflows:v}],!v.every((t=>t<=0))){var k,E;const t=(null!=(k=null==(E=o.flip)?void 0:E.index)?k:0)+1,e=w[t];if(e)return{data:{index:t,overflows:x},reset:{placement:e}};let i="bottom";switch(f){case"bestFit":{var A;const t=null==(A=x.map((t=>[t,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:A[0].placement;t&&(i=t);break}case"initialPlacement":i=a}if(n!==i)return{reset:{placement:i}}}return{}}}};var F=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:i,rects:n,platform:o,elements:s}=e,a=t,{apply:r=(()=>{})}=a,l=h(a,["apply"]),c=await O(e,l),p=S(i),u=C(i);let f,m;"top"===p||"bottom"===p?(f=p,m=u===(await(null==o.isRTL?void 0:o.isRTL(s.floating))?"start":"end")?"left":"right"):(m=p,f="end"===u?"top":"bottom");const g=I(c.left,0),y=I(c.right,0),w=I(c.top,0),b=I(c.bottom,0),v={availableHeight:n.floating.height-(["left","right"].includes(i)?2*(0!==w||0!==b?w+b:I(c.top,c.bottom)):c[f]),availableWidth:n.floating.width-(["top","bottom"].includes(i)?2*(0!==g||0!==y?g+y:I(c.left,c.right)):c[m])};await r(d(d({},e),v));const x=await o.getDimensions(s.floating);return n.floating.width!==x.width||n.floating.height!==x.height?{reset:{rects:!0}}:{}}}};function j(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function U(t){if(null==t)return window;if(!j(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function V(t){return U(t).getComputedStyle(t)}function q(t){return j(t)?"":t?(t.nodeName||"").toLowerCase():""}function G(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function X(t){return t instanceof U(t).HTMLElement}function Y(t){return t instanceof U(t).Element}function J(t){return"undefined"!=typeof ShadowRoot&&(t instanceof U(t).ShadowRoot||t instanceof ShadowRoot)}function Q(t){const{overflow:e,overflowX:i,overflowY:n,display:o}=V(t);return/auto|scroll|overlay|hidden/.test(e+n+i)&&!["inline","contents"].includes(o)}function Z(t){return["table","td","th"].includes(q(t))}function tt(t){const e=/firefox/i.test(G()),i=V(t),n=i.backdropFilter||i.WebkitBackdropFilter;return"none"!==i.transform||"none"!==i.perspective||!!n&&"none"!==n||e&&"filter"===i.willChange||e&&!!i.filter&&"none"!==i.filter||["transform","perspective"].some((t=>i.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=i.contain;return null!=e&&e.includes(t)}))}function et(){return!/^((?!chrome|android).)*safari/i.test(G())}function it(t){return["html","body","#document"].includes(q(t))}var nt=Math.min,ot=Math.max,st=Math.round;function at(t,e,i){var n,o,s,a;void 0===e&&(e=!1),void 0===i&&(i=!1);const r=t.getBoundingClientRect();let l=1,c=1;e&&X(t)&&(l=t.offsetWidth>0&&st(r.width)/t.offsetWidth||1,c=t.offsetHeight>0&&st(r.height)/t.offsetHeight||1);const h=Y(t)?U(t):window,d=!et()&&i,p=(r.left+(d&&null!=(n=null==(o=h.visualViewport)?void 0:o.offsetLeft)?n:0))/l,u=(r.top+(d&&null!=(s=null==(a=h.visualViewport)?void 0:a.offsetTop)?s:0))/c,f=r.width/l,m=r.height/c;return{width:f,height:m,top:u,right:p+f,bottom:u+m,left:p,x:p,y:u}}function rt(t){return(e=t,(e instanceof U(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function lt(t){return Y(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ct(t){return at(rt(t)).left+lt(t).scrollLeft}function ht(t,e,i){const n=X(e),o=rt(e),s=at(t,n&&function(t){const e=at(t);return st(e.width)!==t.offsetWidth||st(e.height)!==t.offsetHeight}(e),"fixed"===i);let a={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if(n||!n&&"fixed"!==i)if(("body"!==q(e)||Q(o))&&(a=lt(e)),X(e)){const t=at(e,!0);r.x=t.x+e.clientLeft,r.y=t.y+e.clientTop}else o&&(r.x=ct(o));return{x:s.left+a.scrollLeft-r.x,y:s.top+a.scrollTop-r.y,width:s.width,height:s.height}}function dt(t){if("html"===q(t))return t;const e=t.assignedSlot||t.parentNode||(J(t)?t.host:null)||rt(t);return J(e)?e.host:e}function pt(t){return X(t)&&"fixed"!==V(t).position?t.offsetParent:null}function ut(t){const e=U(t);let i=pt(t);for(;i&&Z(i)&&"static"===V(i).position;)i=pt(i);return i&&("html"===q(i)||"body"===q(i)&&"static"===V(i).position&&!tt(i))?e:i||function(t){let e=dt(t);for(;X(e)&&!it(e);){if(tt(e))return e;e=dt(e)}return null}(t)||e}function ft(t){const e=dt(t);return it(e)?t.ownerDocument.body:X(e)&&Q(e)?e:ft(e)}function mt(t,e){var i;void 0===e&&(e=[]);const n=ft(t),o=n===(null==(i=t.ownerDocument)?void 0:i.body),s=U(n),a=o?[s].concat(s.visualViewport||[],Q(n)?n:[]):n,r=e.concat(a);return o?r:r.concat(mt(a))}function gt(t,e,i){return"viewport"===e?R(function(t,e){const i=U(t),n=rt(t),o=i.visualViewport;let s=n.clientWidth,a=n.clientHeight,r=0,l=0;if(o){s=o.width,a=o.height;const t=et();(t||!t&&"fixed"===e)&&(r=o.offsetLeft,l=o.offsetTop)}return{width:s,height:a,x:r,y:l}}(t,i)):Y(e)?function(t,e){const i=at(t,!1,"fixed"===e),n=i.top+t.clientTop,o=i.left+t.clientLeft;return{top:n,left:o,x:o,y:n,right:o+t.clientWidth,bottom:n+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,i):R(function(t){var e;const i=rt(t),n=lt(t),o=null==(e=t.ownerDocument)?void 0:e.body,s=ot(i.scrollWidth,i.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=ot(i.scrollHeight,i.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let r=-n.scrollLeft+ct(t);const l=-n.scrollTop;return"rtl"===V(o||i).direction&&(r+=ot(i.clientWidth,o?o.clientWidth:0)-s),{width:s,height:a,x:r,y:l}}(rt(t)))}var yt={getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:n,strategy:o}=t;const s=[..."clippingAncestors"===i?function(t){let e=mt(t).filter((t=>Y(t)&&"body"!==q(t))),i=null;const n="fixed"===V(t).position;let o=n?dt(t):t;for(;Y(o)&&!it(o);){const t=V(o),s=tt(o);(n?s||i:s||"static"!==t.position||!i||!["absolute","fixed"].includes(i.position))?i=t:e=e.filter((t=>t!==o)),o=dt(o)}return e}(e):[].concat(i),n],a=s[0],r=s.reduce(((t,i)=>{const n=gt(e,i,o);return t.top=ot(n.top,t.top),t.right=nt(n.right,t.right),t.bottom=nt(n.bottom,t.bottom),t.left=ot(n.left,t.left),t}),gt(e,a,o));return{width:r.right-r.left,height:r.bottom-r.top,x:r.left,y:r.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:i,strategy:n}=t;const o=X(i),s=rt(i);if(i===s)return e;let a={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if((o||!o&&"fixed"!==n)&&(("body"!==q(i)||Q(s))&&(a=lt(i)),X(i))){const t=at(i,!0);r.x=t.x+i.clientLeft,r.y=t.y+i.clientTop}return p(d({},e),{x:e.x-a.scrollLeft+r.x,y:e.y-a.scrollTop+r.y})},isElement:Y,getDimensions:function(t){if(X(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=at(t);return{width:e.width,height:e.height}},getOffsetParent:ut,getDocumentElement:rt,async getElementRects(t){let{reference:e,floating:i,strategy:n}=t;const o=this.getOffsetParent||ut,s=this.getDimensions;return{reference:ht(e,await o(i),n),floating:d({x:0,y:0},await s(i))}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===V(t).direction};var wt=(t,e,i)=>(async(t,e,i)=>{const{placement:n="bottom",strategy:o="absolute",middleware:s=[],platform:a}=i,r=s.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(e));let c=await a.getElementRects({reference:t,floating:e,strategy:o}),{x:h,y:u}=z(c,n,l),f=n,m={},g=0;for(let i=0;i<r.length;i++){const{name:s,fn:y}=r[i],{x:w,y:b,data:v,reset:x}=await y({x:h,y:u,initialPlacement:n,placement:f,strategy:o,middlewareData:m,rects:c,platform:a,elements:{reference:t,floating:e}});h=null!=w?w:h,u=null!=b?b:u,m=p(d({},m),{[s]:d(d({},m[s]),v)}),x&&g<=50&&(g++,"object"==typeof x&&(x.placement&&(f=x.placement),x.rects&&(c=!0===x.rects?await a.getElementRects({reference:t,floating:e,strategy:o}):x.rects),({x:h,y:u}=z(c,f,l))),i=-1)}return{x:h,y:u,placement:f,strategy:o,middlewareData:m}})(t,e,d({platform:yt},i)),bt=class extends s{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof HTMLElement?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=function(t,e,i,n){void 0===n&&(n={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:a=!0,animationFrame:r=!1}=n,l=o&&!r,c=l||s?[...Y(t)?mt(t):t.contextElement?mt(t.contextElement):[],...mt(e)]:[];c.forEach((t=>{l&&t.addEventListener("scroll",i,{passive:!0}),s&&t.addEventListener("resize",i)}));let h,d=null;if(a){let n=!0;d=new ResizeObserver((()=>{n||i(),n=!1})),Y(t)&&!r&&d.observe(t),Y(t)||!t.contextElement||r||d.observe(t.contextElement),d.observe(e)}let p=r?at(t):null;return r&&function e(){const n=at(t);!p||n.x===p.x&&n.y===p.y&&n.width===p.width&&n.height===p.height||i(),p=n,h=requestAnimationFrame(e)}(),i(),()=>{var t;c.forEach((t=>{l&&t.removeEventListener("scroll",i),s&&t.removeEventListener("resize",i)})),null==(t=d)||t.disconnect(),d=null,r&&cancelAnimationFrame(h)}}(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>t()))):t()}))}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}reposition(){if(!this.active||!this.anchorEl)return;const t=[(e={mainAxis:this.distance,crossAxis:this.skidding},void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:i,y:n}=t,o=await async function(t,e){const{placement:i,platform:n,elements:o}=t,s=await(null==n.isRTL?void 0:n.isRTL(o.floating)),a=S(i),r=C(i),l="x"===L(i),c=["left","top"].includes(a)?-1:1,h=s&&l?-1:1,p="function"==typeof e?e(t):e;let{mainAxis:u,crossAxis:f,alignmentAxis:m}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:d({mainAxis:0,crossAxis:0,alignmentAxis:null},p);return r&&"number"==typeof m&&(f="end"===r?-1*m:m),l?{x:f*h,y:u*c}:{x:u*c,y:f*h}}(t,e);return{x:i+o.x,y:n+o.y,data:o}}})];var e,i,n;this.sync?t.push(F({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(N({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push((void 0===(i={boundary:this.shiftBoundary,padding:this.shiftPadding})&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:n,placement:o}=t,s=i,{mainAxis:a=!0,crossAxis:r=!1,limiter:l={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}}}=s,c=h(s,["mainAxis","crossAxis","limiter"]),u={x:e,y:n},f=await O(t,c),m=L(S(o)),g="x"===m?"y":"x";let y=u[m],w=u[g];if(a){const t="y"===m?"bottom":"right";y=B(y+f["y"===m?"top":"left"],y,y-f[t])}if(r){const t="y"===g?"bottom":"right";w=B(w+f["y"===g?"top":"left"],w,w-f[t])}const b=l.fn(p(d({},t),{[m]:y,[g]:w}));return p(d({},b),{data:{x:b.x-e,y:b.y-n}})}})),this.autoSize?t.push(F({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push({name:"arrow",options:n={element:this.arrowEl,padding:this.arrowPadding},async fn(t){const{element:e,padding:i=0}=null!=n?n:{},{x:o,y:s,placement:a,rects:r,platform:l}=t;if(null==e)return{};const c=_(i),h={x:o,y:s},d=L(a),p=C(a),u=P(d),f=await l.getDimensions(e),m="y"===d?"top":"left",g="y"===d?"bottom":"right",y=r.reference[u]+r.reference[d]-h[d]-r.floating[u],w=h[d]-r.reference[d],b=await(null==l.getOffsetParent?void 0:l.getOffsetParent(e));let v=b?"y"===d?b.clientHeight||0:b.clientWidth||0:0;0===v&&(v=r.floating[u]);const x=y/2-w/2,k=c[m],E=v-f[u]-c[g],A=v/2-f[u]/2+x,T=B(k,A,E),D=("start"===p?c[m]:c[g])>0&&A!==T&&r.reference[u]<=r.floating[u];return{[d]:h[d]-(D?A<k?k-A:E-A:0),data:{[d]:T,centerOffset:A-T}}}}),wt(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy}).then((({x:t,y:e,middlewareData:i,placement:n})=>{const o="rtl"===getComputedStyle(this).direction,s={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=i.arrow.x,e=i.arrow.y;let n="",a="",r="",l="";if("start"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";n="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=o?i:"",l=o?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=o?"":i,l=o?i:"",r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",n="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?`${t}px`:"",n="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:n,right:a,bottom:r,left:l,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}})),this.emit("sl-reposition")}render(){return a`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${c({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?a`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};bt.styles=D,i([n(".popup")],bt.prototype,"popup",2),i([n(".popup__arrow")],bt.prototype,"arrowEl",2),i([r()],bt.prototype,"anchor",2),i([r({type:Boolean,reflect:!0})],bt.prototype,"active",2),i([r({reflect:!0})],bt.prototype,"placement",2),i([r({reflect:!0})],bt.prototype,"strategy",2),i([r({type:Number})],bt.prototype,"distance",2),i([r({type:Number})],bt.prototype,"skidding",2),i([r({type:Boolean})],bt.prototype,"arrow",2),i([r({attribute:"arrow-placement"})],bt.prototype,"arrowPlacement",2),i([r({attribute:"arrow-padding",type:Number})],bt.prototype,"arrowPadding",2),i([r({type:Boolean})],bt.prototype,"flip",2),i([r({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map((t=>t.trim())).filter((t=>""!==t)),toAttribute:t=>t.join(" ")}})],bt.prototype,"flipFallbackPlacements",2),i([r({attribute:"flip-fallback-strategy"})],bt.prototype,"flipFallbackStrategy",2),i([r({type:Object})],bt.prototype,"flipBoundary",2),i([r({attribute:"flip-padding",type:Number})],bt.prototype,"flipPadding",2),i([r({type:Boolean})],bt.prototype,"shift",2),i([r({type:Object})],bt.prototype,"shiftBoundary",2),i([r({attribute:"shift-padding",type:Number})],bt.prototype,"shiftPadding",2),i([r({attribute:"auto-size"})],bt.prototype,"autoSize",2),i([r()],bt.prototype,"sync",2),i([r({type:Object})],bt.prototype,"autoSizeBoundary",2),i([r({attribute:"auto-size-padding",type:Number})],bt.prototype,"autoSizePadding",2),bt=i([o("sl-popup")],bt);var vt=t`
  ${e}

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
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(:focus-visible:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
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

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,xt=class extends s{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}getTextLabel(){return u(this.defaultSlot)}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleDefaultSlotChange(){const t=this.getTextLabel();void 0!==this.cachedTextLabel?t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("sl-label-change")):this.cachedTextLabel=t}render(){return a`
      <div
        part="base"
        class=${c({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};xt.styles=vt,i([n("slot:not([name])")],xt.prototype,"defaultSlot",2),i([n(".menu-item")],xt.prototype,"menuItem",2),i([r({type:Boolean,reflect:!0})],xt.prototype,"checked",2),i([r()],xt.prototype,"value",2),i([r({type:Boolean,reflect:!0})],xt.prototype,"disabled",2),i([l("checked")],xt.prototype,"handleCheckedChange",1),i([l("disabled")],xt.prototype,"handleDisabledChange",1),xt=i([o("sl-menu-item")],xt);
