<script lang="ts">
  import type { Snippet } from "svelte";

  import SlTabPanel from "@shoelace-style/shoelace/dist/components/tab-panel/tab-panel";


  type Props = Partial<Pick<SlTabPanel, "name" | "active">>;

  let {
    children,
    ...props
  } : {
    children: Snippet
  } & Props = $props();
</script>
<sl-tab-panel {...props}>
  {@render children()}
</sl-tab-panel>
