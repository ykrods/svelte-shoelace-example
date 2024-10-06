<script lang="ts">
  import { fly } from 'svelte/transition';

  import Layout from "$src/layout/Layout.svelte";
  import { SLSwitch, SLRadioButton, SLRadioGroup } from "$src/shoelace";

  let checked = $state(true);
  let radio = $state("left");
</script>
<svelte:head>
  <title>Radio/Switch</title>
</svelte:head>
<Layout>
  <h1>Radio/Switch</h1>
  <SLSwitch bind:checked>check</SLSwitch>
  <p>value: { checked }</p>
  <div style="display: flex">
    {#if checked}
      <p transition:fly={{x: 200}}>foo</p>
    {:else}
      <p transition:fly={{x: -200}}>bar</p>
    {/if}
  </div>
  <SLRadioGroup bind:value={radio}>
    <SLRadioButton value="left">Left</SLRadioButton>
    <SLRadioButton value="center">Center</SLRadioButton>
    <SLRadioButton value="right">Right</SLRadioButton>
  </SLRadioGroup>
  <p>value: {radio}</p>
</Layout>
