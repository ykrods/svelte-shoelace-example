<script lang="ts">
  import type { Component } from "svelte";

  import NotFound from "$src/pages/NotFound.svelte";

  const routes = {
    "#Home": () => import("$src/pages/Home.svelte"),
    "#Dialog": () => import("./pages/Dialog.svelte"),
    "#ProgressRing": () => import("$src/pages/ProgressRing.svelte"),
  };

  let RouteComponent: Component = $state();

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
