<script lang="ts" module>
  export type Tab = { panel: string, label: string }
</script>
<script lang="ts">
  import type { Snippet } from "svelte";

  import SlTabGroup from "@shoelace-style/shoelace/dist/components/tab-group/tab-group";
  import SLTab from "./SLTab.svelte";

  type Props = Partial<Pick<SlTabGroup, "placement">>;

  let {
    tabs,
    tabTemplate = undefined,
    children,
    ...props
  } : {
    tabs: Tab[]
    tabTemplate?: Snippet
    children: Snippet
  } & Props = $props();
</script>
<sl-tab-group {...props}>
  {#each tabs as { panel, label }, i }
    {#if tabTemplate}
      {@render tabTemplate({ panel, label }, i)}
    {:else}
      <SLTab slot="nav" {panel}>{label}</SLTab>
    {/if}
  {/each}

  {@render children()}
</sl-tab-group>
