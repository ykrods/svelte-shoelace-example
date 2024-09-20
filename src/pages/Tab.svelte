<script lang="ts">
  import Layout from "$src/layout/Layout.svelte";
  import { SLTabGroup, SLTab, SLTabPanel } from "$src/shoelace"

  const tabs = [
    { panel: "tab1", label: "1" },
    { panel: "tab2", label: "2" },
  ];
</script>
<svelte:head>
  <title>Tab</title>
</svelte:head>
<Layout>
  <h1>Tab</h1>
  <SLTabGroup {tabs}>
    {#snippet tabTemplate({ panel, label }, i) }
      <SLTab slot="nav" {panel}>{label}</SLTab>
    {/snippet}

    {#each tabs as { panel, label }, i }
      <SLTabPanel name={panel}>{i}</SLTabPanel>
    {/each}
  </SLTabGroup>
</Layout>
