<script lang="ts">
  import type { Snippet } from "svelte";

  import SlButton from "@shoelace-style/shoelace/dist/components/button/button";

  type propKeys = "onclick" | "variant";

  type Props = Partial<Pick<SlButton, propKeys>>;

  let {
    children,
    ...props
  }: {
    children?: Snippet
  } & Props = $props();
</script>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<sl-button {...props}>{@render children()}</sl-button>
