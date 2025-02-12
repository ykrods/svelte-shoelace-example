<script lang="ts">
  import type { Snippet } from "svelte";
  import type { SlSelectEvent } from "@shoelace-style/shoelace";

  import "@shoelace-style/shoelace/dist/components/dropdown/dropdown";


  let {
    children,
    trigger,
    onSelect,
    ...props
  }: {
    children: Snippet
    trigger: Snippet
    onSelect?: (evt: SlSelectEvent) => any
  } = $props();
</script>
<sl-dropdown onsl-select={onSelect} {...props}>
  <span slot="trigger">{@render trigger()}</span>
  {@render children()}
</sl-dropdown>
