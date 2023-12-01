<script>
  import "@shoelace-style/shoelace/dist/components/dropdown/dropdown.js";
  import "@shoelace-style/shoelace/dist/components/divider/divider.js";
  import "@shoelace-style/shoelace/dist/components/button/button.js";
  import "@shoelace-style/shoelace/dist/components/menu/menu.js";
  import "@shoelace-style/shoelace/dist/components/menu-item/menu-item.js";

  let selected = '';

  function onSelect(evt) {
    selected = evt.detail.item.value;
  }

</script>
<div class="content">
  <h1>Dropdown</h1>
  <p>
    <sl-dropdown on:sl-select={onSelect}>
      <sl-button slot="trigger" caret>Dropdown</sl-button>
      <sl-menu>
        <sl-menu-item
          type="checkbox"
          value="item1"
          checked={ selected === 'item1'}
        >Item 1</sl-menu-item>
        <sl-menu-item
          type="checkbox"
          value="item2"
          checked={ selected === 'item2'}
        >Item 2</sl-menu-item>
        <sl-divider/>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <sl-menu-item
          on:click={ () => { selected = ''; } }
        >Clear</sl-menu-item>
      </sl-menu>
    </sl-dropdown>
    <br>
    selected: { selected }
  </p>
</div>
