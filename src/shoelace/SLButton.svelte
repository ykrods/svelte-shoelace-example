<script lang="ts">
  import type { Snippet } from "svelte";

  import SlButton from "@shoelace-style/shoelace/dist/components/button/button";


  type Props = {
    children: Snippet;
  } & Partial<Pick<SlButton,
    | "disabled"
    | "form"
    | "onclick"
    | "type"
    | "variant"
  >>;

  let {
    children,
    ...props
  }: Props = $props();
</script>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<sl-button {...props}>
  {@render children()}
</sl-button>
