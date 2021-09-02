<script>
  import { fly } from "svelte/transition";

  import "@shoelace-style/shoelace/dist/themes/light.css";
  import "@shoelace-style/shoelace/dist/themes/dark.css";
  import "@shoelace-style/shoelace/dist/components/icon-button/icon-button";
  import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

  import "./global.css";

  import Router from "./Router.svelte";
  import SidebarContent from "./SidebarContent.svelte";
  import SwitchThemeButton from "./SwitchThemeButton.svelte";

  setBasePath('/svelte-shoelace-example/shoelace');

  let showSidebar = true;
</script>
<main>
  <SwitchThemeButton class="switchThemeButton" />

  <sl-icon-button
    name="list"
    label="sidemenu"
    class="toggleSidebarButton"
    on:click={() => { showSidebar = !showSidebar; }}
  />

  {#if showSidebar}
    <aside class="sidebar-wrap" transition:fly={{ x:-250, opacity:1 }}>
      <SidebarContent />
    </aside>
  {/if}

  <section class="content-wrap" style={`left: ${ showSidebar ? 250: 0 }px`}>
    <Router />
  </section>
</main>
<style>
  .toggleSidebarButton {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 30;
  }
  :global(.switchThemeButton) {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 30;
  }
  .sidebar-wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 250px;
    z-index: 20;
    border-right: 1px solid rgb(var(--sl-color-neutral-200));
    background-color: rgb(var(--sl-color-neutral-1000));
  }
  .content-wrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    transition: left 400ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
</style>
