<script lang="ts">
  import type { Snippet } from "svelte";
  import type { SlTab } from "@shoelace-style/shoelace";
  import type { BaseProps } from "./types";

  import "@shoelace-style/shoelace/dist/components/tab/tab";
  import { slProps } from "./lib"

  type Props = {
    children: Snippet;
  } & Partial<Pick<SlTab,
    | "panel"
    | "active"
    | "closable"
    | "disabled"
  >> & BaseProps;

  let {
    children,
    ...props
  }: Props = $props();
</script>
<sl-tab {...slProps(props)}>
  {@render children()}
</sl-tab>
