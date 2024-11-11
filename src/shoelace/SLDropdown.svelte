<script lang="ts">
  import type { Snippet } from "svelte";

  import "@shoelace-style/shoelace/dist/components/dropdown/dropdown";


  let {
    children,
    trigger = null,
    onSelect = null,
    ...props
  }: {
    children: Snippet
    trigger: Snippet
    onSelect?: (evt) => any
  } = $props();
</script>
<sl-dropdown onsl-select={onSelect} {...props}>
  {@render trigger()}
  {@render children()}
</sl-dropdown>
