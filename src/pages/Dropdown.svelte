<script>
  import "@shoelace-style/shoelace/dist/components/dropdown/dropdown";
  import "@shoelace-style/shoelace/dist/components/button/button";
  import "@shoelace-style/shoelace/dist/components/menu/menu";
  import "@shoelace-style/shoelace/dist/components/menu-item/menu-item";

  let selected = '';
</script>
<div class="content">
  <h1>Dropdown</h1>
  <p>
    <sl-dropdown>
      <sl-button slot="trigger" caret>Dropdown</sl-button>
      <sl-menu>
        <sl-menu-item
          on:click={() => { selected = 'item1'; }}
          checked={ selected === 'item1'}
        >Item 1</sl-menu-item>
        <sl-menu-item
          on:click={() => { selected = 'item2'; }}
          checked={ selected === 'item2'}
        >Item 2</sl-menu-item>
      </sl-menu>
    </sl-dropdown>
    <br>
    selected: { selected }
  </p>
</div>
