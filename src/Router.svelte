<script lang="ts">
  import type { Component } from "svelte";

  import NotFound from "$src/pages/NotFound.svelte";

  const routes: Record<string, () => Promise<{ default: Component }>> = {
    "#Home": () => import("./pages/Home.svelte"),
    "#Form-basic": () => import("./pages/FormBasic.svelte"),
    "#Form-reactive": () => import("./pages/FormReactive.svelte"),
    "#Dropdown": () => import("./pages/Dropdown.svelte"),
    "#Dialog": () => import("./pages/Dialog.svelte"),
    "#ProgressRing": () => import("./pages/ProgressRing.svelte"),
    "#Tab": () => import("./pages/Tab.svelte"),
    "#Radio-Switch": () => import("./pages/RadioSwitch.svelte"),
  };

  let RouteComponent: Component | undefined = $state();

  $effect(() => {
    onHashChange();
    window.addEventListener("hashchange", onHashChange, false);
    return () => {
      window.removeEventListener("hashChange", onHashChange, false);
    };
  });

  async function onHashChange() {
    const hash = window.location.hash || "#Home";
    if (routes[hash]) {
      RouteComponent = (await routes[hash]()).default;
    } else {
      RouteComponent = NotFound;
    }
  }
</script>
<RouteComponent />
