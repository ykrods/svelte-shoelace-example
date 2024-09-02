<script lang="ts">
  import "@shoelace-style/shoelace/dist/components/dropdown/dropdown";
  import "@shoelace-style/shoelace/dist/components/divider/divider";
  import "@shoelace-style/shoelace/dist/components/button/button";
  import "@shoelace-style/shoelace/dist/components/menu/menu";
  import "@shoelace-style/shoelace/dist/components/menu-item/menu-item";

  import Layout from "$src/layout/Layout.svelte";

  let selected = $state('');

  function onSelect(evt) {
    selected = evt.detail.item.value;
  }

</script>
<Layout>
  <h1>Dropdown</h1>
  <p>
    <sl-dropdown onsl-select={onSelect}>
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
        <sl-divider></sl-divider>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <sl-menu-item
          onclick={ () => { selected = ''; } }
        >Clear</sl-menu-item>
      </sl-menu>
    </sl-dropdown>
    <br>
    selected: { selected }
  </p>
</Layout>
