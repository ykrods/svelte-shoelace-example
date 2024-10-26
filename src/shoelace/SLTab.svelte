<script lang="ts">
  import type { Snippet } from "svelte";

  import SlTab from "@shoelace-style/shoelace/dist/components/tab/tab";


  type Props = {
    children: Snippet;
    slot?: string;
  } & Partial<Pick<SlTab,
    | "panel"
    | "active"
    | "closable"
    | "disabled"
  >>;

  let {
    children,
    ...props
  }: Props = $props();
</script>
<sl-tab {...props}>
  {@render children()}
</sl-tab>
