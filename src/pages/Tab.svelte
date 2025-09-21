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
<Layout>
  <h1>Tab</h1>

  <SLTabGroup>
    <SLTab sl-slot="nav" panel="tab1">Tab 1</SLTab>
    <SLTab sl-slot="nav" panel="tab2">Tab 2</SLTab>
    <SLTabPanel name="tab1">Tab 1 Content</SLTabPanel>
    <SLTabPanel name="tab2">Tab 2 Content</SLTabPanel>
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
