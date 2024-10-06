<script lang="ts">
  import type { Snippet } from "svelte";

  import SlRadioButton from "@shoelace-style/shoelace/dist/components/radio-button/radio-button";
  
  let {
    children,
    ...props
  }: {
    children: Snippet
    value: SlRadioButton["value"]
  } = $props();
</script>
<sl-radio-button {...props}>
  {@render children()}
</sl-radio-button>
