<script lang="ts">
  import type { Snippet } from "svelte";
  import type { SlRadioGroup } from "@shoelace-style/shoelace";
  
  import "@shoelace-style/shoelace/dist/components/radio-group/radio-group";


  type Props = {
    children: Snippet
  } & Partial<Pick<SlRadioGroup, "name" | "value" | "size">>;

  let {
    children,
    value = $bindable(""),
    ...props
  }: Props = $props();

  function onChange(evt: Event) {
    value = (evt.target as SlRadioGroup).value
  }
</script>
<sl-radio-group {value} {...props} onsl-change={onChange}>
  {@render children()}
</sl-radio-group>
