<script lang="ts">
  import type { Snippet } from "svelte";

  import { SLButton, SLDialog } from "$src/shoelace";


  let {
    onConfirm,
    onCancel,
    children,
    open = $bindable(false),
    label,
  }: {
    onConfirm?: () => any
    onCancel?: () => any
    children: Snippet
    open: boolean
    label: string
  } = $props();

  let confirmed = $state(false);

  function onClose() {
    if (confirmed) {
      onConfirm?.();
    } else {
      onCancel?.();
    }
  }

  $effect(() => {
    if (open) confirmed = false;
  });
</script>
<SLDialog
  bind:open
  {label}
  {onClose}
>
  {@render children()}

  <SLButton sl-slot="footer" onclick={() => open = false }>Cancel</SLButton>
  <SLButton
    sl-slot="footer"
    variant="primary"
    onclick={() => { confirmed = true; open = false; }}
  >OK</SLButton>
</SLDialog>
