<script lang="ts">
  import type { Snippet } from "svelte";

  import SlSwitch from "@shoelace-style/shoelace/dist/components/switch/switch";


  type Props = {
    checked: boolean
    children: Snippet
  };

  let {
    checked = $bindable(false),
    children,
  }: Props = $props();


  function onChange(evt: Event) {
    checked = (evt.target as SlSwitch).checked;
  }
</script>
<sl-switch onsl-change={onChange} {checked}>
  {@render children()}
</sl-switch>
