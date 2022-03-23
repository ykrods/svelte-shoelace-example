import{J as t,I as e,H as n,r as i,f as o,_ as s,g as r,h as a,w as l,j as c,k as d,l as h,m as p,$ as u,o as f,G as m}from"./main2.js";import{s as g,d as y,e as w,a as v,g as b,b as x}from"./chunk.FTWX6OPR.js";function _(t){return t.split("-")[0]}function k(t){return t.split("-")[1]}function E(t){return["top","bottom"].includes(_(t))?"x":"y"}function T(t){return"y"===t?"height":"width"}function A(t,e,n){let{reference:i,floating:o}=t;const s=i.x+i.width/2-o.width/2,r=i.y+i.height/2-o.height/2,a=E(e),l=T(a),c=i[l]/2-o[l]/2,d="x"===a;let h;switch(_(e)){case"top":h={x:s,y:i.y-o.height};break;case"bottom":h={x:s,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:r};break;case"left":h={x:i.x-o.width,y:r};break;default:h={x:i.x,y:i.y}}switch(k(e)){case"start":h[a]-=c*(n&&d?-1:1);break;case"end":h[a]+=c*(n&&d?-1:1)}return h}function C(t){return"number"!=typeof t?function(t){return n({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function D(t){return e(n({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}async function L(t,i){var o;void 0===i&&(i={});const{x:s,y:r,platform:a,rects:l,elements:c,strategy:d}=t,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:f=!1,padding:m=0}=i,g=C(m),y=c[f?"floating"===u?"reference":"floating":u],w=D(await a.getClippingRect({element:null==(o=await(null==a.isElement?void 0:a.isElement(y)))||o?y:y.contextElement||await(null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:p})),v=D(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===u?e(n({},l.floating),{x:s,y:r}):l.reference,offsetParent:await(null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),strategy:d}):l[u]);return{top:w.top-v.top+g.top,bottom:v.bottom-w.bottom+g.bottom,left:w.left-v.left+g.left,right:v.right-w.right+g.right}}var R=Math.min,P=Math.max;function S(t,e,n){return P(t,R(e,n))}var O={left:"right",right:"left",bottom:"top",top:"bottom"};function M(t){return t.replace(/left|right|bottom|top/g,(t=>O[t]))}var W={start:"end",end:"start"};function H(t){return t.replace(/start|end/g,(t=>W[t]))}var N=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(n){var i;const{placement:o,middlewareData:s,rects:r,initialPlacement:a,platform:l,elements:c}=n,d=e,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",flipAlignment:m=!0}=d,g=t(d,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),y=_(o),w=u||(y===a||!m?[M(a)]:function(t){const e=M(t);return[H(t),e,H(e)]}(a)),v=[a,...w],b=await L(n,g),x=[];let A=(null==(i=s.flip)?void 0:i.overflows)||[];if(h&&x.push(b[y]),p){const{main:t,cross:e}=function(t,e,n){void 0===n&&(n=!1);const i=k(t),o=E(t),s=T(o);let r="x"===o?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=M(r)),{main:r,cross:M(r)}}(o,r,await(null==l.isRTL?void 0:l.isRTL(c.floating)));x.push(b[t],b[e])}if(A=[...A,{placement:o,overflows:x}],!x.every((t=>t<=0))){var C,D;const t=(null!=(C=null==(D=s.flip)?void 0:D.index)?C:0)+1,e=v[t];if(e)return{data:{index:t,overflows:A},reset:{skip:!1,placement:e}};let n="bottom";switch(f){case"bestFit":{var R;const t=null==(R=A.slice().sort(((t,e)=>t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)-e.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)))[0])?void 0:R.placement;t&&(n=t);break}case"initialPlacement":n=a}return{reset:{placement:n}}}return{}}}};var $=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(i){const{x:o,y:s,placement:r,rects:a,platform:l,elements:c}=i,d=function(t,i,o,s){void 0===s&&(s=!1);const r=_(t),a=k(t),l="x"===E(t),c=["left","top"].includes(r)?-1:1;let d=1;"end"===a&&(d=-1),s&&l&&(d*=-1);const h="function"==typeof o?o(e(n({},i),{placement:t})):o,{mainAxis:p,crossAxis:u}="number"==typeof h?{mainAxis:h,crossAxis:0}:n({mainAxis:0,crossAxis:0},h);return l?{x:u*d,y:p*c}:{x:p*c,y:u*d}}(r,a,t,await(null==l.isRTL?void 0:l.isRTL(c.floating)));return{x:o+d.x,y:s+d.y,data:d}}}};var z=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(i){const{placement:o,rects:s,platform:r,elements:a}=i,l=e,{apply:c}=l,d=t(l,["apply"]),h=await L(i,d),p=_(o),u=k(o);let f,m;"top"===p||"bottom"===p?(f=p,m=u===(await(null==r.isRTL?void 0:r.isRTL(a.floating))?"start":"end")?"left":"right"):(m=p,f="end"===u?"top":"bottom");const g=P(h.left,0),y=P(h.right,0),w=P(h.top,0),v=P(h.bottom,0),b={height:s.floating.height-(["left","right"].includes(o)?2*(0!==w||0!==v?w+v:P(h.top,h.bottom)):h[f]),width:s.floating.width-(["top","bottom"].includes(o)?2*(0!==g||0!==y?g+y:P(h.left,h.right)):h[m])};return null==c||c(n(n({},b),s)),{reset:{rects:!0}}}}};function B(t){return"[object Window]"===(null==t?void 0:t.toString())}function I(t){if(null==t)return window;if(!B(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function K(t){return I(t).getComputedStyle(t)}function j(t){return B(t)?"":t?(t.nodeName||"").toLowerCase():""}function F(t){return t instanceof I(t).HTMLElement}function U(t){return t instanceof I(t).Element}function V(t){return t instanceof I(t).ShadowRoot||t instanceof ShadowRoot}function q(t){const{overflow:e,overflowX:n,overflowY:i}=K(t);return/auto|scroll|overlay|hidden/.test(e+i+n)}function X(t){return["table","td","th"].includes(j(t))}function Y(t){const e=navigator.userAgent.toLowerCase().includes("firefox"),n=K(t);return"none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||["transform","perspective"].includes(n.willChange)||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter}var G=Math.min,J=Math.max,Q=Math.round;function Z(t,e){void 0===e&&(e=!1);const n=t.getBoundingClientRect();let i=1,o=1;return e&&F(t)&&(i=t.offsetWidth>0&&Q(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Q(n.height)/t.offsetHeight||1),{width:n.width/i,height:n.height/o,top:n.top/o,right:n.right/i,bottom:n.bottom/o,left:n.left/i,x:n.left/i,y:n.top/o}}function tt(t){return(e=t,(e instanceof I(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function et(t){return B(t)?{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}:{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function nt(t){return Z(tt(t)).left+et(t).scrollLeft}function it(t,e,n){const i=F(e),o=tt(e),s=Z(t,i&&function(t){const e=Z(t);return Q(e.width)!==t.offsetWidth||Q(e.height)!==t.offsetHeight}(e));let r={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(i||!i&&"fixed"!==n)if(("body"!==j(e)||q(o))&&(r=et(e)),F(e)){const t=Z(e,!0);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else o&&(a.x=nt(o));return{x:s.left+r.scrollLeft-a.x,y:s.top+r.scrollTop-a.y,width:s.width,height:s.height}}function ot(t){return"html"===j(t)?t:t.assignedSlot||t.parentNode||(V(t)?t.host:null)||tt(t)}function st(t){return F(t)&&"fixed"!==getComputedStyle(t).position?t.offsetParent:null}function rt(t){const e=I(t);let n=st(t);for(;n&&X(n)&&"static"===getComputedStyle(n).position;)n=st(n);return n&&("html"===j(n)||"body"===j(n)&&"static"===getComputedStyle(n).position&&!Y(n))?e:n||function(t){let e=ot(t);for(V(e)&&(e=e.host);F(e)&&!["html","body"].includes(j(e));){if(Y(e))return e;e=e.parentNode}return null}(t)||e}function at(t){if(F(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=Z(t);return{width:e.width,height:e.height}}function lt(t){return["html","body","#document"].includes(j(t))?t.ownerDocument.body:F(t)&&q(t)?t:lt(ot(t))}function ct(t,e){var n;void 0===e&&(e=[]);const i=lt(t),o=i===(null==(n=t.ownerDocument)?void 0:n.body),s=I(i),r=o?[s].concat(s.visualViewport||[],q(i)?i:[]):i,a=e.concat(r);return o?a:a.concat(ct(ot(r)))}function dt(t,e){return"viewport"===e?D(function(t){const e=I(t),n=tt(t),i=e.visualViewport;let o=n.clientWidth,s=n.clientHeight,r=0,a=0;return i&&(o=i.width,s=i.height,Math.abs(e.innerWidth/i.scale-i.width)<.01&&(r=i.offsetLeft,a=i.offsetTop)),{width:o,height:s,x:r,y:a}}(t)):U(e)?function(t){const e=Z(t),n=e.top+t.clientTop,i=e.left+t.clientLeft;return{top:n,left:i,x:i,y:n,right:i+t.clientWidth,bottom:n+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e):D(function(t){var e;const n=tt(t),i=et(t),o=null==(e=t.ownerDocument)?void 0:e.body,s=J(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),r=J(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let a=-i.scrollLeft+nt(t);const l=-i.scrollTop;return"rtl"===K(o||n).direction&&(a+=J(n.clientWidth,o?o.clientWidth:0)-s),{width:s,height:r,x:a,y:l}}(tt(t)))}function ht(t){const e=ct(ot(t)),n=["absolute","fixed"].includes(K(t).position)&&F(t)?rt(t):t;return U(n)?e.filter((t=>U(t)&&function(t,e){const n=null==e.getRootNode?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&V(n)){let n=e;do{if(n&&t===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(t,n)&&"body"!==j(t))):[]}var pt={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i}=t;const o=[..."clippingAncestors"===n?ht(e):[].concat(n),i],s=o[0],r=o.reduce(((t,n)=>{const i=dt(e,n);return t.top=J(i.top,t.top),t.right=G(i.right,t.right),t.bottom=G(i.bottom,t.bottom),t.left=J(i.left,t.left),t}),dt(e,s));return{width:r.right-r.left,height:r.bottom-r.top,x:r.left,y:r.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:i,offsetParent:o,strategy:s}=t;const r=F(o),a=tt(o);if(o===a)return i;let l={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if((r||!r&&"fixed"!==s)&&(("body"!==j(o)||q(a))&&(l=et(o)),F(o))){const t=Z(o,!0);c.x=t.x+o.clientLeft,c.y=t.y+o.clientTop}return e(n({},i),{x:i.x-l.scrollLeft+c.x,y:i.y-l.scrollTop+c.y})},isElement:U,getDimensions:at,getOffsetParent:rt,getDocumentElement:tt,getElementRects:t=>{let{reference:i,floating:o,strategy:s}=t;return{reference:it(i,rt(o),s),floating:e(n({},at(o)),{x:0,y:0})}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===K(t).direction};var ut=(t,i,o)=>(async(t,i,o)=>{const{placement:s="bottom",strategy:r="absolute",middleware:a=[],platform:l}=o,c=await(null==l.isRTL?void 0:l.isRTL(i));let d=await l.getElementRects({reference:t,floating:i,strategy:r}),{x:h,y:p}=A(d,s,c),u=s,f={};const m=new Set;for(let o=0;o<a.length;o++){const{name:g,fn:y}=a[o];if(m.has(g))continue;const{x:w,y:v,data:b,reset:x}=await y({x:h,y:p,initialPlacement:s,placement:u,strategy:r,middlewareData:f,rects:d,platform:l,elements:{reference:t,floating:i}});h=null!=w?w:h,p=null!=v?v:p,f=e(n({},f),{[g]:n(n({},f[g]),b)}),x&&("object"==typeof x&&(x.placement&&(u=x.placement),x.rects&&(d=!0===x.rects?await l.getElementRects({reference:t,floating:i,strategy:r}):x.rects),({x:h,y:p}=A(d,u,c)),!1!==x.skip&&m.add(g)),o=-1)}return{x:h,y:p,placement:u,strategy:r,middlewareData:f}})(t,i,n({platform:pt},o)),ft=i`
  ${o}

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
`,mt=class extends d{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}async firstUpdated(){this.panel.hidden=!this.open,this.open&&(await this.updateComplete,this.startPositioner())}disconnectedCallback(){super.disconnectedCallback(),this.hide(),this.stopPositioner()}focusOnTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).find((t=>"sl-menu"===t.tagName.toLowerCase()))}handleDocumentKeyDown(t){var e;if("Escape"===t.key)return this.hide(),void this.focusOnTrigger();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var t,e,n;const i=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?null==(n=null==(e=document.activeElement)?void 0:e.shadowRoot)?void 0:n.activeElement:document.activeElement;this.containingElement&&(null==i?void 0:i.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}}handleDocumentMouseDown(t){const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(t){const e=t.target;y(e,this.panel)}handlePanelSelect(t){const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}handlePopoverOptionsChange(){this.updatePositioner()}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(t){const e=this.getMenu(),n=e.defaultSlot.assignedElements({flatten:!0}),i=n[0],o=n[n.length-1];if("Escape"===t.key)return this.focusOnTrigger(),void this.hide();if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||this.show(),requestAnimationFrame((()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(i),i.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(o),o.focus())})));this.open&&!["Tab","Shift","Meta","Ctrl","Alt"].includes(t.key)&&e.typeToSelect(t)}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find((t=>w(t).start));t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,h(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,h(this,"sl-after-hide")}reposition(){this.updatePositioner()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){p(this,"sl-show"),this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),await v(this),this.startPositioner(),this.panel.hidden=!1;const{keyframes:t,options:e}=b(this,"dropdown.show");await x(this.panel,t,e),p(this,"sl-after-show")}else{p(this,"sl-hide"),this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),await v(this);const{keyframes:t,options:e}=b(this,"dropdown.hide");await x(this.panel,t,e),this.panel.hidden=!0,this.stopPositioner(),p(this,"sl-after-hide")}}startPositioner(){this.stopPositioner(),this.updatePositioner(),this.positionerCleanup=function(t,e,n,i){void 0===i&&(i={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:r=!0,animationFrame:a=!1}=i;let l=!1;const c=o&&!a,d=s&&!a,h=r&&!a,p=c||d?[...U(t)?ct(t):[],...ct(e)]:[];p.forEach((t=>{c&&t.addEventListener("scroll",n,{passive:!0}),d&&t.addEventListener("resize",n)}));let u,f=null;h&&(f=new ResizeObserver(n),U(t)&&f.observe(t),f.observe(e));let m=a?Z(t):null;return a&&function e(){if(l)return;const i=Z(t);!m||i.x===m.x&&i.y===m.y&&i.width===m.width&&i.height===m.height||n(),m=i,u=requestAnimationFrame(e)}(),()=>{var t;l=!0,p.forEach((t=>{c&&t.removeEventListener("scroll",n),d&&t.removeEventListener("resize",n)})),null==(t=f)||t.disconnect(),f=null,a&&cancelAnimationFrame(u)}}(this.trigger,this.positioner,this.updatePositioner.bind(this))}updatePositioner(){var i;this.open&&this.trigger&&this.positioner&&ut(this.trigger,this.positioner,{placement:this.placement,middleware:[$({mainAxis:this.distance,crossAxis:this.skidding}),N(),(void 0===i&&(i={}),{name:"shift",options:i,async fn(o){const{x:s,y:r,placement:a}=o,l=i,{mainAxis:c=!0,crossAxis:d=!1,limiter:h={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}}}=l,p=t(l,["mainAxis","crossAxis","limiter"]),u={x:s,y:r},f=await L(o,p),m=E(_(a)),g="x"===m?"y":"x";let y=u[m],w=u[g];if(c){const t="y"===m?"bottom":"right";y=S(y+f["y"===m?"top":"left"],y,y-f[t])}if(d){const t="y"===g?"bottom":"right";w=S(w+f["y"===g?"top":"left"],w,w-f[t])}const v=h.fn(e(n({},o),{[m]:y,[g]:w}));return e(n({},v),{data:{x:v.x-s,y:v.y-r}})}}),z({apply:({width:t,height:e})=>{Object.assign(this.panel.style,{maxWidth:`${t}px`,maxHeight:`${e}px`})},padding:8})],strategy:this.hoist?"fixed":"absolute"}).then((({x:t,y:e,placement:n})=>{this.positioner.setAttribute("data-placement",n),Object.assign(this.positioner.style,{position:this.hoist?"fixed":"absolute",left:`${t}px`,top:`${e}px`})}))}stopPositioner(){this.positionerCleanup&&(this.positionerCleanup(),this.positionerCleanup=void 0,this.positioner.removeAttribute("data-placement"))}render(){return u`
      <div
        part="base"
        id="dropdown"
        class=${f({dropdown:!0,"dropdown--open":this.open})}
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
    `}};mt.styles=ft,s([r(".dropdown__trigger")],mt.prototype,"trigger",2),s([r(".dropdown__panel")],mt.prototype,"panel",2),s([r(".dropdown__positioner")],mt.prototype,"positioner",2),s([a({type:Boolean,reflect:!0})],mt.prototype,"open",2),s([a({reflect:!0})],mt.prototype,"placement",2),s([a({type:Boolean})],mt.prototype,"disabled",2),s([a({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],mt.prototype,"stayOpenOnSelect",2),s([a({attribute:!1})],mt.prototype,"containingElement",2),s([a({type:Number})],mt.prototype,"distance",2),s([a({type:Number})],mt.prototype,"skidding",2),s([a({type:Boolean})],mt.prototype,"hoist",2),s([l("distance"),l("hoist"),l("placement"),l("skidding")],mt.prototype,"handlePopoverOptionsChange",1),s([l("open",{waitUntilFirstUpdate:!0})],mt.prototype,"handleOpenChange",1),mt=s([c("sl-dropdown")],mt),g("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}}),g("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});var gt=i`
  ${o}

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
`,yt=class extends d{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return u`
      <div
        part="base"
        class=${f({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
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
    `}};yt.styles=gt,s([r(".menu-item")],yt.prototype,"menuItem",2),s([a({type:Boolean,reflect:!0})],yt.prototype,"checked",2),s([a()],yt.prototype,"value",2),s([a({type:Boolean,reflect:!0})],yt.prototype,"disabled",2),s([l("checked")],yt.prototype,"handleCheckedChange",1),s([l("disabled")],yt.prototype,"handleDisabledChange",1),yt=s([c("sl-menu-item")],yt);
