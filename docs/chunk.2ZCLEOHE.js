import{r as e,f as t,_ as s,g as l,j as i,k as r,K as n,m as o,$ as a}from"./main2.js";import{c as d}from"./chunk.FTWX6OPR.js";var c=e`
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
`,u=class extends r{constructor(){super(...arguments),this.typeToSelectString=""}firstUpdated(){this.setAttribute("role","menu")}getAllItems(e={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((t=>"menuitem"===t.getAttribute("role")&&!(!e.includeDisabled&&t.disabled)))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find((e=>"0"===e.getAttribute("tabindex")))}setCurrentItem(e){const t=this.getAllItems({includeDisabled:!1}),s=e.disabled?t[0]:e;t.forEach((e=>{e.setAttribute("tabindex",e===s?"0":"-1")}))}typeToSelect(e){var t;const s=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout((()=>this.typeToSelectString=""),1e3),"Backspace"===e.key?e.metaKey||e.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase(),n||s.forEach((e=>e.classList.remove("sl-focus-invisible")));for(const e of s){const s=null==(t=e.shadowRoot)?void 0:t.querySelector("slot:not([name])");if(d(s).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(e),e.focus();break}}}handleClick(e){const t=e.target.closest("sl-menu-item");!1===(null==t?void 0:t.disabled)&&o(this,"sl-select",{detail:{item:t}})}handleKeyUp(){if(!n){this.getAllItems().forEach((e=>{e.classList.remove("sl-focus-invisible")}))}}handleKeyDown(e){if("Enter"===e.key){const t=this.getCurrentItem();e.preventDefault(),null==t||t.click()}if(" "===e.key&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems({includeDisabled:!1}),s=this.getCurrentItem();let l=s?t.indexOf(s):0;if(t.length>0)return e.preventDefault(),"ArrowDown"===e.key?l++:"ArrowUp"===e.key?l--:"Home"===e.key?l=0:"End"===e.key&&(l=t.length-1),l<0&&(l=0),l>t.length-1&&(l=t.length-1),this.setCurrentItem(t[l]),void t[l].focus()}this.typeToSelect(e)}handleMouseDown(e){const t=e.target;"menuitem"===t.getAttribute("role")&&(this.setCurrentItem(t),n||t.classList.add("sl-focus-invisible"))}handleSlotChange(){const e=this.getAllItems({includeDisabled:!1});e.length>0&&this.setCurrentItem(e[0])}render(){return a`
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
    `}};u.styles=c,s([l(".menu")],u.prototype,"menu",2),s([l("slot")],u.prototype,"defaultSlot",2),u=s([i("sl-menu")],u);
