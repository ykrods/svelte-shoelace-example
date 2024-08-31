<script lang="ts">
  import type { Snippet } from "svelte";

  import { fly, fade } from "svelte/transition";

  import { SLIconButton } from "$src/shoelace";

  import SidebarContent from "./SidebarContent.svelte";
  import SwitchThemeButton from "./SwitchThemeButton.svelte";

  let { children } : { children: Snippet } = $props();

  let showSidebar = $state(isMobile() ? false : true);

  function isMobile() {
    return !window.matchMedia("(480px < width)").matches;
  }
</script>
<div>
  <span class="switchThemeButtonPosition">
    <SwitchThemeButton />
  </span>
  <span class="toggleSidebarButtonPosition">
    <SLIconButton
      name="list"
      label="sidemenu"
      onclick={() => { showSidebar = !showSidebar; }}
      />
  </span>
  {#if showSidebar}
    <aside class="sidebarWrap" transition:fly={{ x:-250, opacity:1 }}>
      <SidebarContent />
    </aside>
  {/if}
  <div class="contentWrap" style={`left: ${ (showSidebar && !isMobile()) ? 250: 0 }px`}>
    {@render children()}
  </div>

  {#if showSidebar && isMobile() }
    <div transition:fade class="mask"></div>
  {/if}
</div>
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

  .sidebarWrap {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 250px;
    z-index: 20;
    border-right: 1px solid var(--sl-color-neutral-200);
    background-color: var(--sl-color-neutral-100);
  }
  .contentWrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    transition: left 400ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    padding-left: 3em;
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
