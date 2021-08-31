<script>
  import { onMount } from "svelte";

  import NotFound from "./pages/NotFound.svelte";

  const routes = {
    "#Home": () => { return import("./pages/Home.svelte"); },
    "#Form-basic": () => { return import("./pages/FormBasic.svelte"); },
    "#Form-reactive": () => { return import("./pages/FormReactive.svelte"); },
    "#Dropdown": () => { return import("./pages/Dropdown.svelte"); },
  }

  let current;

  onMount(() => {
    onHashChange();
    window.addEventListener("hashchange", onHashChange, false);
    return () => {
      window.removeEventListener("hashChange", onHashChange, false);
    };
  });

  async function onHashChange() {
    const hash = window.location.hash || "#Home";
    if (routes[hash]) {
      current = (await routes[hash]()).default;
    } else {
      current = NotFound;
    }
  }
</script>
<svelte:component this={current}/>
