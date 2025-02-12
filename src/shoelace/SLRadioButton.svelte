<script lang="ts">
  import type { Snippet } from "svelte";
  import type { SlRadioButton } from "@shoelace-style/shoelace";

  import "@shoelace-style/shoelace/dist/components/radio-button/radio-button";

  
  type Props = {
    children: Snippet;
    value: SlRadioButton["value"];
  } & Partial<Pick<SlRadioButton,
    | "disabled"
    | "size"
    | "pill"
  >>;

  let {
    children,
    ...props
  }: Props = $props();
</script>
<sl-radio-button {...props}>
  {@render children()}
</sl-radio-button>
