<script lang="ts">
  import SlIconButton from "@shoelace-style/shoelace/dist/components/icon-button/icon-button";

  let { ...props }: Partial<SlIconButton> = $props();
</script>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<sl-icon-button {...props}></sl-icon-button>
