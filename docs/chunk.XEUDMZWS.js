import{f as t,g as e,_ as o,o as r,j as n,k as i,F as s,m as a,T as l,G as c,H as u,h as d,w as p,l as h,p as f,E as b,y as g}from"./main2.js";function m(t){const e=t?t.assignedNodes({flatten:!0}):[];let o="";return[...e].map((t=>{t.nodeType===Node.TEXT_NODE&&(o+=t.textContent)})),o}function v(t,e){return e?null!==t.querySelector(`:scope > [slot="${e}"]`):[...t.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){if(!t.hasAttribute("slot"))return!0}return!1}))}var y=t`
  ${e}

  :host {
    display: block;
  }

  .menu {
    padding: var(--sl-spacing-x-small) 0;
  }
`,w=class extends i{constructor(){super(...arguments),this.typeToSelectString=""}connectedCallback(){super.connectedCallback(),s.observe(this,{visible:()=>this.getAllItems().map((t=>t.classList.add("sl-focus-visible"))),notVisible:()=>this.getAllItems().map((t=>t.classList.remove("sl-focus-visible")))})}disconnectedCallback(){super.disconnectedCallback(),s.unobserve(this)}getAllItems(t={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((e=>"menuitem"===e.getAttribute("role")&&!(!(null==t?void 0:t.includeDisabled)&&e.disabled)))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find((t=>"0"===t.getAttribute("tabindex")))}setCurrentItem(t){const e=this.getAllItems({includeDisabled:!1});let o=t.disabled?e[0]:t;e.map((t=>t.setAttribute("tabindex",t===o?"0":"-1")))}typeToSelect(t){const e=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=setTimeout((()=>this.typeToSelectString=""),750),this.typeToSelectString+=t.toLowerCase(),this.getAllItems().map((t=>t.classList.add("sl-focus-visible")));for(const t of e){if(m(t.shadowRoot.querySelector("slot:not([name])")).toLowerCase().trim().substring(0,this.typeToSelectString.length)===this.typeToSelectString){this.setCurrentItem(t),t.focus();break}}}handleClick(t){const e=t.target.closest("sl-menu-item");e&&!e.disabled&&a(this,"sl-select",{detail:{item:e}})}handleKeyDown(t){if("Enter"===t.key){const e=this.getCurrentItem();t.preventDefault(),e&&e.click()}if(" "===t.key&&t.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems({includeDisabled:!1}),o=this.getCurrentItem();let r=o?e.indexOf(o):0;if(e.length)return t.preventDefault(),"ArrowDown"===t.key?r++:"ArrowUp"===t.key?r--:"Home"===t.key?r=0:"End"===t.key&&(r=e.length-1),r<0&&(r=0),r>e.length-1&&(r=e.length-1),this.setCurrentItem(e[r]),void e[r].focus()}this.typeToSelect(t.key)}handleMouseDown(t){const e=t.target;"menuitem"===e.getAttribute("role")&&(this.setCurrentItem(e),e.focus())}handleSlotChange(){const t=this.getAllItems({includeDisabled:!1});t.length&&this.setCurrentItem(t[0])}render(){return l`
      <div
        part="base"
        class="menu"
        role="menu"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};function x(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function k(t){if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function _(t){var e=k(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function O(t){return t instanceof k(t).Element||t instanceof Element}function D(t){return t instanceof k(t).HTMLElement||t instanceof HTMLElement}function C(t){return"undefined"!=typeof ShadowRoot&&(t instanceof k(t).ShadowRoot||t instanceof ShadowRoot)}function E(t){return t?(t.nodeName||"").toLowerCase():null}function A(t){return((O(t)?t.ownerDocument:t.document)||window.document).documentElement}function S(t){return x(A(t)).left+_(t).scrollLeft}function T(t){return k(t).getComputedStyle(t)}function L(t){var e=T(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function $(t,e,o){void 0===o&&(o=!1);var r,n,i=A(e),s=x(t),a=D(e),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(a||!a&&!o)&&(("body"!==E(e)||L(i))&&(l=(r=e)!==k(r)&&D(r)?{scrollLeft:(n=r).scrollLeft,scrollTop:n.scrollTop}:_(r)),D(e)?((c=x(e)).x+=e.clientLeft,c.y+=e.clientTop):i&&(c.x=S(i))),{x:s.left+l.scrollLeft-c.x,y:s.top+l.scrollTop-c.y,width:s.width,height:s.height}}function P(t){return{x:t.offsetLeft,y:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}}function B(t){return"html"===E(t)?t:t.assignedSlot||t.parentNode||(C(t)?t.host:null)||A(t)}function M(t){return["html","body","#document"].indexOf(E(t))>=0?t.ownerDocument.body:D(t)&&L(t)?t:M(B(t))}function j(t,e){var o;void 0===e&&(e=[]);var r=M(t),n=r===(null==(o=t.ownerDocument)?void 0:o.body),i=k(r),s=n?[i].concat(i.visualViewport||[],L(r)?r:[]):r,a=e.concat(s);return n?a:a.concat(j(B(s)))}function I(t){return["table","td","th"].indexOf(E(t))>=0}function z(t){return D(t)&&"fixed"!==T(t).position?t.offsetParent:null}function R(t){for(var e=k(t),o=z(t);o&&I(o)&&"static"===T(o).position;)o=z(o);return o&&("html"===E(o)||"body"===E(o)&&"static"===T(o).position)?e:o||function(t){for(var e=navigator.userAgent.toLowerCase().includes("firefox"),o=B(t);D(o)&&["html","body"].indexOf(E(o))<0;){var r=T(o);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||["transform","perspective"].includes(r.willChange)||e&&"filter"===r.willChange||e&&r.filter&&"none"!==r.filter)return o;o=o.parentNode}return null}(t)||e}w.styles=y,o([r(".menu")],w.prototype,"menu",2),o([r("slot")],w.prototype,"defaultSlot",2),w=o([n("sl-menu")],w);var W="top",N="bottom",H="right",q="left",F=[W,N,H,q],U=F.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),K=[].concat(F,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),V=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function X(t){var e=new Map,o=new Set,r=[];function n(t){o.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!o.has(t)){var r=e.get(t);r&&n(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){o.has(t.name)||n(t)})),r}function Y(t){return t.split("-")[0]}var G=Math.max,J=Math.min,Q=Math.round;function Z(t,e){var o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(o&&C(o)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function tt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function et(t,e){return"viewport"===e?tt(function(t){var e=k(t),o=A(t),r=e.visualViewport,n=o.clientWidth,i=o.clientHeight,s=0,a=0;return r&&(n=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:n,height:i,x:s+S(t),y:a}}(t)):D(e)?function(t){var e=x(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):tt(function(t){var e,o=A(t),r=_(t),n=null==(e=t.ownerDocument)?void 0:e.body,i=G(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=G(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-r.scrollLeft+S(t),l=-r.scrollTop;return"rtl"===T(n||o).direction&&(a+=G(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}(A(t)))}function ot(t,e,o){var r="clippingParents"===e?function(t){var e=j(B(t)),o=["absolute","fixed"].indexOf(T(t).position)>=0&&D(t)?R(t):t;return O(o)?e.filter((function(t){return O(t)&&Z(t,o)&&"body"!==E(t)})):[]}(t):[].concat(e),n=[].concat(r,[o]),i=n[0],s=n.reduce((function(e,o){var r=et(t,o);return e.top=G(r.top,e.top),e.right=J(r.right,e.right),e.bottom=J(r.bottom,e.bottom),e.left=G(r.left,e.left),e}),et(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function rt(t){return t.split("-")[1]}function nt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function it(t){var e,o=t.reference,r=t.element,n=t.placement,i=n?Y(n):null,s=n?rt(n):null,a=o.x+o.width/2-r.width/2,l=o.y+o.height/2-r.height/2;switch(i){case W:e={x:a,y:o.y-r.height};break;case N:e={x:a,y:o.y+o.height};break;case H:e={x:o.x+o.width,y:l};break;case q:e={x:o.x-r.width,y:l};break;default:e={x:o.x,y:o.y}}var c=i?nt(i):null;if(null!=c){var u="y"===c?"height":"width";switch(s){case"start":e[c]=e[c]-(o[u]/2-r[u]/2);break;case"end":e[c]=e[c]+(o[u]/2-r[u]/2)}}return e}function st(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function at(t,e){return e.reduce((function(e,o){return e[o]=t,e}),{})}function lt(t,e){void 0===e&&(e={});var o=e,r=o.placement,n=void 0===r?t.placement:r,i=o.boundary,s=void 0===i?"clippingParents":i,a=o.rootBoundary,l=void 0===a?"viewport":a,c=o.elementContext,u=void 0===c?"popper":c,d=o.altBoundary,p=void 0!==d&&d,h=o.padding,f=void 0===h?0:h,b=st("number"!=typeof f?f:at(f,F)),g="popper"===u?"reference":"popper",m=t.elements.reference,v=t.rects.popper,y=t.elements[p?g:u],w=ot(O(y)?y:y.contextElement||A(t.elements.popper),s,l),k=x(m),_=it({reference:k,element:v,strategy:"absolute",placement:n}),D=tt(Object.assign({},v,_)),C="popper"===u?D:k,E={top:w.top-C.top+b.top,bottom:C.bottom-w.bottom+b.bottom,left:w.left-C.left+b.left,right:C.right-w.right+b.right},S=t.modifiersData.offset;if("popper"===u&&S){var T=S[n];Object.keys(E).forEach((function(t){var e=[H,N].indexOf(t)>=0?1:-1,o=[W,N].indexOf(t)>=0?"y":"x";E[t]+=T[o]*e}))}return E}var ct={placement:"bottom",modifiers:[],strategy:"absolute"};function ut(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function dt(t){void 0===t&&(t={});var e=t,o=e.defaultModifiers,r=void 0===o?[]:o,n=e.defaultOptions,i=void 0===n?ct:n;return function(t,e,o){void 0===o&&(o=i);var n,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},ct,i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,u={state:a,setOptions:function(o){d(),a.options=Object.assign({},i,a.options,o),a.scrollParents={reference:O(t)?j(t):t.contextElement?j(t.contextElement):[],popper:j(e)};var n,s,c=function(t){var e=X(t);return V.reduce((function(t,o){return t.concat(e.filter((function(t){return t.phase===o})))}),[])}((n=[].concat(r,a.options.modifiers),s=n.reduce((function(t,e){var o=t[e.name];return t[e.name]=o?Object.assign({},o,e,{options:Object.assign({},o.options,e.options),data:Object.assign({},o.data,e.data)}):e,t}),{}),Object.keys(s).map((function(t){return s[t]}))));return a.orderedModifiers=c.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,o=t.options,r=void 0===o?{}:o,n=t.effect;if("function"==typeof n){var i=n({state:a,name:e,instance:u,options:r}),s=function(){};l.push(i||s)}})),u.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,o=t.popper;if(ut(e,o)){a.rects={reference:$(e,R(o),"fixed"===a.options.strategy),popper:P(o)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<a.orderedModifiers.length;r++)if(!0!==a.reset){var n=a.orderedModifiers[r],i=n.fn,s=n.options,l=void 0===s?{}:s,d=n.name;"function"==typeof i&&(a=i({state:a,options:l,name:d,instance:u})||a)}else a.reset=!1,r=-1}}},update:(n=function(){return new Promise((function(t){u.forceUpdate(),t(a)}))},function(){return s||(s=new Promise((function(t){Promise.resolve().then((function(){s=void 0,t(n())}))}))),s}),destroy:function(){d(),c=!0}};if(!ut(t,e))return u;function d(){l.forEach((function(t){return t()})),l=[]}return u.setOptions(o).then((function(t){!c&&o.onFirstUpdate&&o.onFirstUpdate(t)})),u}}var pt={passive:!0};var ht={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ft(t){var e,o=t.popper,r=t.popperRect,n=t.placement,i=t.offsets,s=t.position,a=t.gpuAcceleration,l=t.adaptive,c=t.roundOffsets,u=!0===c?function(t){var e=t.x,o=t.y,r=window.devicePixelRatio||1;return{x:Q(Q(e*r)/r)||0,y:Q(Q(o*r)/r)||0}}(i):"function"==typeof c?c(i):i,d=u.x,p=void 0===d?0:d,h=u.y,f=void 0===h?0:h,b=i.hasOwnProperty("x"),g=i.hasOwnProperty("y"),m=q,v=W,y=window;if(l){var w=R(o),x="clientHeight",_="clientWidth";w===k(o)&&"static"!==T(w=A(o)).position&&(x="scrollHeight",_="scrollWidth"),n===W&&(v=N,f-=w[x]-r.height,f*=a?1:-1),n===q&&(m=H,p-=w[_]-r.width,p*=a?1:-1)}var O,D=Object.assign({position:s},l&&ht);return a?Object.assign({},D,((O={})[v]=g?"0":"",O[m]=b?"0":"",O.transform=(y.devicePixelRatio||1)<2?"translate("+p+"px, "+f+"px)":"translate3d("+p+"px, "+f+"px, 0)",O)):Object.assign({},D,((e={})[v]=g?f+"px":"",e[m]=b?p+"px":"",e.transform="",e))}var bt={left:"right",right:"left",bottom:"top",top:"bottom"};function gt(t){return t.replace(/left|right|bottom|top/g,(function(t){return bt[t]}))}var mt={start:"end",end:"start"};function vt(t){return t.replace(/start|end/g,(function(t){return mt[t]}))}function yt(t,e,o){return G(t,J(e,o))}function wt(t,e,o){return void 0===o&&(o={x:0,y:0}),{top:t.top-e.height-o.y,right:t.right-e.width+o.x,bottom:t.bottom-e.height+o.y,left:t.left-e.width-o.x}}function xt(t){return[W,H,N,q].some((function(e){return t[e]>=0}))}var kt=dt({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=void 0===n||n,s=r.resize,a=void 0===s||s,l=k(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&c.forEach((function(t){t.addEventListener("scroll",o.update,pt)})),a&&l.addEventListener("resize",o.update,pt),function(){i&&c.forEach((function(t){t.removeEventListener("scroll",o.update,pt)})),a&&l.removeEventListener("resize",o.update,pt)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,o=t.name;e.modifiersData[o]=it({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=void 0===r||r,i=o.adaptive,s=void 0===i||i,a=o.roundOffsets,l=void 0===a||a,c={placement:Y(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,ft(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,ft(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var o=e.styles[t]||{},r=e.attributes[t]||{},n=e.elements[t];D(n)&&E(n)&&(Object.assign(n.style,o),Object.keys(r).forEach((function(t){var e=r[t];!1===e?n.removeAttribute(t):n.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach((function(t){var r=e.elements[t],n=e.attributes[t]||{},i=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:o[t]).reduce((function(t,e){return t[e]="",t}),{});D(r)&&E(r)&&(Object.assign(r.style,i),Object.keys(n).forEach((function(t){r.removeAttribute(t)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,o=t.options,r=t.name,n=o.offset,i=void 0===n?[0,0]:n,s=K.reduce((function(t,o){return t[o]=function(t,e,o){var r=Y(t),n=[q,W].indexOf(r)>=0?-1:1,i="function"==typeof o?o(Object.assign({},e,{placement:t})):o,s=i[0],a=i[1];return s=s||0,a=(a||0)*n,[q,H].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}(o,e.rects,i),t}),{}),a=s[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[r]=s}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,o=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=o.mainAxis,i=void 0===n||n,s=o.altAxis,a=void 0===s||s,l=o.fallbackPlacements,c=o.padding,u=o.boundary,d=o.rootBoundary,p=o.altBoundary,h=o.flipVariations,f=void 0===h||h,b=o.allowedAutoPlacements,g=e.options.placement,m=Y(g),v=l||(m===g||!f?[gt(g)]:function(t){if("auto"===Y(t))return[];var e=gt(t);return[vt(t),e,vt(e)]}(g)),y=[g].concat(v).reduce((function(t,o){return t.concat("auto"===Y(o)?function(t,e){void 0===e&&(e={});var o=e,r=o.placement,n=o.boundary,i=o.rootBoundary,s=o.padding,a=o.flipVariations,l=o.allowedAutoPlacements,c=void 0===l?K:l,u=rt(r),d=u?a?U:U.filter((function(t){return rt(t)===u})):F,p=d.filter((function(t){return c.indexOf(t)>=0}));0===p.length&&(p=d);var h=p.reduce((function(e,o){return e[o]=lt(t,{placement:o,boundary:n,rootBoundary:i,padding:s})[Y(o)],e}),{});return Object.keys(h).sort((function(t,e){return h[t]-h[e]}))}(e,{placement:o,boundary:u,rootBoundary:d,padding:c,flipVariations:f,allowedAutoPlacements:b}):o)}),[]),w=e.rects.reference,x=e.rects.popper,k=new Map,_=!0,O=y[0],D=0;D<y.length;D++){var C=y[D],E=Y(C),A="start"===rt(C),S=[W,N].indexOf(E)>=0,T=S?"width":"height",L=lt(e,{placement:C,boundary:u,rootBoundary:d,altBoundary:p,padding:c}),$=S?A?H:q:A?N:W;w[T]>x[T]&&($=gt($));var P=gt($),B=[];if(i&&B.push(L[E]<=0),a&&B.push(L[$]<=0,L[P]<=0),B.every((function(t){return t}))){O=C,_=!1;break}k.set(C,B)}if(_)for(var M=function(t){var e=y.find((function(e){var o=k.get(e);if(o)return o.slice(0,t).every((function(t){return t}))}));if(e)return O=e,"break"},j=f?3:1;j>0;j--){if("break"===M(j))break}e.placement!==O&&(e.modifiersData[r]._skip=!0,e.placement=O,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,o=t.options,r=t.name,n=o.mainAxis,i=void 0===n||n,s=o.altAxis,a=void 0!==s&&s,l=o.boundary,c=o.rootBoundary,u=o.altBoundary,d=o.padding,p=o.tether,h=void 0===p||p,f=o.tetherOffset,b=void 0===f?0:f,g=lt(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:u}),m=Y(e.placement),v=rt(e.placement),y=!v,w=nt(m),x="x"===w?"y":"x",k=e.modifiersData.popperOffsets,_=e.rects.reference,O=e.rects.popper,D="function"==typeof b?b(Object.assign({},e.rects,{placement:e.placement})):b,C={x:0,y:0};if(k){if(i||a){var E="y"===w?W:q,A="y"===w?N:H,S="y"===w?"height":"width",T=k[w],L=k[w]+g[E],$=k[w]-g[A],B=h?-O[S]/2:0,M="start"===v?_[S]:O[S],j="start"===v?-O[S]:-_[S],I=e.elements.arrow,z=h&&I?P(I):{width:0,height:0},F=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},U=F[E],K=F[A],V=yt(0,_[S],z[S]),X=y?_[S]/2-B-V-U-D:M-V-U-D,Q=y?-_[S]/2+B+V+K+D:j+V+K+D,Z=e.elements.arrow&&R(e.elements.arrow),tt=Z?"y"===w?Z.clientTop||0:Z.clientLeft||0:0,et=e.modifiersData.offset?e.modifiersData.offset[e.placement][w]:0,ot=k[w]+X-et-tt,it=k[w]+Q-et;if(i){var st=yt(h?J(L,ot):L,T,h?G($,it):$);k[w]=st,C[w]=st-T}if(a){var at="x"===w?W:q,ct="x"===w?N:H,ut=k[x],dt=ut+g[at],pt=ut-g[ct],ht=yt(h?J(dt,ot):dt,ut,h?G(pt,it):pt);k[x]=ht,C[x]=ht-ut}}e.modifiersData[r]=C}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,o=t.state,r=t.name,n=t.options,i=o.elements.arrow,s=o.modifiersData.popperOffsets,a=Y(o.placement),l=nt(a),c=[q,H].indexOf(a)>=0?"height":"width";if(i&&s){var u=function(t,e){return st("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:at(t,F))}(n.padding,o),d=P(i),p="y"===l?W:q,h="y"===l?N:H,f=o.rects.reference[c]+o.rects.reference[l]-s[l]-o.rects.popper[c],b=s[l]-o.rects.reference[l],g=R(i),m=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,v=f/2-b/2,y=u[p],w=m-d[c]-u[h],x=m/2-d[c]/2+v,k=yt(y,x,w),_=l;o.modifiersData[r]=((e={})[_]=k,e.centerOffset=k-x,e)}},effect:function(t){var e=t.state,o=t.options.element,r=void 0===o?"[data-popper-arrow]":o;null!=r&&("string"!=typeof r||(r=e.elements.popper.querySelector(r)))&&Z(e.elements.popper,r)&&(e.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,o=t.name,r=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,s=lt(e,{elementContext:"reference"}),a=lt(e,{altBoundary:!0}),l=wt(s,r),c=wt(a,n,i),u=xt(l),d=xt(c);e.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}}]});function _t(t){const e=t.tagName.toLowerCase();return"-1"!==t.getAttribute("tabindex")&&(!t.hasAttribute("disabled")&&((!t.hasAttribute("aria-disabled")||"false"===t.getAttribute("aria-disabled"))&&(!("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))&&(!!t.offsetParent&&("hidden"!==window.getComputedStyle(t).visibility&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||(!!t.hasAttribute("tabindex")||(!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(e)))))))))}function Ot(t,e,o="vertical",r="smooth"){const n=function(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),i=n.top+e.scrollTop,s=n.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,u=e.scrollTop+e.offsetHeight;"horizontal"!==o&&"both"!==o||(s<a?e.scrollTo({left:s,behavior:r}):s+t.clientWidth>l&&e.scrollTo({left:s-e.offsetWidth+t.clientWidth,behavior:r})),"vertical"!==o&&"both"!==o||(i<c?e.scrollTo({top:i,behavior:r}):i+t.clientHeight>u&&e.scrollTo({top:i-e.offsetHeight+t.clientHeight,behavior:r}))}function Dt(t,e,o){return new Promise((async r=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=t.animate(e,c(u({},o),{duration:Ct()?0:o.duration}));n.addEventListener("cancel",r,{once:!0}),n.addEventListener("finish",r,{once:!0})}))}function Ct(){const t=window.matchMedia("(prefers-reduced-motion: reduce)");return null==t?void 0:t.matches}function Et(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const o=requestAnimationFrame(e);t.addEventListener("cancel",(()=>o),{once:!0}),t.addEventListener("finish",(()=>o),{once:!0}),t.cancel()})))))}var At=new Map,St=new WeakMap;function Tt(t,e){At.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function Lt(t,e){const o=St.get(t);if(o&&o[e])return o[e];const r=At.get(e);return r||{keyframes:[],options:{duration:0}}}var $t=t`
  ${e}

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
    max-height: 75vh;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: rgb(var(--sl-panel-background-color));
    border: solid 1px rgb(var(--sl-panel-border-color));
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-large);
    overflow: auto;
    overscroll-behavior: none;
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  .dropdown__positioner[data-popper-placement^='top'] .dropdown__panel {
    transform-origin: bottom;
  }

  .dropdown__positioner[data-popper-placement^='bottom'] .dropdown__panel {
    transform-origin: top;
  }

  .dropdown__positioner[data-popper-placement^='left'] .dropdown__panel {
    transform-origin: right;
  }

  .dropdown__positioner[data-popper-placement^='right'] .dropdown__panel {
    transform-origin: left;
  }
`,Pt=0,Bt=class extends i{constructor(){super(...arguments),this.componentId="dropdown-"+ ++Pt,this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=2,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this),this.updateComplete.then((()=>{this.popover=kt(this.trigger,this.positioner,{placement:this.placement,strategy:this.hoist?"fixed":"absolute",modifiers:[{name:"flip",options:{boundary:"viewport"}},{name:"offset",options:{offset:[this.skidding,this.distance]}}]})}))}firstUpdated(){this.panel.hidden=!this.open}disconnectedCallback(){super.disconnectedCallback(),this.hide(),this.popover.destroy()}focusOnTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];t&&"function"==typeof t.focus&&t.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).filter((t=>"sl-menu"===t.tagName.toLowerCase()))[0]}handleDocumentKeyDown(t){var e;if("Escape"===t.key)return this.hide(),void this.focusOnTrigger();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var t,e;const o=this.containingElement.getRootNode()instanceof ShadowRoot?null==(e=null==(t=document.activeElement)?void 0:t.shadowRoot)?void 0:e.activeElement:document.activeElement;(null==o?void 0:o.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}}handleDocumentMouseDown(t){t.composedPath().includes(this.containingElement)||this.hide()}handleMenuItemActivate(t){Ot(t.target,this.panel)}handlePanelSelect(t){const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}handlePopoverOptionsChange(){this.popover&&this.popover.setOptions({placement:this.placement,strategy:this.hoist?"fixed":"absolute",modifiers:[{name:"flip",options:{boundary:"viewport"}},{name:"offset",options:{offset:[this.skidding,this.distance]}}]})}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(t){const e=this.getMenu(),o=e?[...e.querySelectorAll("sl-menu-item")]:[],r=o[0],n=o[o.length-1];if("Escape"===t.key)return this.focusOnTrigger(),void this.hide();if([" ","Enter"].includes(t.key))return t.preventDefault(),void(this.open?this.hide():this.show());if(["ArrowDown","ArrowUp"].includes(t.key)){if(t.preventDefault(),this.open||this.show(),"ArrowDown"===t.key&&r){return this.getMenu().setCurrentItem(r),void r.focus()}if("ArrowUp"===t.key&&n)return e.setCurrentItem(n),void n.focus()}this.open&&e&&!["Tab","Shift","Meta","Ctrl","Alt"].includes(t.key)&&e.typeToSelect(t.key)}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){if(this.trigger){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find((t=>function(t){const e=[];return function t(o){o instanceof HTMLElement&&(e.push(o),o.shadowRoot&&"open"===o.shadowRoot.mode&&t(o.shadowRoot)),[...o.querySelectorAll("*")].map((e=>t(e)))}(t),{start:e.find((t=>_t(t)))||null,end:e.reverse().find((t=>_t(t)))||null}}(t).start));t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}}async show(){if(!this.open)return this.open=!0,h(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,h(this,"sl-after-hide")}reposition(){this.open&&this.popover.update()}async handleOpenChange(){if(!this.disabled)if(this.updateAccessibleTrigger(),this.open){a(this,"sl-show"),this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),await Et(this),this.popover.update(),this.panel.hidden=!1;const{keyframes:t,options:e}=Lt(this,"dropdown.show");await Dt(this.panel,t,e),a(this,"sl-after-show")}else{a(this,"sl-hide"),this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),await Et(this);const{keyframes:t,options:e}=Lt(this,"dropdown.hide");await Dt(this.panel,t,e),this.panel.hidden=!0,a(this,"sl-after-hide")}}render(){return l`
      <div
        part="base"
        id=${this.componentId}
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
            role="menu"
            aria-hidden=${this.open?"false":"true"}
            aria-labelledby=${this.componentId}
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `}};Bt.styles=$t,o([r(".dropdown__trigger")],Bt.prototype,"trigger",2),o([r(".dropdown__panel")],Bt.prototype,"panel",2),o([r(".dropdown__positioner")],Bt.prototype,"positioner",2),o([d({type:Boolean,reflect:!0})],Bt.prototype,"open",2),o([d()],Bt.prototype,"placement",2),o([d({type:Boolean})],Bt.prototype,"disabled",2),o([d({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Bt.prototype,"stayOpenOnSelect",2),o([d({attribute:!1})],Bt.prototype,"containingElement",2),o([d({type:Number})],Bt.prototype,"distance",2),o([d({type:Number})],Bt.prototype,"skidding",2),o([d({type:Boolean})],Bt.prototype,"hoist",2),o([p("distance"),p("hoist"),p("placement"),p("skidding")],Bt.prototype,"handlePopoverOptionsChange",1),o([p("open",{waitUntilFirstUpdate:!0})],Bt.prototype,"handleOpenChange",1),Bt=o([n("sl-dropdown")],Bt),Tt("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:150,easing:"ease"}}),Tt("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:150,easing:"ease"}});var Mt=t`
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
    text-align: left;
    color: rgb(var(--sl-color-neutral-700));
    padding: var(--sl-spacing-xx-small) var(--sl-spacing-x-large);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }
  .menu-item.menu-item--disabled {
    outline: none;
    color: rgb(var(--sl-color-neutral-400));
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
  :host(.sl-focus-visible:focus:not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-1000));
  }

  .menu-item .menu-item__check {
    display: flex;
    position: absolute;
    left: 0.5em;
    top: calc(50% - 0.5em);
    visibility: hidden;
    align-items: center;
    font-size: inherit;
  }

  .menu-item--checked .menu-item__check {
    visibility: visible;
  }
