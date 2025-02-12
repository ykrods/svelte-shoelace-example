<script lang="ts">
  import Layout from "$src/layout/Layout.svelte";
  import { SLTabGroup, SLTab, SLTabPanel, SLTabSet } from "$src/shoelace"

  const tabs = [
    { panel: "tab1", label: "Tab 1" },
    { panel: "tab2", label: "Tab 2" },
  ];
</script>
<svelte:head>
  <title>Tab</title>
</svelte:head>
<!-- workaround for slot_attribute_invalid_placement -->
{#snippet tab(panel: string, label: string)}
  <SLTab slot="nav" {panel}>{label}</SLTab>
{/snippet}
<Layout>
  <h1>Tab</h1>

  <SLTabGroup>
    {#each tabs as { panel, label } }
      {@render tab(panel, label)}
    {/each}
    {#each tabs as { panel, label }, i }
      <SLTabPanel name={panel}>{i}</SLTabPanel>
    {/each}
  </SLTabGroup>

  <h2>Combined Component (Experimental)</h2>
  <SLTabSet tabs={[{panel: "tab1"}, {panel: "tab2"}]}>
    {#snippet tabTemplate(panel, i)}
      Tab {i}
    {/snippet}

    {#snippet panelTemplate(panel, i)}
      {i}
    {/snippet}
  </SLTabSet>
</Layout>
