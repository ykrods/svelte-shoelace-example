<script lang="ts">
  import type { Snippet } from "svelte";
  import type { SlTabPanel } from "@shoelace-style/shoelace";
  
  import "@shoelace-style/shoelace/dist/components/tab-panel/tab-panel";


  type Props = {
    children: Snippet
  } & Partial<Pick<SlTabPanel, "name" | "active">>;

  let {
    children,
    ...props
  }: Props = $props();
</script>
<sl-tab-panel {...props}>
  {@render children()}
</sl-tab-panel>