`,jt=class extends i{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}handleCheckedChange(){this.setAttribute("aria-checked",String(this.checked))}handleDisabledChange(){this.setAttribute("aria-disabled",String(this.disabled))}render(){return l`
      <div
        part="base"
        class=${f({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
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
      </div>
    `}};jt.styles=Mt,o([r(".menu-item")],jt.prototype,"menuItem",2),o([d({type:Boolean,reflect:!0})],jt.prototype,"checked",2),o([d()],jt.prototype,"value",2),o([d({type:Boolean,reflect:!0})],jt.prototype,"disabled",2),o([p("checked")],jt.prototype,"handleCheckedChange",1),o([p("disabled")],jt.prototype,"handleDisabledChange",1),jt=o([n("sl-menu-item")],jt);var It=t`
  ${e}

  :host {
    display: inline-block;
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

  .button.button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button.button--disabled * {
    pointer-events: none;
  }

  /* Clicks on icons shouldn't prevent the button from gaining focus */
  .button::slotted(sl-icon) {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button.button--default {
    background-color: rgb(var(--sl-color-neutral-1000));
    border-color: rgb(var(--sl-color-neutral-300));
    color: rgb(var(--sl-color-neutral-700));
  }

  .button.button--default:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-50));
    border-color: rgb(var(--sl-color-primary-500));
    color: rgb(var(--sl-color-primary-700));
  }

  .button.button--default:focus:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-50));
    border-color: rgb(var(--sl-color-primary-500));
    color: rgb(var(--sl-color-primary-700));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .button.button--default:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-100));
    border-color: rgb(var(--sl-color-primary-500));
    color: rgb(var(--sl-color-primary-700));
  }

  /* Primary */
  .button.button--primary {
    background-color: rgb(var(--sl-color-primary-600));
    border-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-1000));
  }

  .button.button--primary:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
    color: rgb(var(--sl-color-neutral-1000));
  }

  .button.button--primary:focus:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
    color: rgb(var(--sl-color-neutral-1000));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .button.button--primary:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-600));
    border-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-1000));
  }

  /* Success */
  .button.button--success {
    background-color: rgb(var(--sl-color-success-600));
    border-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-neutral-1000));
  }

  .button.button--success:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-success-500));
    border-color: rgb(var(--sl-color-success-500));
    color: rgb(var(--sl-color-neutral-1000));
  }

  .button.button--success:focus:not(.button--disabled) {
    background-color: rgb(var(--sl-color-success-600));
    border-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-neutral-1000));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-success-500) / var(--sl-focus-ring-alpha));
  }

  .button.button--success:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-success-600));
    border-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-neutral-1000));
  }

  /* Neutral */
  .button.button--neutral {
    background-color: rgb(var(--sl-color-neutral-600));
    border-color: rgb(var(--sl-color-neutral-600));
    color: rgb(var(--sl-color-neutral-1000));
  }

  .button.button--neutral:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-neutral-500));
    border-color: rgb(var(--sl-color-neutral-500));
    color: rgb(var(--sl-color-neutral-1000));
  }

  .button.button--neutral:focus:not(.button--disabled) {
    background-color: rgb(var(--sl-color-neutral-500));
    border-color: rgb(var(--sl-color-neutral-500));
    color: rgb(var(--sl-color-neutral-1000));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-neutral-500) / var(--sl-focus-ring-alpha));
  }

  .button.button--neutral:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-neutral-600));
    border-color: rgb(var(--sl-color-neutral-600));
    color: rgb(var(--sl-color-neutral-1000));
  }

  /* Warning */
  .button.button--warning {
    background-color: rgb(var(--sl-color-warning-600));
    border-color: rgb(var(--sl-color-warning-600));
    color: rgb(var(--sl-color-neutral-1000));
  }
  .button.button--warning:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-warning-500));
    border-color: rgb(var(--sl-color-warning-500));
    color: rgb(var(--sl-color-neutral-1000));
  }

  .button.button--warning:focus:not(.button--disabled) {
    background-color: rgb(var(--sl-color-warning-500));
    border-color: rgb(var(--sl-color-warning-500));
    color: rgb(var(--sl-color-neutral-1000));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-warning-500) / var(--sl-focus-ring-alpha));
  }

  .button.button--warning:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-warning-600));
    border-color: rgb(var(--sl-color-warning-600));
    color: rgb(var(--sl-color-neutral-1000));
  }

  /* Danger */
  .button.button--danger {
    background-color: rgb(var(--sl-color-danger-600));
    border-color: rgb(var(--sl-color-danger-600));
    color: rgb(var(--sl-color-neutral-1000));
  }

  .button.button--danger:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-danger-500));
    border-color: rgb(var(--sl-color-danger-500));
    color: rgb(var(--sl-color-neutral-1000));
  }

  .button.button--danger:focus:not(.button--disabled) {
    background-color: rgb(var(--sl-color-danger-500));
    border-color: rgb(var(--sl-color-danger-500));
    color: rgb(var(--sl-color-neutral-1000));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-danger-500) / var(--sl-focus-ring-alpha));
  }

  .button.button--danger:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-danger-600));
    border-color: rgb(var(--sl-color-danger-600));
    color: rgb(var(--sl-color-neutral-1000));
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: rgb(var(--sl-color-primary-600));
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: rgb(var(--sl-color-primary-500));
  }

  .button--text:focus:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: rgb(var(--sl-color-primary-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: rgb(var(--sl-color-primary-700));
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

  :host(.sl-button-group__button--first) .button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last) .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-left: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, [type='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: solid 1px rgb(var(--sl-color-neutral-1000) / 20%);
  }

  /* Bump focused buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus) {
    z-index: 2;
  }
`,zt=class extends i{constructor(){super(...arguments),this.hasFocus=!1,this.hasLabel=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.type="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.circle=!1,this.submit=!1}connectedCallback(){super.connectedCallback(),this.handleSlotChange()}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleSlotChange(){this.hasLabel=v(this),this.hasPrefix=v(this,"prefix"),this.hasSuffix=v(this,"suffix")}handleBlur(){this.hasFocus=!1,a(this,"sl-blur")}handleFocus(){this.hasFocus=!0,a(this,"sl-focus")}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}render(){const t=!!this.href,e=l`
      <span part="prefix" class="button__prefix">
        <slot @slotchange=${this.handleSlotChange} name="prefix"></slot>
      </span>
      <span part="label" class="button__label">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </span>
      <span part="suffix" class="button__suffix">
        <slot @slotchange=${this.handleSlotChange} name="suffix"></slot>
      </span>
      ${this.caret?l`
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
      ${this.loading?l`<sl-spinner></sl-spinner>`:""}
    `;return t?l`
          <a
            part="base"
            class=${f({button:!0,"button--default":"default"===this.type,"button--primary":"primary"===this.type,"button--success":"success"===this.type,"button--neutral":"neutral"===this.type,"button--warning":"warning"===this.type,"button--danger":"danger"===this.type,"button--text":"text"===this.type,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--pill":this.pill,"button--has-label":this.hasLabel,"button--has-prefix":this.hasPrefix,"button--has-suffix":this.hasSuffix})}
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
            ${e}
          </a>
        `:l`
          <button
            part="base"
            class=${f({button:!0,"button--default":"default"===this.type,"button--primary":"primary"===this.type,"button--success":"success"===this.type,"button--neutral":"neutral"===this.type,"button--warning":"warning"===this.type,"button--danger":"danger"===this.type,"button--text":"text"===this.type,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--pill":this.pill,"button--has-label":this.hasLabel,"button--has-prefix":this.hasPrefix,"button--has-suffix":this.hasSuffix})}
            ?disabled=${this.disabled}
            type=${this.submit?"submit":"button"}
            name=${g(this.name)}
            value=${g(this.value)}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @click=${this.handleClick}
          >
            ${e}
          </button>
        `}};zt.styles=It,o([r(".button")],zt.prototype,"button",2),o([b()],zt.prototype,"hasFocus",2),o([b()],zt.prototype,"hasLabel",2),o([b()],zt.prototype,"hasPrefix",2),o([b()],zt.prototype,"hasSuffix",2),o([d({reflect:!0})],zt.prototype,"type",2),o([d({reflect:!0})],zt.prototype,"size",2),o([d({type:Boolean,reflect:!0})],zt.prototype,"caret",2),o([d({type:Boolean,reflect:!0})],zt.prototype,"disabled",2),o([d({type:Boolean,reflect:!0})],zt.prototype,"loading",2),o([d({type:Boolean,reflect:!0})],zt.prototype,"pill",2),o([d({type:Boolean,reflect:!0})],zt.prototype,"circle",2),o([d({type:Boolean,reflect:!0})],zt.prototype,"submit",2),o([d()],zt.prototype,"name",2),o([d()],zt.prototype,"value",2),o([d()],zt.prototype,"href",2),o([d()],zt.prototype,"target",2),o([d()],zt.prototype,"download",2),zt=o([n("sl-button")],zt);var Rt=t`
  ${e}

  :host {
    --track-color: rgb(var(--sl-color-neutral-500) / 20%);
    --indicator-color: rgb(var(--sl-color-primary-600));
    --stroke-width: 2px;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    border-radius: 50%;
    border: solid var(--stroke-width) var(--track-color);
    border-top-color: var(--indicator-color);
    border-right-color: var(--indicator-color);
    animation: 1s linear infinite spin;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,Wt=class extends i{render(){return l` <span part="base" class="spinner" aria-busy="true" aria-live="polite"></span> `}};Wt.styles=Rt,Wt=o([n("sl-spinner")],Wt);export{Et as a,Dt as b,m as c,Lt as g,v as h,Tt as s};
