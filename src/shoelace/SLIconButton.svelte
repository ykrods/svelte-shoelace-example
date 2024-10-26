<script lang="ts">
  import SlIconButton from "@shoelace-style/shoelace/dist/components/icon-button/icon-button";

  type Props = {
    onclick?: SlIconButton["onclick"];
  } & Pick<SlIconButton, "name" | "label">;

  let props: Props = $props();
</script>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<sl-icon-button {...props}></sl-icon-button>
