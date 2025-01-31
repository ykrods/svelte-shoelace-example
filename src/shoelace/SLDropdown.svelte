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
    trigger: Snippet | undefined
    onSelect?: (evt) => any | undefined
  } = $props();
</script>
<sl-dropdown onsl-select={onSelect} {...props}>
  {#if trigger}
    {@render trigger()}
  {/if}
  {@render children()}
</sl-dropdown>
