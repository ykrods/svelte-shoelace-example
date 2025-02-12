<script lang="ts">
  import type { Snippet } from "svelte";

  import type { SlMenuItem } from "@shoelace-style/shoelace";
  import "@shoelace-style/shoelace/dist/components/menu-item/menu-item";


  let {
    children,
    onclick,
  }: {
    children: Snippet
    onclick?: SlMenuItem["onclick"]
  } = $props();
</script>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<sl-menu-item {onclick}>
  {@render children()}
</sl-menu-item>
