<script lang="ts">
  import type { Snippet } from "svelte";

  import SlTab from "@shoelace-style/shoelace/dist/components/tab/tab";
  import SlTabGroup from "@shoelace-style/shoelace/dist/components/tab-group/tab-group";
  import "@shoelace-style/shoelace/dist/components/tab-panel/tab-panel";


  type TabProps = {
    panel: SlTab["panel"]
    label?: string
  } & Partial<Pick<SlTab,
    | "active"
    | "closable"
    | "disabled"
  >>;

  type TabGroupProps = Partial<Pick<SlTabGroup, "placement">>;


  let {
    tabs,
    tabTemplate = undefined,
    panelTemplate,
    ...props
  }: {
    tabs: TabProps[]
    tabTemplate: Snippet<[string, number]>
    panelTemplate: Snippet<[string, number]>
  } & TabGroupProps = $props();
</script>
<sl-tab-group {...props}>
  {#each tabs as { panel, label, ...props }, i }
    <sl-tab slot="nav" {panel} {...props}>
      {#if label }
        { label }
      {:else}
        {@render tabTemplate(panel, i)}
      {/if}
    </sl-tab>
  {/each}

  {#each tabs as { panel }, i }
    <sl-tab-panel name={panel}>
      {@render panelTemplate(panel, i)}
    </sl-tab-panel>
  {/each}
</sl-tab-group>
