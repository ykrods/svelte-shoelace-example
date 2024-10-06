<script lang="ts">
  import SlSwitch from "@shoelace-style/shoelace/dist/components/switch/switch";

  import type { Snippet } from "svelte";

  let {
    checked = $bindable(false),
    children,
  } : {
    checked: boolean
    children: Snippet
  } = $props();

  function onChange(evt: Event) {
    checked = (evt.target as SlSwitch).checked;
  }
</script>
<sl-switch onsl-change={onChange} {checked}>
  {@render children()}
</sl-switch>
