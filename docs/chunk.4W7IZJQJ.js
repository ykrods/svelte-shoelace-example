import{r as t,f as e,_ as o,g as r,j as n,k as a,G as i,m as s,y as l,H as c,I as u,h as d,w as p,l as b,o as h,F as f,E as g,z as m}from"./main2.js";function v(t){const e=t?t.assignedNodes({flatten:!0}):[];let o="";return[...e].map((t=>{t.nodeType===Node.TEXT_NODE&&(o+=t.textContent)})),o}function y(t,e){return e?null!==t.querySelector(`:scope > [slot="${e}"]`):[...t.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){if(!t.hasAttribute("slot"))return!0}return!1}))}var w=t`
  ${e}

  :host {
    display: block;
  }

  .menu {
    padding: var(--sl-spacing-x-small) 0;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,x=class extends a{constructor(){super(...arguments),this.typeToSelectString=""}getAllItems(t={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((e=>"menuitem"===e.getAttribute("role")&&!(!(null==t?void 0:t.includeDisabled)&&e.disabled)))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find((t=>"0"===t.getAttribute("tabindex")))}setCurrentItem(t){const e=this.getAllItems({includeDisabled:!1});let o=t.disabled?e[0]:t;e.map((t=>t.setAttribute("tabindex",t===o?"0":"-1")))}typeToSelect(t){const e=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=setTimeout((()=>this.typeToSelectString=""),750),this.typeToSelectString+=t.toLowerCase(),i||e.map((t=>t.classList.remove("sl-focus-invisible")));for(const t of e){if(v(t.shadowRoot.querySelector("slot:not([name])")).toLowerCase().trim().substring(0,this.typeToSelectString.length)===this.typeToSelectString){this.setCurrentItem(t),t.focus();break}}}handleClick(t){const e=t.target.closest("sl-menu-item");e&&!e.disabled&&s(this,"sl-select",{detail:{item:e}})}handleKeyUp(){if(!i){this.getAllItems().map((t=>t.classList.remove("sl-focus-invisible")))}}handleKeyDown(t){if("Enter"===t.key){const e=this.getCurrentItem();t.preventDefault(),e&&e.click()}if(" "===t.key&&t.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems({includeDisabled:!1}),o=this.getCurrentItem();let r=o?e.indexOf(o):0;if(e.length)return t.preventDefault(),"ArrowDown"===t.key?r++:"ArrowUp"===t.key?r--:"Home"===t.key?r=0:"End"===t.key&&(r=e.length-1),r<0&&(r=0),r>e.length-1&&(r=e.length-1),this.setCurrentItem(e[r]),void e[r].focus()}this.typeToSelect(t.key)}handleMouseDown(t){const e=t.target;"menuitem"===e.getAttribute("role")&&(this.setCurrentItem(e),i||e.classList.add("sl-focus-invisible"))}handleSlotChange(){const t=this.getAllItems({includeDisabled:!1});t.length&&this.setCurrentItem(t[0])}render(){return l`
      <div
        part="base"
        class="menu"
        role="menu"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @keyup=${this.handleKeyUp}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};function k(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function _(t){if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function O(t){var e=_(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function D(t){return t instanceof _(t).Element||t instanceof Element}function E(t){return t instanceof _(t).HTMLElement||t instanceof HTMLElement}function C(t){return"undefined"!=typeof ShadowRoot&&(t instanceof _(t).ShadowRoot||t instanceof ShadowRoot)}function S(t){return t?(t.nodeName||"").toLowerCase():null}function A(t){return((D(t)?t.ownerDocument:t.document)||window.document).documentElement}function T(t){return k(A(t)).left+O(t).scrollLeft}function $(t){return _(t).getComputedStyle(t)}function L(t){var e=$(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function P(t,e,o){void 0===o&&(o=!1);var r,n,a=A(e),i=k(t),s=E(e),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(s||!s&&!o)&&(("body"!==S(e)||L(a))&&(l=(r=e)!==_(r)&&E(r)?{scrollLeft:(n=r).scrollLeft,scrollTop:n.scrollTop}:O(r)),E(e)?((c=k(e)).x+=e.clientLeft,c.y+=e.clientTop):a&&(c.x=T(a))),{x:i.left+l.scrollLeft-c.x,y:i.top+l.scrollTop-c.y,width:i.width,height:i.height}}function B(t){return{x:t.offsetLeft,y:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}}function M(t){return"html"===S(t)?t:t.assignedSlot||t.parentNode||(C(t)?t.host:null)||A(t)}function j(t){return["html","body","#document"].indexOf(S(t))>=0?t.ownerDocument.body:E(t)&&L(t)?t:j(M(t))}function I(t,e){var o;void 0===e&&(e=[]);var r=j(t),n=r===(null==(o=t.ownerDocument)?void 0:o.body),a=_(r),i=n?[a].concat(a.visualViewport||[],L(r)?r:[]):r,s=e.concat(i);return n?s:s.concat(I(M(i)))}function z(t){return["table","td","th"].indexOf(S(t))>=0}function R(t){return E(t)&&"fixed"!==$(t).position?t.offsetParent:null}function W(t){for(var e=_(t),o=R(t);o&&z(o)&&"static"===$(o).position;)o=R(o);return o&&("html"===S(o)||"body"===S(o)&&"static"===$(o).position)?e:o||function(t){for(var e=navigator.userAgent.toLowerCase().includes("firefox"),o=M(t);E(o)&&["html","body"].indexOf(S(o))<0;){var r=$(o);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||["transform","perspective"].includes(r.willChange)||e&&"filter"===r.willChange||e&&r.filter&&"none"!==r.filter)return o;o=o.parentNode}return null}(t)||e}x.styles=w,o([r(".menu")],x.prototype,"menu",2),o([r("slot")],x.prototype,"defaultSlot",2),x=o([n("sl-menu")],x);var N="top",H="bottom",q="right",U="left",F=[N,H,q,U],K=F.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),V=[].concat(F,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),X=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Y(t){var e=new Map,o=new Set,r=[];function n(t){o.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!o.has(t)){var r=e.get(t);r&&n(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){o.has(t.name)||n(t)})),r}function G(t){return t.split("-")[0]}var J=Math.max,Q=Math.min,Z=Math.round;function tt(t,e){var o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(o&&C(o)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function et(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ot(t,e){return"viewport"===e?et(function(t){var e=_(t),o=A(t),r=e.visualViewport,n=o.clientWidth,a=o.clientHeight,i=0,s=0;return r&&(n=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=r.offsetLeft,s=r.offsetTop)),{width:n,height:a,x:i+T(t),y:s}}(t)):E(e)?function(t){var e=k(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):et(function(t){var e,o=A(t),r=O(t),n=null==(e=t.ownerDocument)?void 0:e.body,a=J(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),i=J(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-r.scrollLeft+T(t),l=-r.scrollTop;return"rtl"===$(n||o).direction&&(s+=J(o.clientWidth,n?n.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}(A(t)))}function rt(t,e,o){var r="clippingParents"===e?function(t){var e=I(M(t)),o=["absolute","fixed"].indexOf($(t).position)>=0&&E(t)?W(t):t;return D(o)?e.filter((function(t){return D(t)&&tt(t,o)&&"body"!==S(t)})):[]}(t):[].concat(e),n=[].concat(r,[o]),a=n[0],i=n.reduce((function(e,o){var r=ot(t,o);return e.top=J(r.top,e.top),e.right=Q(r.right,e.right),e.bottom=Q(r.bottom,e.bottom),e.left=J(r.left,e.left),e}),ot(t,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function nt(t){return t.split("-")[1]}function at(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function it(t){var e,o=t.reference,r=t.element,n=t.placement,a=n?G(n):null,i=n?nt(n):null,s=o.x+o.width/2-r.width/2,l=o.y+o.height/2-r.height/2;switch(a){case N:e={x:s,y:o.y-r.height};break;case H:e={x:s,y:o.y+o.height};break;case q:e={x:o.x+o.width,y:l};break;case U:e={x:o.x-r.width,y:l};break;default:e={x:o.x,y:o.y}}var c=a?at(a):null;if(null!=c){var u="y"===c?"height":"width";switch(i){case"start":e[c]=e[c]-(o[u]/2-r[u]/2);break;case"end":e[c]=e[c]+(o[u]/2-r[u]/2)}}return e}function st(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function lt(t,e){return e.reduce((function(e,o){return e[o]=t,e}),{})}function ct(t,e){void 0===e&&(e={});var o=e,r=o.placement,n=void 0===r?t.placement:r,a=o.boundary,i=void 0===a?"clippingParents":a,s=o.rootBoundary,l=void 0===s?"viewport":s,c=o.elementContext,u=void 0===c?"popper":c,d=o.altBoundary,p=void 0!==d&&d,b=o.padding,h=void 0===b?0:b,f=st("number"!=typeof h?h:lt(h,F)),g="popper"===u?"reference":"popper",m=t.elements.reference,v=t.rects.popper,y=t.elements[p?g:u],w=rt(D(y)?y:y.contextElement||A(t.elements.popper),i,l),x=k(m),_=it({reference:x,element:v,strategy:"absolute",placement:n}),O=et(Object.assign({},v,_)),E="popper"===u?O:x,C={top:w.top-E.top+f.top,bottom:E.bottom-w.bottom+f.bottom,left:w.left-E.left+f.left,right:E.right-w.right+f.right},S=t.modifiersData.offset;if("popper"===u&&S){var T=S[n];Object.keys(C).forEach((function(t){var e=[q,H].indexOf(t)>=0?1:-1,o=[N,H].indexOf(t)>=0?"y":"x";C[t]+=T[o]*e}))}return C}var ut={placement:"bottom",modifiers:[],strategy:"absolute"};function dt(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function pt(t){void 0===t&&(t={});var e=t,o=e.defaultModifiers,r=void 0===o?[]:o,n=e.defaultOptions,a=void 0===n?ut:n;return function(t,e,o){void 0===o&&(o=a);var n,i,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},ut,a),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,u={state:s,setOptions:function(o){d(),s.options=Object.assign({},a,s.options,o),s.scrollParents={reference:D(t)?I(t):t.contextElement?I(t.contextElement):[],popper:I(e)};var n,i,c=function(t){var e=Y(t);return X.reduce((function(t,o){return t.concat(e.filter((function(t){return t.phase===o})))}),[])}((n=[].concat(r,s.options.modifiers),i=n.reduce((function(t,e){var o=t[e.name];return t[e.name]=o?Object.assign({},o,e,{options:Object.assign({},o.options,e.options),data:Object.assign({},o.data,e.data)}):e,t}),{}),Object.keys(i).map((function(t){return i[t]}))));return s.orderedModifiers=c.filter((function(t){return t.enabled})),s.orderedModifiers.forEach((function(t){var e=t.name,o=t.options,r=void 0===o?{}:o,n=t.effect;if("function"==typeof n){var a=n({state:s,name:e,instance:u,options:r}),i=function(){};l.push(a||i)}})),u.update()},forceUpdate:function(){if(!c){var t=s.elements,e=t.reference,o=t.popper;if(dt(e,o)){s.rects={reference:P(e,W(o),"fixed"===s.options.strategy),popper:B(o)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(t){return s.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var n=s.orderedModifiers[r],a=n.fn,i=n.options,l=void 0===i?{}:i,d=n.name;"function"==typeof a&&(s=a({state:s,options:l,name:d,instance:u})||s)}else s.reset=!1,r=-1}}},update:(n=function(){return new Promise((function(t){u.forceUpdate(),t(s)}))},function(){return i||(i=new Promise((function(t){Promise.resolve().then((function(){i=void 0,t(n())}))}))),i}),destroy:function(){d(),c=!0}};if(!dt(t,e))return u;function d(){l.forEach((function(t){return t()})),l=[]}return u.setOptions(o).then((function(t){!c&&o.onFirstUpdate&&o.onFirstUpdate(t)})),u}}var bt={passive:!0};var ht={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ft(t){var e,o=t.popper,r=t.popperRect,n=t.placement,a=t.offsets,i=t.position,s=t.gpuAcceleration,l=t.adaptive,c=t.roundOffsets,u=!0===c?function(t){var e=t.x,o=t.y,r=window.devicePixelRatio||1;return{x:Z(Z(e*r)/r)||0,y:Z(Z(o*r)/r)||0}}(a):"function"==typeof c?c(a):a,d=u.x,p=void 0===d?0:d,b=u.y,h=void 0===b?0:b,f=a.hasOwnProperty("x"),g=a.hasOwnProperty("y"),m=U,v=N,y=window;if(l){var w=W(o),x="clientHeight",k="clientWidth";w===_(o)&&"static"!==$(w=A(o)).position&&(x="scrollHeight",k="scrollWidth"),n===N&&(v=H,h-=w[x]-r.height,h*=s?1:-1),n===U&&(m=q,p-=w[k]-r.width,p*=s?1:-1)}var O,D=Object.assign({position:i},l&&ht);return s?Object.assign({},D,((O={})[v]=g?"0":"",O[m]=f?"0":"",O.transform=(y.devicePixelRatio||1)<2?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",O)):Object.assign({},D,((e={})[v]=g?h+"px":"",e[m]=f?p+"px":"",e.transform="",e))}var gt={left:"right",right:"left",bottom:"top",top:"bottom"};function mt(t){return t.replace(/left|right|bottom|top/g,(function(t){return gt[t]}))}var vt={start:"end",end:"start"};function yt(t){return t.replace(/start|end/g,(function(t){return vt[t]}))}function wt(t,e,o){return J(t,Q(e,o))}function xt(t,e,o){return void 0===o&&(o={x:0,y:0}),{top:t.top-e.height-o.y,right:t.right-e.width+o.x,bottom:t.bottom-e.height+o.y,left:t.left-e.width-o.x}}function kt(t){return[N,q,H,U].some((function(e){return t[e]>=0}))}var _t=pt({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,a=void 0===n||n,i=r.resize,s=void 0===i||i,l=_(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&c.forEach((function(t){t.addEventListener("scroll",o.update,bt)})),s&&l.addEventListener("resize",o.update,bt),function(){a&&c.forEach((function(t){t.removeEventListener("scroll",o.update,bt)})),s&&l.removeEventListener("resize",o.update,bt)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,o=t.name;e.modifiersData[o]=it({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=void 0===r||r,a=o.adaptive,i=void 0===a||a,s=o.roundOffsets,l=void 0===s||s,c={placement:G(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,ft(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:i,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,ft(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var o=e.styles[t]||{},r=e.attributes[t]||{},n=e.elements[t];E(n)&&S(n)&&(Object.assign(n.style,o),Object.keys(r).forEach((function(t){var e=r[t];!1===e?n.removeAttribute(t):n.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach((function(t){var r=e.elements[t],n=e.attributes[t]||{},a=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:o[t]).reduce((function(t,e){return t[e]="",t}),{});E(r)&&S(r)&&(Object.assign(r.style,a),Object.keys(n).forEach((function(t){r.removeAttribute(t)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,o=t.options,r=t.name,n=o.offset,a=void 0===n?[0,0]:n,i=V.reduce((function(t,o){return t[o]=function(t,e,o){var r=G(t),n=[U,N].indexOf(r)>=0?-1:1,a="function"==typeof o?o(Object.assign({},e,{placement:t})):o,i=a[0],s=a[1];return i=i||0,s=(s||0)*n,[U,q].indexOf(r)>=0?{x:s,y:i}:{x:i,y:s}}(o,e.rects,a),t}),{}),s=i[e.placement],l=s.x,c=s.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[r]=i}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,o=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=o.mainAxis,a=void 0===n||n,i=o.altAxis,s=void 0===i||i,l=o.fallbackPlacements,c=o.padding,u=o.boundary,d=o.rootBoundary,p=o.altBoundary,b=o.flipVariations,h=void 0===b||b,f=o.allowedAutoPlacements,g=e.options.placement,m=G(g),v=l||(m===g||!h?[mt(g)]:function(t){if("auto"===G(t))return[];var e=mt(t);return[yt(t),e,yt(e)]}(g)),y=[g].concat(v).reduce((function(t,o){return t.concat("auto"===G(o)?function(t,e){void 0===e&&(e={});var o=e,r=o.placement,n=o.boundary,a=o.rootBoundary,i=o.padding,s=o.flipVariations,l=o.allowedAutoPlacements,c=void 0===l?V:l,u=nt(r),d=u?s?K:K.filter((function(t){return nt(t)===u})):F,p=d.filter((function(t){return c.indexOf(t)>=0}));0===p.length&&(p=d);var b=p.reduce((function(e,o){return e[o]=ct(t,{placement:o,boundary:n,rootBoundary:a,padding:i})[G(o)],e}),{});return Object.keys(b).sort((function(t,e){return b[t]-b[e]}))}(e,{placement:o,boundary:u,rootBoundary:d,padding:c,flipVariations:h,allowedAutoPlacements:f}):o)}),[]),w=e.rects.reference,x=e.rects.popper,k=new Map,_=!0,O=y[0],D=0;D<y.length;D++){var E=y[D],C=G(E),S="start"===nt(E),A=[N,H].indexOf(C)>=0,T=A?"width":"height",$=ct(e,{placement:E,boundary:u,rootBoundary:d,altBoundary:p,padding:c}),L=A?S?q:U:S?H:N;w[T]>x[T]&&(L=mt(L));var P=mt(L),B=[];if(a&&B.push($[C]<=0),s&&B.push($[L]<=0,$[P]<=0),B.every((function(t){return t}))){O=E,_=!1;break}k.set(E,B)}if(_)for(var M=function(t){var e=y.find((function(e){var o=k.get(e);if(o)return o.slice(0,t).every((function(t){return t}))}));if(e)return O=e,"break"},j=h?3:1;j>0;j--){if("break"===M(j))break}e.placement!==O&&(e.modifiersData[r]._skip=!0,e.placement=O,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,o=t.options,r=t.name,n=o.mainAxis,a=void 0===n||n,i=o.altAxis,s=void 0!==i&&i,l=o.boundary,c=o.rootBoundary,u=o.altBoundary,d=o.padding,p=o.tether,b=void 0===p||p,h=o.tetherOffset,f=void 0===h?0:h,g=ct(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:u}),m=G(e.placement),v=nt(e.placement),y=!v,w=at(m),x="x"===w?"y":"x",k=e.modifiersData.popperOffsets,_=e.rects.reference,O=e.rects.popper,D="function"==typeof f?f(Object.assign({},e.rects,{placement:e.placement})):f,E={x:0,y:0};if(k){if(a||s){var C="y"===w?N:U,S="y"===w?H:q,A="y"===w?"height":"width",T=k[w],$=k[w]+g[C],L=k[w]-g[S],P=b?-O[A]/2:0,M="start"===v?_[A]:O[A],j="start"===v?-O[A]:-_[A],I=e.elements.arrow,z=b&&I?B(I):{width:0,height:0},R=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},F=R[C],K=R[S],V=wt(0,_[A],z[A]),X=y?_[A]/2-P-V-F-D:M-V-F-D,Y=y?-_[A]/2+P+V+K+D:j+V+K+D,Z=e.elements.arrow&&W(e.elements.arrow),tt=Z?"y"===w?Z.clientTop||0:Z.clientLeft||0:0,et=e.modifiersData.offset?e.modifiersData.offset[e.placement][w]:0,ot=k[w]+X-et-tt,rt=k[w]+Y-et;if(a){var it=wt(b?Q($,ot):$,T,b?J(L,rt):L);k[w]=it,E[w]=it-T}if(s){var st="x"===w?N:U,lt="x"===w?H:q,ut=k[x],dt=ut+g[st],pt=ut-g[lt],bt=wt(b?Q(dt,ot):dt,ut,b?J(pt,rt):pt);k[x]=bt,E[x]=bt-ut}}e.modifiersData[r]=E}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,o=t.state,r=t.name,n=t.options,a=o.elements.arrow,i=o.modifiersData.popperOffsets,s=G(o.placement),l=at(s),c=[U,q].indexOf(s)>=0?"height":"width";if(a&&i){var u=function(t,e){return st("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:lt(t,F))}(n.padding,o),d=B(a),p="y"===l?N:U,b="y"===l?H:q,h=o.rects.reference[c]+o.rects.reference[l]-i[l]-o.rects.popper[c],f=i[l]-o.rects.reference[l],g=W(a),m=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,v=h/2-f/2,y=u[p],w=m-d[c]-u[b],x=m/2-d[c]/2+v,k=wt(y,x,w),_=l;o.modifiersData[r]=((e={})[_]=k,e.centerOffset=k-x,e)}},effect:function(t){var e=t.state,o=t.options.element,r=void 0===o?"[data-popper-arrow]":o;null!=r&&("string"!=typeof r||(r=e.elements.popper.querySelector(r)))&&tt(e.elements.popper,r)&&(e.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,o=t.name,r=e.rects.reference,n=e.rects.popper,a=e.modifiersData.preventOverflow,i=ct(e,{elementContext:"reference"}),s=ct(e,{altBoundary:!0}),l=xt(i,r),c=xt(s,n,a),u=kt(l),d=kt(c);e.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}}]});function Ot(t){const e=t.tagName.toLowerCase();return"-1"!==t.getAttribute("tabindex")&&(!t.hasAttribute("disabled")&&((!t.hasAttribute("aria-disabled")||"false"===t.getAttribute("aria-disabled"))&&(!("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))&&(!!t.offsetParent&&("hidden"!==window.getComputedStyle(t).visibility&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||(!!t.hasAttribute("tabindex")||(!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(e)))))))))}function Dt(t,e,o="vertical",r="smooth"){const n=function(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),a=n.top+e.scrollTop,i=n.left+e.scrollLeft,s=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,u=e.scrollTop+e.offsetHeight;"horizontal"!==o&&"both"!==o||(i<s?e.scrollTo({left:i,behavior:r}):i+t.clientWidth>l&&e.scrollTo({left:i-e.offsetWidth+t.clientWidth,behavior:r})),"vertical"!==o&&"both"!==o||(a<c?e.scrollTo({top:a,behavior:r}):a+t.clientHeight>u&&e.scrollTo({top:a-e.offsetHeight+t.clientHeight,behavior:r}))}function Et(t,e,o){return new Promise((async r=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=t.animate(e,c(u({},o),{duration:Ct()?0:o.duration}));n.addEventListener("cancel",r,{once:!0}),n.addEventListener("finish",r,{once:!0})}))}function Ct(){const t=window.matchMedia("(prefers-reduced-motion: reduce)");return null==t?void 0:t.matches}function St(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const o=requestAnimationFrame(e);t.addEventListener("cancel",(()=>o),{once:!0}),t.addEventListener("finish",(()=>o),{once:!0}),t.cancel()})))))}var At=new Map,Tt=new WeakMap;function $t(t,e){At.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function Lt(t,e){const o=Tt.get(t);if(o&&o[e])return o[e];const r=At.get(e);return r||{keyframes:[],options:{duration:0}}}var Pt=t`
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
    border: solid var(--sl-panel-border-width) rgb(var(--sl-panel-border-color));
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
`,Bt=0,Mt=class extends a{constructor(){super(...arguments),this.componentId="dropdown-"+ ++Bt,this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this),this.updateComplete.then((()=>{this.popover=_t(this.trigger,this.positioner,{placement:this.placement,strategy:this.hoist?"fixed":"absolute",modifiers:[{name:"flip",options:{boundary:"viewport"}},{name:"offset",options:{offset:[this.skidding,this.distance]}}]})}))}firstUpdated(){this.panel.hidden=!this.open}disconnectedCallback(){super.disconnectedCallback(),this.hide(),this.popover.destroy()}focusOnTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];t&&"function"==typeof t.focus&&t.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).filter((t=>"sl-menu"===t.tagName.toLowerCase()))[0]}handleDocumentKeyDown(t){var e;if("Escape"===t.key)return this.hide(),void this.focusOnTrigger();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var t,e;const o=this.containingElement.getRootNode()instanceof ShadowRoot?null==(e=null==(t=document.activeElement)?void 0:t.shadowRoot)?void 0:e.activeElement:document.activeElement;(null==o?void 0:o.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}}handleDocumentMouseDown(t){t.composedPath().includes(this.containingElement)||this.hide()}handleMenuItemActivate(t){Dt(t.target,this.panel)}handlePanelSelect(t){const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}handlePopoverOptionsChange(){this.popover&&this.popover.setOptions({placement:this.placement,strategy:this.hoist?"fixed":"absolute",modifiers:[{name:"flip",options:{boundary:"viewport"}},{name:"offset",options:{offset:[this.skidding,this.distance]}}]})}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(t){const e=this.getMenu(),o=e?[...e.querySelectorAll("sl-menu-item")]:[],r=o[0],n=o[o.length-1];if("Escape"===t.key)return this.focusOnTrigger(),void this.hide();if([" ","Enter"].includes(t.key))return t.preventDefault(),void(this.open?this.hide():this.show());if(["ArrowDown","ArrowUp"].includes(t.key)){if(t.preventDefault(),this.open||this.show(),"ArrowDown"===t.key&&r){return this.getMenu().setCurrentItem(r),void r.focus()}if("ArrowUp"===t.key&&n)return e.setCurrentItem(n),void n.focus()}this.open&&e&&!["Tab","Shift","Meta","Ctrl","Alt"].includes(t.key)&&e.typeToSelect(t.key)}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){if(this.trigger){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find((t=>function(t){const e=[];return function t(o){o instanceof HTMLElement&&(e.push(o),o.shadowRoot&&"open"===o.shadowRoot.mode&&t(o.shadowRoot)),[...o.querySelectorAll("*")].map((e=>t(e)))}(t),{start:e.find((t=>Ot(t)))||null,end:e.reverse().find((t=>Ot(t)))||null}}(t).start));t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}}async show(){if(!this.open)return this.open=!0,b(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,b(this,"sl-after-hide")}reposition(){this.open&&this.popover.update()}async handleOpenChange(){if(!this.disabled)if(this.updateAccessibleTrigger(),this.open){s(this,"sl-show"),this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),await St(this),this.popover.update(),this.panel.hidden=!1;const{keyframes:t,options:e}=Lt(this,"dropdown.show");await Et(this.panel,t,e),s(this,"sl-after-show")}else{s(this,"sl-hide"),this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),await St(this);const{keyframes:t,options:e}=Lt(this,"dropdown.hide");await Et(this.panel,t,e),this.panel.hidden=!0,s(this,"sl-after-hide")}}render(){return l`
      <div
        part="base"
        id=${this.componentId}
        class=${h({dropdown:!0,"dropdown--open":this.open})}
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
    `}};Mt.styles=Pt,o([r(".dropdown__trigger")],Mt.prototype,"trigger",2),o([r(".dropdown__panel")],Mt.prototype,"panel",2),o([r(".dropdown__positioner")],Mt.prototype,"positioner",2),o([d({type:Boolean,reflect:!0})],Mt.prototype,"open",2),o([d()],Mt.prototype,"placement",2),o([d({type:Boolean})],Mt.prototype,"disabled",2),o([d({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Mt.prototype,"stayOpenOnSelect",2),o([d({attribute:!1})],Mt.prototype,"containingElement",2),o([d({type:Number})],Mt.prototype,"distance",2),o([d({type:Number})],Mt.prototype,"skidding",2),o([d({type:Boolean})],Mt.prototype,"hoist",2),o([p("distance"),p("hoist"),p("placement"),p("skidding")],Mt.prototype,"handlePopoverOptionsChange",1),o([p("open",{waitUntilFirstUpdate:!0})],Mt.prototype,"handleOpenChange",1),Mt=o([n("sl-dropdown")],Mt),$t("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:150,easing:"ease"}}),$t("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:150,easing:"ease"}});var jt=t`
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
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
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
  :host(${f}:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-0));
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
`,It=class extends a{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}handleCheckedChange(){this.setAttribute("aria-checked",String(this.checked))}handleDisabledChange(){this.setAttribute("aria-disabled",String(this.disabled))}render(){return l`
      <div
        part="base"
        class=${h({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled})}
      >
        <sl-icon
          part="checked-icon"
          class="menu-item__check"
          name="check"
          library="system"
          aria-hidden="true"
        ></sl-icon>

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
    `}};It.styles=jt,o([r(".menu-item")],It.prototype,"menuItem",2),o([d({type:Boolean,reflect:!0})],It.prototype,"checked",2),o([d()],It.prototype,"value",2),o([d({type:Boolean,reflect:!0})],It.prototype,"disabled",2),o([p("checked")],It.prototype,"handleCheckedChange",1),o([p("disabled")],It.prototype,"handleDisabledChange",1),It=o([n("sl-menu-item")],It);var zt=t`
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

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
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
  .button--standard.button--default {
    background-color: rgb(var(--sl-color-neutral-0));
    border-color: rgb(var(--sl-color-neutral-300));
    color: rgb(var(--sl-color-neutral-700));
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-50));
    border-color: rgb(var(--sl-color-primary-300));
    color: rgb(var(--sl-color-primary-700));
  }

  .button--standard.button--default${f}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-50));
    border-color: rgb(var(--sl-color-primary-400));
    color: rgb(var(--sl-color-primary-700));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-100));
    border-color: rgb(var(--sl-color-primary-400));
    color: rgb(var(--sl-color-primary-700));
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: rgb(var(--sl-color-primary-600));
    border-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--primary${f}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
    color: rgb(var(--sl-color-neutral-0));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-600));
    border-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Success */
  .button--standard.button--success {
    background-color: rgb(var(--sl-color-success-600));
    border-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-success-500));
    border-color: rgb(var(--sl-color-success-500));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--success${f}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-success-600));
    border-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-neutral-0));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-success-500) / var(--sl-focus-ring-alpha));
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-success-600));
    border-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: rgb(var(--sl-color-neutral-600));
    border-color: rgb(var(--sl-color-neutral-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-neutral-500));
    border-color: rgb(var(--sl-color-neutral-500));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--neutral${f}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-neutral-500));
    border-color: rgb(var(--sl-color-neutral-500));
    color: rgb(var(--sl-color-neutral-0));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-neutral-500) / var(--sl-focus-ring-alpha));
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-neutral-600));
    border-color: rgb(var(--sl-color-neutral-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: rgb(var(--sl-color-warning-600));
    border-color: rgb(var(--sl-color-warning-600));
    color: rgb(var(--sl-color-neutral-0));
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-warning-500));
    border-color: rgb(var(--sl-color-warning-500));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--warning${f}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-warning-500));
    border-color: rgb(var(--sl-color-warning-500));
    color: rgb(var(--sl-color-neutral-0));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-warning-500) / var(--sl-focus-ring-alpha));
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-warning-600));
    border-color: rgb(var(--sl-color-warning-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: rgb(var(--sl-color-danger-600));
    border-color: rgb(var(--sl-color-danger-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-danger-500));
    border-color: rgb(var(--sl-color-danger-500));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--danger${f}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-danger-500));
    border-color: rgb(var(--sl-color-danger-500));
    color: rgb(var(--sl-color-neutral-0));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-danger-500) / var(--sl-focus-ring-alpha));
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-danger-600));
    border-color: rgb(var(--sl-color-danger-600));
    color: rgb(var(--sl-color-neutral-0));
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
    border-color: rgb(var(--sl-color-neutral-300));
    color: rgb(var(--sl-color-neutral-700));
  }

  .button--outline.button--default:hover:not(.button--disabled) {
    border-color: rgb(var(--sl-color-primary-600));
    background-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--outline.button--default${f}:not(.button--disabled) {
    border-color: rgb(var(--sl-color-primary-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: rgb(var(--sl-color-primary-700));
    background-color: rgb(var(--sl-color-primary-700));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-primary-600));
  }

  .button--outline.button--primary:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--outline.button--primary${f}:not(.button--disabled) {
    border-color: rgb(var(--sl-color-primary-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: rgb(var(--sl-color-primary-700));
    background-color: rgb(var(--sl-color-primary-700));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Success */
  .button--outline.button--success {
    border-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-success-600));
  }

  .button--outline.button--success:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--outline.button--success${f}:not(.button--disabled) {
    border-color: rgb(var(--sl-color-success-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-success-500) / var(--sl-focus-ring-alpha));
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: rgb(var(--sl-color-success-700));
    background-color: rgb(var(--sl-color-success-700));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: rgb(var(--sl-color-neutral-600));
    color: rgb(var(--sl-color-neutral-600));
  }

  .button--outline.button--neutral:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-neutral-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--outline.button--neutral${f}:not(.button--disabled) {
    border-color: rgb(var(--sl-color-neutral-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-neutral-500) / var(--sl-focus-ring-alpha));
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: rgb(var(--sl-color-neutral-700));
    background-color: rgb(var(--sl-color-neutral-700));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: rgb(var(--sl-color-warning-600));
    color: rgb(var(--sl-color-warning-600));
  }

  .button--outline.button--warning:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-warning-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--outline.button--warning${f}:not(.button--disabled) {
    border-color: rgb(var(--sl-color-warning-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-warning-500) / var(--sl-focus-ring-alpha));
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: rgb(var(--sl-color-warning-700));
    background-color: rgb(var(--sl-color-warning-700));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: rgb(var(--sl-color-danger-600));
    color: rgb(var(--sl-color-danger-600));
  }

  .button--outline.button--danger:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-danger-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--outline.button--danger${f}:not(.button--disabled) {
    border-color: rgb(var(--sl-color-danger-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-danger-500) / var(--sl-focus-ring-alpha));
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: rgb(var(--sl-color-danger-700));
    background-color: rgb(var(--sl-color-danger-700));
    color: rgb(var(--sl-color-neutral-0));
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

  .button--text${f}:not(.button--disabled) {
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
    border-left: solid 1px rgb(var(--sl-color-neutral-0) / 20%);
  }

  /* Bump focused buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus) {
    z-index: 2;
  }
`,Rt=class extends a{constructor(){super(...arguments),this.hasFocus=!1,this.hasLabel=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.type="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.submit=!1}connectedCallback(){super.connectedCallback(),this.handleSlotChange()}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleSlotChange(){this.hasLabel=y(this),this.hasPrefix=y(this,"prefix"),this.hasSuffix=y(this,"suffix")}handleBlur(){this.hasFocus=!1,s(this,"sl-blur")}handleFocus(){this.hasFocus=!0,s(this,"sl-focus")}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}render(){const t=!!this.href,e=l`
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
            class=${h({button:!0,"button--default":"default"===this.type,"button--primary":"primary"===this.type,"button--success":"success"===this.type,"button--neutral":"neutral"===this.type,"button--warning":"warning"===this.type,"button--danger":"danger"===this.type,"button--text":"text"===this.type,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--has-label":this.hasLabel,"button--has-prefix":this.hasPrefix,"button--has-suffix":this.hasSuffix})}
            href=${m(this.href)}
            target=${m(this.target)}
            download=${m(this.download)}
            rel=${m(this.target?"noreferrer noopener":void 0)}
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
            class=${h({button:!0,"button--default":"default"===this.type,"button--primary":"primary"===this.type,"button--success":"success"===this.type,"button--neutral":"neutral"===this.type,"button--warning":"warning"===this.type,"button--danger":"danger"===this.type,"button--text":"text"===this.type,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--has-label":this.hasLabel,"button--has-prefix":this.hasPrefix,"button--has-suffix":this.hasSuffix})}
            ?disabled=${this.disabled}
            type=${this.submit?"submit":"button"}
            name=${m(this.name)}
            value=${m(this.value)}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @click=${this.handleClick}
          >
            ${e}
          </button>
        `}};Rt.styles=zt,o([r(".button")],Rt.prototype,"button",2),o([g()],Rt.prototype,"hasFocus",2),o([g()],Rt.prototype,"hasLabel",2),o([g()],Rt.prototype,"hasPrefix",2),o([g()],Rt.prototype,"hasSuffix",2),o([d({reflect:!0})],Rt.prototype,"type",2),o([d({reflect:!0})],Rt.prototype,"size",2),o([d({type:Boolean,reflect:!0})],Rt.prototype,"caret",2),o([d({type:Boolean,reflect:!0})],Rt.prototype,"disabled",2),o([d({type:Boolean,reflect:!0})],Rt.prototype,"loading",2),o([d({type:Boolean,reflect:!0})],Rt.prototype,"outline",2),o([d({type:Boolean,reflect:!0})],Rt.prototype,"pill",2),o([d({type:Boolean,reflect:!0})],Rt.prototype,"circle",2),o([d({type:Boolean,reflect:!0})],Rt.prototype,"submit",2),o([d()],Rt.prototype,"name",2),o([d()],Rt.prototype,"value",2),o([d()],Rt.prototype,"href",2),o([d()],Rt.prototype,"target",2),o([d()],Rt.prototype,"download",2),Rt=o([n("sl-button")],Rt);var Wt=t`
  ${e}

  :host {
    --track-width: 2px;
    --track-color: rgb(var(--sl-color-neutral-500) / 20%);
    --indicator-color: rgb(var(--sl-color-primary-600));
    --speed: 2.5s;

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
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    transform-origin: 50% 50%;
    transform: rotate(90deg);
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      stroke-dasharray: 0.2em 3em;
      transform: rotate(0deg);
    }

    50% {
      stroke-dasharray: 2.2em 3em;
      transform: rotate(450deg);
    }

    100% {
      stroke-dasharray: 0.2em 3em;
      transform: rotate(1080deg);
    }
  }
`,Nt=class extends a{render(){return l`
      <svg part="base" class="spinner" aria-busy="true" aria-live="polite">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Nt.styles=Wt,Nt=o([n("sl-spinner")],Nt);export{St as a,Et as b,v as c,Lt as g,y as h,$t as s};
