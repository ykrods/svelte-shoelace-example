<script lang="ts">
  import { fly } from 'svelte/transition';

  import Layout from "$src/layout/Layout.svelte";
  import { SLIcon, SLSwitch, SLRadioButton, SLRadioGroup } from "$src/shoelace";

  let checked = $state(true);
  let radio = $state("left");
  let align = $state("left");
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

  <SLRadioGroup bind:value={align} size="small">
    <SLRadioButton value="left" pill>
      <SLIcon name="text-left" label="left"></SLIcon>
    </SLRadioButton>
    <SLRadioButton value="center" pill>
      <SLIcon name="text-center" label="center"></SLIcon>
    </SLRadioButton>
    <SLRadioButton value="right" pill>
      <SLIcon name="text-right" label="right"></SLIcon>
    </SLRadioButton>
  </SLRadioGroup>
  <p style={`text-align: ${align}`}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Layout>
