import{r as e,f as t,_ as l,g as i,h as s,j as a,k as o,m as r,y as n,o as c,z as p,A as d,B as h,C as u,T as g,D as b,E as m,w as v,F as f}from"./main2.js";import{h as y,c as _}from"./chunk.4W7IZJQJ.js";var x=e`
  ${t}

  :host {
    display: block;
  }
`,k=class extends o{constructor(){super(...arguments),this.novalidate=!1}connectedCallback(){super.connectedCallback(),this.formControls=[{tag:"button",serialize:(e,t)=>e.name&&!e.disabled?t.append(e.name,e.value):null,click:e=>{"submit"===e.target.type&&this.submit()}},{tag:"input",serialize:(e,t)=>{e.name&&!e.disabled&&("checkbox"!==e.type&&"radio"!==e.type||e.checked)&&("file"!==e.type?t.append(e.name,e.value):[...e.files].map((l=>t.append(e.name,l))))},click:e=>{"submit"===e.target.type&&this.submit()},keyDown:e=>{const t=e.target;"Enter"!==e.key||e.defaultPrevented||["checkbox","file","radio"].includes(t.type)||this.submit()}},{tag:"select",serialize:(e,t)=>{if(e.name&&!e.disabled)if(e.multiple){const l=[...e.querySelectorAll("option:checked")];l.length?l.map((l=>t.append(e.name,l.value))):t.append(e.name,"")}else t.append(e.name,e.value)}},{tag:"sl-button",serialize:(e,t)=>e.name&&!e.disabled?t.append(e.name,e.value):null,click:e=>{e.target.submit&&this.submit()}},{tag:"sl-checkbox",serialize:(e,t)=>e.name&&e.checked&&!e.disabled?t.append(e.name,e.value):null},{tag:"sl-color-picker",serialize:(e,t)=>e.name&&!e.disabled?t.append(e.name,e.value):null},{tag:"sl-input",serialize:(e,t)=>e.name&&!e.disabled?t.append(e.name,e.value):null,keyDown:e=>{"Enter"!==e.key||e.defaultPrevented||this.submit()}},{tag:"sl-radio",serialize:(e,t)=>e.name&&e.checked&&!e.disabled?t.append(e.name,e.value):null},{tag:"sl-range",serialize:(e,t)=>{e.name&&!e.disabled&&t.append(e.name,e.value+"")}},{tag:"sl-select",serialize:(e,t)=>{if(e.name&&!e.disabled)if(e.multiple){const l=[...e.value];l.length?l.map((l=>t.append(e.name,l))):t.append(e.name,"")}else t.append(e.name,e.value+"")}},{tag:"sl-switch",serialize:(e,t)=>e.name&&e.checked&&!e.disabled?t.append(e.name,e.value):null},{tag:"sl-textarea",serialize:(e,t)=>e.name&&!e.disabled?t.append(e.name,e.value):null},{tag:"textarea",serialize:(e,t)=>e.name&&!e.disabled?t.append(e.name,e.value):null}]}getFormData(){const e=new FormData;return this.getFormControls().map((t=>this.serializeElement(t,e))),e}getFormControls(){const e=this.form.querySelector("slot"),t=this.formControls.map((e=>e.tag));return e.assignedElements({flatten:!0}).reduce(((e,t)=>e.concat(t,[...t.querySelectorAll("*")])),[]).filter((e=>t.includes(e.tagName.toLowerCase())))}submit(){const e=this.getFormData(),t=this.getFormControls(),l=t.filter((e=>"function"==typeof e.reportValidity));if(!this.novalidate)for(const e of l){if(!e.reportValidity())return!1}return r(this,"sl-submit",{detail:{formData:e,formControls:t}}),!0}handleClick(e){const t=e.target.tagName.toLowerCase();for(const l of this.formControls)l.tag===t&&l.click&&l.click(e)}handleKeyDown(e){const t=e.target.tagName.toLowerCase();for(const l of this.formControls)l.tag===t&&l.keyDown&&l.keyDown(e)}serializeElement(e,t){const l=e.tagName.toLowerCase();for(const i of this.formControls)if(i.tag===l)return i.serialize(e,t);return null}render(){return n`
      <div part="base" class="form" role="form" @click=${this.handleClick} @keydown=${this.handleKeyDown}>
        <slot></slot>
      </div>
    `}};k.styles=x,l([i(".form")],k.prototype,"form",2),l([s({type:Boolean,reflect:!0})],k.prototype,"novalidate",2),k=l([a("sl-form")],k);var w=(e,t)=>{const l=!!e.label||!!e.hasLabelSlot,i=!!e.helpText||!!e.hasHelpTextSlot;return n`
    <div
      part="form-control"
      class=${c({"form-control":!0,"form-control--small":"small"===e.size,"form-control--medium":"medium"===e.size,"form-control--large":"large"===e.size,"form-control--has-label":l,"form-control--has-help-text":i})}
    >
      <label
        part="label"
        id=${p(e.labelId)}
        class="form-control__label"
        for=${e.inputId}
        aria-hidden=${l?"false":"true"}
        @click=${t=>e.onLabelClick?e.onLabelClick(t):null}
      >
        <slot name="label">${e.label}</slot>
      </label>

      <div class="form-control__input">${n`${t}`}</div>

      <div
        part="help-text"
        id=${p(e.helpTextId)}
        class="form-control__help-text"
        aria-hidden=${i?"false":"true"}
      >
        <slot name="help-text">${e.helpText}</slot>
      </div>
    </div>
  `};function $(e){return[e.label||e.hasLabelSlot?e.labelId:"",e.helpText||e.hasHelpTextSlot?e.helpTextId:""].filter((e=>e)).join(" ")||void 0}var z=e`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: rgb(var(--sl-input-help-text-color));
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }
`,T={},C=d(class extends h{constructor(e){if(super(e),e.type!==u.PROPERTY&&e.type!==u.ATTRIBUTE&&e.type!==u.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===g||t===b)return t;const l=e.element,i=e.name;if(e.type===u.PROPERTY){if(t===l[i])return g}else if(e.type===u.BOOLEAN_ATTRIBUTE){if(!!t===l.hasAttribute(i))return g}else if(e.type===u.ATTRIBUTE&&l.getAttribute(i)===t+"")return g;return((e,t=T)=>{e._$AH=t})(e),t}}),I=e`
  ${t}
  ${z}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: rgb(var(--sl-input-background-color));
    border: solid var(--sl-input-border-width) rgb(var(--sl-input-border-color));
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: rgb(var(--sl-input-background-color-hover));
    border-color: rgb(var(--sl-input-border-color-hover));
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: rgb(var(--sl-input-background-color-focus));
    border-color: rgb(var(--sl-input-border-color-focus));
    box-shadow: var(--sl-focus-ring);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: rgb(var(--sl-input-color-focus));
  }

  .input--standard.input--disabled {
    background-color: rgb(var(--sl-input-background-color-disabled));
    border-color: rgb(var(--sl-input-border-color-disabled));
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: rgb(var(--sl-input-color-disabled));
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: rgb(var(--sl-input-placeholder-color-disabled));
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: rgb(var(--sl-input-filled-background-color));
    color: rgb(var(--sl-input-color));
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: rgb(var(--sl-input-filled-background-color-hover));
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: rgb(var(--sl-input-filled-background-color-focus));
    box-shadow: var(--sl-focus-ring);
  }

  .input--filled.input--disabled {
    background-color: rgb(var(--sl-input-filled-background-color-disabled));
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: rgb(var(--sl-input-color));
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) rgb(var(--sl-input-background-color-hover)) inset !important;
    -webkit-text-fill-color: rgb(var(--sl-color-primary-500));
  }

  .input__control::placeholder {
    color: rgb(var(--sl-input-placeholder-color));
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: rgb(var(--sl-input-color-hover));
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: rgb(var(--sl-input-icon-color));
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    margin: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    margin-right: var(--sl-input-spacing-small);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    margin: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    margin-right: var(--sl-input-spacing-medium);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    margin: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    margin-right: var(--sl-input-spacing-large);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    font-size: inherit;
    color: rgb(var(--sl-input-icon-color));
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: rgb(var(--sl-input-icon-color-hover));
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }
`,S=0,V=class extends o{constructor(){super(...arguments),this.inputId="input-"+ ++S,this.helpTextId=`input-help-text-${S}`,this.labelId=`input-label-${S}`,this.hasFocus=!1,this.hasHelpTextSlot=!1,this.hasLabelSlot=!1,this.isPasswordVisible=!1,this.type="text",this.size="medium",this.value="",this.filled=!1,this.pill=!1,this.helpText="",this.clearable=!1,this.togglePassword=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1}connectedCallback(){super.connectedCallback(),this.handleSlotChange=this.handleSlotChange.bind(this),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){return this.input.select()}setSelectionRange(e,t,l="none"){return this.input.setSelectionRange(e,t,l)}setRangeText(e,t,l,i="preserve"){this.input.setRangeText(e,t,l,i),this.value!==this.input.value&&(this.value=this.input.value,r(this,"sl-input"),r(this,"sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,r(this,"sl-blur")}handleChange(){this.value=this.input.value,r(this,"sl-change")}handleClearClick(e){this.value="",r(this,"sl-clear"),r(this,"sl-input"),r(this,"sl-change"),this.input.focus(),e.stopPropagation()}handleDisabledChange(){this.input&&(this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity())}handleFocus(){this.hasFocus=!0,r(this,"sl-focus")}handleInput(){this.value=this.input.value,r(this,"sl-input")}handleInvalid(){this.invalid=!0}handlePasswordToggle(){this.isPasswordVisible=!this.isPasswordVisible}handleSlotChange(){this.hasHelpTextSlot=y(this,"help-text"),this.hasLabelSlot=y(this,"label")}handleValueChange(){this.input&&(this.invalid=!this.input.checkValidity())}render(){var e,t;return w({inputId:this.inputId,label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpTextId:this.helpTextId,helpText:this.helpText,hasHelpTextSlot:this.hasHelpTextSlot,size:this.size},n`
        <div
          part="base"
          class=${c({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":0===(null==(e=this.value)?void 0:e.length),"input--invalid":this.invalid})}
        >
          <span part="prefix" class="input__prefix">
            <slot name="prefix"></slot>
          </span>

          <input
            part="input"
            id=${this.inputId}
            class="input__control"
            type=${"password"===this.type&&this.isPasswordVisible?"text":this.type}
            name=${p(this.name)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            placeholder=${p(this.placeholder)}
            minlength=${p(this.minlength)}
            maxlength=${p(this.maxlength)}
            min=${p(this.min)}
            max=${p(this.max)}
            step=${p(this.step)}
            .value=${C(this.value)}
            autocapitalize=${p(this.autocapitalize)}
            autocomplete=${p(this.autocomplete)}
            autocorrect=${p(this.autocorrect)}
            ?autofocus=${this.autofocus}
            spellcheck=${p(this.spellcheck)}
            pattern=${p(this.pattern)}
            inputmode=${p(this.inputmode)}
            aria-labelledby=${p($({label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpText:this.helpText,helpTextId:this.helpTextId,hasHelpTextSlot:this.hasHelpTextSlot}))}
            aria-invalid=${this.invalid?"true":"false"}
            @change=${this.handleChange}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          />

          ${this.clearable&&(null==(t=this.value)?void 0:t.length)>0?n`
                <button
                  part="clear-button"
                  class="input__clear"
                  type="button"
                  @click=${this.handleClearClick}
                  tabindex="-1"
                >
                  <slot name="clear-icon">
                    <sl-icon name="x-circle" library="system"></sl-icon>
                  </slot>
                </button>
              `:""}
          ${this.togglePassword?n`
                <button
                  part="password-toggle-button"
                  class="input__password-toggle"
                  type="button"
                  @click=${this.handlePasswordToggle}
                  tabindex="-1"
                >
                  ${this.isPasswordVisible?n`
                        <slot name="show-password-icon">
                          <sl-icon name="eye-slash" library="system"></sl-icon>
                        </slot>
                      `:n`
                        <slot name="hide-password-icon">
                          <sl-icon name="eye" library="system"></sl-icon>
                        </slot>
                      `}
                </button>
              `:""}

          <span part="suffix" class="input__suffix">
            <slot name="suffix"></slot>
          </span>
        </div>
      `)}};V.styles=I,l([i(".input__control")],V.prototype,"input",2),l([m()],V.prototype,"hasFocus",2),l([m()],V.prototype,"hasHelpTextSlot",2),l([m()],V.prototype,"hasLabelSlot",2),l([m()],V.prototype,"isPasswordVisible",2),l([s({reflect:!0})],V.prototype,"type",2),l([s({reflect:!0})],V.prototype,"size",2),l([s()],V.prototype,"name",2),l([s()],V.prototype,"value",2),l([s({type:Boolean,reflect:!0})],V.prototype,"filled",2),l([s({type:Boolean,reflect:!0})],V.prototype,"pill",2),l([s()],V.prototype,"label",2),l([s({attribute:"help-text"})],V.prototype,"helpText",2),l([s({type:Boolean})],V.prototype,"clearable",2),l([s({attribute:"toggle-password",type:Boolean})],V.prototype,"togglePassword",2),l([s()],V.prototype,"placeholder",2),l([s({type:Boolean,reflect:!0})],V.prototype,"disabled",2),l([s({type:Boolean,reflect:!0})],V.prototype,"readonly",2),l([s({type:Number})],V.prototype,"minlength",2),l([s({type:Number})],V.prototype,"maxlength",2),l([s()],V.prototype,"min",2),l([s()],V.prototype,"max",2),l([s({type:Number})],V.prototype,"step",2),l([s()],V.prototype,"pattern",2),l([s({type:Boolean,reflect:!0})],V.prototype,"required",2),l([s({type:Boolean,reflect:!0})],V.prototype,"invalid",2),l([s()],V.prototype,"autocapitalize",2),l([s()],V.prototype,"autocorrect",2),l([s()],V.prototype,"autocomplete",2),l([s({type:Boolean})],V.prototype,"autofocus",2),l([s({type:Boolean})],V.prototype,"spellcheck",2),l([s()],V.prototype,"inputmode",2),l([v("disabled")],V.prototype,"handleDisabledChange",1),l([v("helpText"),v("label")],V.prototype,"handleSlotChange",1),l([v("value")],V.prototype,"handleValueChange",1),V=l([a("sl-input")],V);var L=e`
  ${t}
  ${z}

  :host {
    display: block;
  }

  .select {
    display: block;
  }

  .select__control {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .select__menu {
    max-height: 50vh;
    overflow: auto;
  }

  /* Standard selects */
  .select--standard .select__control {
    background-color: rgb(var(--sl-input-background-color));
    border: solid var(--sl-input-border-width) rgb(var(--sl-input-border-color));
    color: rgb(var(--sl-input-color));
  }

  .select--standard:not(.select--disabled) .select__control:hover {
    background-color: rgb(var(--sl-input-background-color-hover));
    border-color: rgb(var(--sl-input-border-color-hover));
    color: rgb(var(--sl-input-color-hover));
  }

  .select--standard.select--focused:not(.select--disabled) .select__control {
    background-color: rgb(var(--sl-input-background-color-focus));
    border-color: rgb(var(--sl-input-border-color-focus));
    box-shadow: var(--sl-focus-ring);
    outline: none;
    color: rgb(var(--sl-input-color-focus));
  }

  .select--standard.select--disabled .select__control {
    background-color: rgb(var(--sl-input-background-color-disabled));
    border-color: rgb(var(--sl-input-border-color-disabled));
    color: rgb(var(--sl-input-color-disabled));
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  /* Filled selects */
  .select--filled .select__control {
    border: none;
    background-color: rgb(var(--sl-input-filled-background-color));
    color: rgb(var(--sl-input-color));
  }

  .select--filled:hover:not(.select--disabled) .select__control {
    background-color: rgb(var(--sl-input-filled-background-color-hover));
  }

  .select--filled.select--focused:not(.select--disabled) .select__control {
    background-color: rgb(var(--sl-input-filled-background-color-focus));
    box-shadow: var(--sl-focus-ring);
  }

  .select--filled.select--disabled .select__control {
    background-color: rgb(var(--sl-input-filled-background-color-disabled));
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--disabled .select__tags,
  .select--disabled .select__clear {
    pointer-events: none;
  }

  .select__prefix {
    display: inline-flex;
    align-items: center;
    color: rgb(var(--sl-input-placeholder-color));
  }

  .select__label {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .select__clear {
    flex: 0 0 auto;
    width: 1.25em;
  }

  .select__suffix {
    display: inline-flex;
    align-items: center;
    color: rgb(var(--sl-input-placeholder-color));
  }

  .select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--sl-transition-medium) transform ease;
  }

  .select--open .select__icon {
    transform: rotate(-180deg);
  }

  /* Placeholder */
  .select--placeholder-visible .select__label {
    color: rgb(var(--sl-input-placeholder-color));
  }

  .select--disabled.select--placeholder-visible .select__label {
    color: rgb(var(--sl-input-placeholder-color-disabled));
  }

  /* Tags */
  .select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-left: var(--sl-spacing-2x-small);
  }

  /* Hidden input (for form control validation to show) */
  .select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .select--small .select__control {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
  }

  .select--small .select__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-small);
  }

  .select--small .select__label {
    margin: 0 var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-right: var(--sl-input-spacing-small);
  }

  .select--small .select__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-small);
  }

  .select--small .select__icon {
    margin-right: var(--sl-input-spacing-small);
  }

  .select--small .select__tags {
    padding-bottom: 2px;
  }

  .select--small .select__tags sl-tag {
    padding-top: 2px;
  }

  .select--small .select__tags sl-tag:not(:last-of-type) {
    margin-right: var(--sl-spacing-2x-small);
  }

  .select--small.select--has-tags .select__label {
    margin-left: 0;
  }

  /* Medium */
  .select--medium .select__control {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
  }

  .select--medium .select__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-medium);
  }

  .select--medium .select__label {
    margin: 0 var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-right: var(--sl-input-spacing-medium);
  }

  .select--medium .select__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-medium);
  }

  .select--medium .select__icon {
    margin-right: var(--sl-input-spacing-medium);
  }

  .select--medium .select__tags {
    padding-bottom: 3px;
  }

  .select--medium .select__tags sl-tag {
    padding-top: 3px;
  }

  .select--medium .select__tags sl-tag:not(:last-of-type) {
    margin-right: var(--sl-spacing-2x-small);
  }

  .select--medium.select--has-tags .select__label {
    margin-left: 0;
  }

  /* Large */
  .select--large .select__control {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
  }

  .select--large .select__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-large);
  }

  .select--large .select__label {
    margin: 0 var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-right: var(--sl-input-spacing-large);
  }

  .select--large .select__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-large);
  }

  .select--large .select__icon {
    margin-right: var(--sl-input-spacing-large);
  }

  .select--large .select__tags {
    padding-bottom: 4px;
  }
  .select--large .select__tags sl-tag {
    padding-top: 4px;
  }

  .select--large .select__tags sl-tag:not(:last-of-type) {
    margin-right: var(--sl-spacing-2x-small);
  }

  .select--large.select--has-tags .select__label {
    margin-left: 0;
  }

  /*
   * Pill modifier
   */
  .select--pill.select--small .select__control {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__control {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__control {
    border-radius: var(--sl-input-height-large);
  }
`,F=0,B=class extends o{constructor(){super(...arguments),this.inputId="select-"+ ++F,this.helpTextId=`select-help-text-${F}`,this.labelId=`select-label-${F}`,this.hasFocus=!1,this.hasHelpTextSlot=!1,this.hasLabelSlot=!1,this.isOpen=!1,this.displayLabel="",this.displayTags=[],this.multiple=!1,this.maxTagsVisible=3,this.disabled=!1,this.name="",this.placeholder="",this.size="medium",this.hoist=!1,this.value="",this.filled=!1,this.pill=!1,this.required=!1,this.clearable=!1,this.invalid=!1}connectedCallback(){super.connectedCallback(),this.handleSlotChange=this.handleSlotChange.bind(this),this.resizeObserver=new ResizeObserver((()=>this.resizeMenu())),this.updateComplete.then((()=>{this.resizeObserver.observe(this),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange),this.syncItemsFromValue()}))}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}getItemLabel(e){const t=e.shadowRoot.querySelector("slot:not([name])");return _(t)}getItems(){return[...this.querySelectorAll("sl-menu-item")]}getValueAsArray(){return this.multiple&&""===this.value?[]:Array.isArray(this.value)?this.value:[this.value]}handleBlur(){this.isOpen||(this.hasFocus=!1,r(this,"sl-blur"))}handleClearClick(e){e.stopPropagation(),this.value=this.multiple?[]:"",r(this,"sl-clear"),this.syncItemsFromValue()}handleDisabledChange(){this.disabled&&this.isOpen&&this.dropdown.hide(),this.input&&(this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity())}handleFocus(){this.hasFocus||(this.hasFocus=!0,r(this,"sl-focus"))}handleKeyDown(e){const t=e.target,l=this.getItems(),i=l[0],s=l[l.length-1];if("sl-tag"!==t.tagName.toLowerCase())if("Tab"!==e.key){if(["ArrowDown","ArrowUp"].includes(e.key)){if(e.preventDefault(),this.isOpen||this.dropdown.show(),"ArrowDown"===e.key&&i)return this.menu.setCurrentItem(i),void i.focus();if("ArrowUp"===e.key&&s)return this.menu.setCurrentItem(s),void s.focus()}e.ctrlKey||e.metaKey||this.isOpen||1!==e.key.length||(e.stopPropagation(),e.preventDefault(),this.dropdown.show(),this.menu.typeToSelect(e.key))}else this.isOpen&&this.dropdown.hide()}handleLabelClick(){var e;(null==(e=this.shadowRoot)?void 0:e.querySelector(".select__control")).focus()}handleMenuSelect(e){var t;const l=e.detail.item;this.multiple?this.value=(null==(t=this.value)?void 0:t.includes(l.value))?this.value.filter((e=>e!==l.value)):[...this.value,l.value]:this.value=l.value,this.syncItemsFromValue()}handleMenuShow(){this.resizeMenu(),this.isOpen=!0}handleMenuHide(){this.isOpen=!1,this.control.focus()}handleMultipleChange(){const e=this.getValueAsArray();this.value=this.multiple?e:e[0]||"",this.syncItemsFromValue()}async handleSlotChange(){this.hasHelpTextSlot=y(this,"help-text"),this.hasLabelSlot=y(this,"label");const e=this.getItems(),t=[];e.map((e=>{t.includes(e.value)&&console.error(`Duplicate value found in <sl-select> menu item: '${e.value}'`,e),t.push(e.value)})),await Promise.all(e.map((e=>e.render))).then((()=>this.syncItemsFromValue()))}handleTagInteraction(e){e.composedPath().find((e=>{if(e instanceof HTMLElement){return e.classList.contains("tag__remove")}return!1}))&&e.stopPropagation()}async handleValueChange(){this.syncItemsFromValue(),await this.updateComplete,this.invalid=!this.input.checkValidity(),r(this,"sl-change")}resizeMenu(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector(".select__control");this.menu.style.width=`${t.clientWidth}px`,this.dropdown&&this.dropdown.reposition()}syncItemsFromValue(){const e=this.getItems(),t=this.getValueAsArray();if(e.map((e=>e.checked=t.includes(e.value))),this.multiple){const l=e.filter((e=>t.includes(e.value)));if(this.displayLabel=l[0]?this.getItemLabel(l[0]):"",this.displayTags=l.map((e=>n`
          <sl-tag
            exportparts="base:tag"
            type="neutral"
            size=${this.size}
            ?pill=${this.pill}
            removable
            @click=${this.handleTagInteraction}
            @keydown=${this.handleTagInteraction}
            @sl-remove=${t=>{t.stopPropagation(),this.disabled||(e.checked=!1,this.syncValueFromItems())}}
          >
            ${this.getItemLabel(e)}
          </sl-tag>
        `)),this.maxTagsVisible>0&&this.displayTags.length>this.maxTagsVisible){const e=this.displayTags.length;this.displayLabel="",this.displayTags=this.displayTags.slice(0,this.maxTagsVisible),this.displayTags.push(n`
          <sl-tag exportparts="base:tag" type="neutral" size=${this.size}> +${e-this.maxTagsVisible} </sl-tag>
        `)}}else{const l=e.filter((e=>e.value===t[0]))[0];this.displayLabel=l?this.getItemLabel(l):"",this.displayTags=[]}}syncValueFromItems(){const e=this.getItems().filter((e=>e.checked)).map((e=>e.value));this.multiple?this.value=this.value.filter((t=>e.includes(t))):this.value=e.length>0?e[0]:""}render(){var e,t;const l=this.multiple?(null==(e=this.value)?void 0:e.length)>0:""!==this.value;return w({inputId:this.inputId,label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpTextId:this.helpTextId,helpText:this.helpText,hasHelpTextSlot:this.hasHelpTextSlot,size:this.size,onLabelClick:()=>this.handleLabelClick()},n`
        <sl-dropdown
          part="base"
          .hoist=${this.hoist}
          .stayOpenOnSelect=${this.multiple}
          .containingElement=${this}
          ?disabled=${this.disabled}
          class=${c({select:!0,"select--open":this.isOpen,"select--empty":0===(null==(t=this.value)?void 0:t.length),"select--focused":this.hasFocus,"select--clearable":this.clearable,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--standard":!this.filled,"select--filled":this.filled,"select--has-tags":this.multiple&&this.displayTags.length>0,"select--placeholder-visible":""===this.displayLabel,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size,"select--pill":this.pill,"select--invalid":this.invalid})}
          @sl-show=${this.handleMenuShow}
          @sl-hide=${this.handleMenuHide}
        >
          <div
            part="control"
            slot="trigger"
            id=${this.inputId}
            class="select__control"
            role="combobox"
            aria-labelledby=${p($({label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpText:this.helpText,helpTextId:this.helpTextId,hasHelpTextSlot:this.hasHelpTextSlot}))}
            aria-haspopup="true"
            aria-expanded=${this.isOpen?"true":"false"}
            tabindex=${this.disabled?"-1":"0"}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          >
            <span part="prefix" class="select__prefix">
              <slot name="prefix"></slot>
            </span>

            <div class="select__label">
              ${this.displayTags.length?n` <span part="tags" class="select__tags"> ${this.displayTags} </span> `:this.displayLabel||this.placeholder}
            </div>

            ${this.clearable&&l?n`
                  <sl-icon-button
                    exportparts="base:clear-button"
                    class="select__clear"
                    name="x-circle"
                    library="system"
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  ></sl-icon-button>
                `:""}

            <span part="suffix" class="select__suffix">
              <slot name="suffix"></slot>
            </span>

            <span part="icon" class="select__icon" aria-hidden="true">
              <sl-icon name="chevron-down" library="system"></sl-icon>
            </span>

            <!-- The hidden input tricks the browser's built-in validation so it works as expected. We use an input
            instead of a select because, otherwise, iOS will show a list of options during validation. -->
            <input
              class="select__hidden-select"
              aria-hidden="true"
              ?required=${this.required}
              .value=${l?"1":""}
              tabindex="-1"
            />
          </div>

          <sl-menu part="menu" class="select__menu" @sl-select=${this.handleMenuSelect}>
            <slot @slotchange=${this.handleSlotChange}></slot>
          </sl-menu>
        </sl-dropdown>
      `)}};B.styles=L,l([i(".select")],B.prototype,"dropdown",2),l([i(".select__control")],B.prototype,"control",2),l([i(".select__hidden-select")],B.prototype,"input",2),l([i(".select__menu")],B.prototype,"menu",2),l([m()],B.prototype,"hasFocus",2),l([m()],B.prototype,"hasHelpTextSlot",2),l([m()],B.prototype,"hasLabelSlot",2),l([m()],B.prototype,"isOpen",2),l([m()],B.prototype,"displayLabel",2),l([m()],B.prototype,"displayTags",2),l([s({type:Boolean,reflect:!0})],B.prototype,"multiple",2),l([s({attribute:"max-tags-visible",type:Number})],B.prototype,"maxTagsVisible",2),l([s({type:Boolean,reflect:!0})],B.prototype,"disabled",2),l([s()],B.prototype,"name",2),l([s()],B.prototype,"placeholder",2),l([s()],B.prototype,"size",2),l([s({type:Boolean})],B.prototype,"hoist",2),l([s()],B.prototype,"value",2),l([s({type:Boolean,reflect:!0})],B.prototype,"filled",2),l([s({type:Boolean,reflect:!0})],B.prototype,"pill",2),l([s()],B.prototype,"label",2),l([s({attribute:"help-text"})],B.prototype,"helpText",2),l([s({type:Boolean,reflect:!0})],B.prototype,"required",2),l([s({type:Boolean})],B.prototype,"clearable",2),l([s({type:Boolean,reflect:!0})],B.prototype,"invalid",2),l([v("disabled")],B.prototype,"handleDisabledChange",1),l([v("multiple")],B.prototype,"handleMultipleChange",1),l([v("helpText"),v("label")],B.prototype,"handleSlotChange",1),l([v("value",{waitUntilFirstUpdate:!0})],B.prototype,"handleValueChange",1),B=l([a("sl-select")],B);var P=e`
  ${t}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Type modifiers
   */

  .tag--primary {
    background-color: rgb(var(--sl-color-primary-50));
    border-color: rgb(var(--sl-color-primary-200));
    color: rgb(var(--sl-color-primary-800));
  }

  .tag--success {
    background-color: rgb(var(--sl-color-success-50));
    border-color: rgb(var(--sl-color-success-200));
    color: rgb(var(--sl-color-success-800));
  }

  .tag--neutral {
    background-color: rgb(var(--sl-color-neutral-50));
    border-color: rgb(var(--sl-color-neutral-200));
    color: rgb(var(--sl-color-neutral-800));
  }

  .tag--warning {
    background-color: rgb(var(--sl-color-warning-50));
    border-color: rgb(var(--sl-color-warning-200));
    color: rgb(var(--sl-color-warning-800));
  }

  .tag--danger {
    background-color: rgb(var(--sl-color-danger-50));
    border-color: rgb(var(--sl-color-danger-200));
    color: rgb(var(--sl-color-danger-800));
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--small .tag__remove {
    margin-left: var(--sl-spacing-2x-small);
    margin-right: calc(-1 * var(--sl-spacing-3x-small));
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag__remove {
    margin-left: var(--sl-spacing-2x-small);
    margin-right: calc(-1 * var(--sl-spacing-2x-small));
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-left: var(--sl-spacing-2x-small);
    margin-right: calc(-1 * var(--sl-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,D=class extends o{constructor(){super(...arguments),this.type="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){r(this,"sl-remove")}render(){return n`
      <span
        part="base"
        class=${c({tag:!0,"tag--primary":"primary"===this.type,"tag--success":"success"===this.type,"tag--neutral":"neutral"===this.type,"tag--warning":"warning"===this.type,"tag--danger":"danger"===this.type,"tag--text":"text"===this.type,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.removable?n`
              <sl-icon-button
                exportparts="base:remove-button"
                name="x"
                library="system"
                class="tag__remove"
                @click=${this.handleRemoveClick}
              ></sl-icon-button>
            `:""}
      </span>
    `}};D.styles=P,l([s({reflect:!0})],D.prototype,"type",2),l([s({reflect:!0})],D.prototype,"size",2),l([s({type:Boolean,reflect:!0})],D.prototype,"pill",2),l([s({type:Boolean})],D.prototype,"removable",2),D=l([a("sl-tag")],D);var A=e`
  ${t}

  :host {
    display: inline-block;
  }

  .checkbox {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: rgb(var(--sl-input-color));
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) rgb(var(--sl-input-border-color));
    border-radius: 2px;
    background-color: rgb(var(--sl-input-background-color));
    color: rgb(var(--sl-color-neutral-0));
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__control .checkbox__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .checkbox__control .checkbox__icon svg {
    width: 100%;
    height: 100%;
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: rgb(var(--sl-input-border-color-hover));
    background-color: rgb(var(--sl-input-background-color-hover));
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled)
    .checkbox__input${f}
    ~ .checkbox__control {
    border-color: rgb(var(--sl-input-border-color-focus));
    background-color: rgb(var(--sl-input-background-color-focus));
    box-shadow: var(--sl-focus-ring);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: rgb(var(--sl-color-primary-600));
    background-color: rgb(var(--sl-color-primary-600));
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: rgb(var(--sl-color-primary-500));
    background-color: rgb(var(--sl-color-primary-500));
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input${f} ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled)
    .checkbox__input${f}
    ~ .checkbox__control {
    border-color: rgb(var(--sl-color-primary-500));
    background-color: rgb(var(--sl-color-primary-500));
    box-shadow: var(--sl-focus-ring);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    line-height: var(--sl-toggle-size);
    margin-left: 0.5em;
    user-select: none;
  }
`,H=0,O=class extends o{constructor(){super(...arguments),this.inputId="checkbox-"+ ++H,this.labelId=`checkbox-label-${H}`,this.hasFocus=!1,this.disabled=!1,this.required=!1,this.checked=!1,this.indeterminate=!1,this.invalid=!1}firstUpdated(){this.invalid=!this.input.checkValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,r(this,"sl-change")}handleBlur(){this.hasFocus=!1,r(this,"sl-blur")}handleDisabledChange(){this.input&&(this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity())}handleFocus(){this.hasFocus=!0,r(this,"sl-focus")}handleStateChange(){this.invalid=!this.input.checkValidity()}render(){return n`
      <label
        part="base"
        class=${c({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate})}
        for=${this.inputId}
      >
        <input
          id=${this.inputId}
          class="checkbox__input"
          type="checkbox"
          name=${p(this.name)}
          value=${p(this.value)}
          .indeterminate=${C(this.indeterminate)}
          .checked=${C(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="checkbox"
          aria-checked=${this.checked?"true":"false"}
          aria-labelledby=${this.labelId}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span part="control" class="checkbox__control">
          ${this.checked?n`
                <span part="checked-icon" class="checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(3.428571, 3.428571)">
                          <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                          <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              `:""}
          ${!this.checked&&this.indeterminate?n`
                <span part="indeterminate-icon" class="checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(2.285714, 6.857143)">
                          <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              `:""}
        </span>

        <span part="label" id=${this.labelId} class="checkbox__label">
          <slot></slot>
        </span>
      </label>
    `}};O.styles=A,l([i('input[type="checkbox"]')],O.prototype,"input",2),l([m()],O.prototype,"hasFocus",2),l([s()],O.prototype,"name",2),l([s()],O.prototype,"value",2),l([s({type:Boolean,reflect:!0})],O.prototype,"disabled",2),l([s({type:Boolean,reflect:!0})],O.prototype,"required",2),l([s({type:Boolean,reflect:!0})],O.prototype,"checked",2),l([s({type:Boolean,reflect:!0})],O.prototype,"indeterminate",2),l([s({type:Boolean,reflect:!0})],O.prototype,"invalid",2),l([v("disabled")],O.prototype,"handleDisabledChange",1),l([v("checked",{waitUntilFirstUpdate:!0}),v("indeterminate",{waitUntilFirstUpdate:!0})],O.prototype,"handleStateChange",1),O=l([a("sl-checkbox")],O);
