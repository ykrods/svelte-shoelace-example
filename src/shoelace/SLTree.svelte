<script lang="ts">
  import type { Snippet } from "svelte";
  import type { SlSelectionChangeEvent } from "@shoelace-style/shoelace";

  import "@shoelace-style/shoelace/dist/components/tree/tree.js";

  type Props = {
    children: Snippet
    expandIcon?: Snippet
    collapseIcon?: Snippet
    onSelectionChange?: (e: SlSelectionChangeEvent) => any
  };

  let {
    children,
    expandIcon,
    collapseIcon,
    onSelectionChange,
  } : Props = $props();

</script>
<sl-tree onsl-selection-change={onSelectionChange}>
  {#if expandIcon}
    <span slot="expand-icon">{@render expandIcon() }</span>
  {/if}
  {#if collapseIcon}
    <span slot="collapse-icon">{@render collapseIcon()}</span>
  {/if}
  {@render children()}
</sl-tree>
