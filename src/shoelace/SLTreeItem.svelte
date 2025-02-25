<script lang="ts">
  import type { Snippet } from "svelte";
  import type { SlTreeItem } from "@shoelace-style/shoelace";

  import "@shoelace-style/shoelace/dist/components/tree-item/tree-item";

  type Props = {
    children: Snippet
    key: string /** key for identify tree item */
  } & Partial<Pick<SlTreeItem, 
    | "expanded" 
    | "selected"
    | "disabled"
    >>;

  let {
    children,
    key,
    ...props
  } : Props = $props();
</script>
<sl-tree-item {...props} data-key={key}>
  {@render children()}
</sl-tree-item>
