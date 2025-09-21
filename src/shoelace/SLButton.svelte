<script lang="ts">
  import type { Snippet } from "svelte";
  import type { SlButton } from "@shoelace-style/shoelace";

  import type { BaseProps } from "./types";

  import "@shoelace-style/shoelace/dist/components/button/button";
  import { slProps } from "./lib"

  type Props = {
    children: Snippet;
  } & Partial<Pick<SlButton,
    | "caret"
    | "disabled"
    | "form"
    | "onclick"
    | "type"
    | "variant"
  >> & BaseProps;

  let {
    children,
    ...props
  }: Props = $props();

</script>
<sl-button {...slProps(props)}>
  {@render children()}
</sl-button>
