<script lang="ts">
  import type { Snippet } from "svelte";

  import type { SlButton } from "@shoelace-style/shoelace";
  import "@shoelace-style/shoelace/dist/components/button/button";


  type Props = {
    children: Snippet;
  } & Partial<Pick<SlButton,
    | "caret"
    | "disabled"
    | "form"
    | "onclick"
    | "type"
    | "variant"
  >>;

  let {
    children,
    ...props
  }: Props = $props();
</script>
<sl-button {...props}>
  {@render children()}
</sl-button>
