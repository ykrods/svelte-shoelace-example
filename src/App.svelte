<script lang="ts">
  import "@shoelace-style/shoelace/dist/components/button/button.js";
  import "@shoelace-style/shoelace/dist/components/icon-button/icon-button.js";

  import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

  setBasePath("/svelte-shoelace-example/shoelace/");
</script>
<div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <sl-button onclick={() => console.log("btn")}>button</sl-button>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <sl-icon-button
    name="moon"
    label="light mode"
    onclick={() => console.log("foo")}
  />
</div>
