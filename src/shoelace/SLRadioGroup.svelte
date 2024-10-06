<script lang="ts">
  import type { Snippet } from "svelte";

  import SlRadioGroup from "@shoelace-style/shoelace/dist/components/radio-group/radio-group";

  type propKeys = "name" | "value";

  type Props = Partial<Pick<SlRadioGroup, propKeys>>;

  let {
    children,
    value = $bindable(""),
    ...props
  }: {
    children: Snippet
  } & Props = $props();

  function onChange(evt: Event) {
    value = (evt.target as SlRadioGroup).value
  }
</script>
<sl-radio-group {value} {...props} onsl-change={onChange}>
  {@render children()}
</sl-radio-group>
