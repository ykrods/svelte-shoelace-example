<script lang="ts">
  import type { Snippet } from "svelte";
  import type { SlSelectEvent } from "@shoelace-style/shoelace";

  import "@shoelace-style/shoelace/dist/components/dropdown/dropdown";


  let {
    children,
    onSelect,
    ...props
  }: {
    children: Snippet
    onSelect?: (evt: SlSelectEvent) => any
  } = $props();
</script>
<sl-dropdown onsl-select={onSelect} {...props}>
  {@render children()}
</sl-dropdown>
