<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";

  import "@shoelace-style/shoelace/dist/components/icon-button/icon-button.js";
  import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

  import Router from "./Router.svelte";
  import SidebarContent from "./SidebarContent.svelte";
  import SwitchThemeButton from "./SwitchThemeButton.svelte";

  setBasePath('/svelte-shoelace-example/shoelace');

  let showSidebar = isMobile() ? false : true;

  function isMobile() {
    return !window.matchMedia("(480px < width)").matches;
  }

  onMount(() => {
    window.addEventListener("hashchange", onHashChange, false);
    return () => {
      window.removeEventListener("hashChange", onHashChange, false);
    };
  });

  function onHashChange() {
    if (isMobile()) {
      showSidebar = false;
    }
  }
</script>
<main>
  <span class="switchThemeButtonPosition">
    <SwitchThemeButton />
  </span>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <sl-icon-button
    name="list"
    label="sidemenu"
    class="toggleSidebarButtonPosition"
    on:click={() => { showSidebar = !showSidebar; }}
  />

  {#if showSidebar}
    <aside class="sidebar-wrap" transition:fly={{ x:-250, opacity:1 }}>
      <SidebarContent />
    </aside>
  {/if}

  <section class="content-wrap" style={`left: ${ (showSidebar && !isMobile()) ? 250: 0 }px`}>
    <Router />
  </section>

  {#if showSidebar && isMobile() }
    <div transition:fade class="mask"></div>
  {/if}
</main>
<style>
  .toggleSidebarButtonPosition {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 30;
  }
  .switchThemeButtonPosition {
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
    border-right: 1px solid var(--sl-color-neutral-200);
    background-color: var(--sl-color-neutral-100);
  }
  .content-wrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    transition: left 400ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: rgba(0,0,0, 0.33);
  }
</style>
