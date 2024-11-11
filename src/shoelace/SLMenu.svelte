<script lang="ts">
  import type { Snippet } from "svelte";

  import "@shoelace-style/shoelace/dist/components/menu/menu";

  let {
    children,
  }: {
    children: Snippet
  } = $props();
</script>
<sl-menu>{@render children()}</sl-menu>
