<script lang="ts">
  import type { Snippet } from "svelte";
  import type { SlTabGroup } from "@shoelace-style/shoelace";
  
  import "@shoelace-style/shoelace/dist/components/tab-group/tab-group";


  type Props = {
    children: Snippet
  } & Partial<Pick<SlTabGroup, "placement">>;

  let {
    children,
    ...props
  }: Props = $props();
</script>
<sl-tab-group {...props}>
  {@render children()}
</sl-tab-group>
