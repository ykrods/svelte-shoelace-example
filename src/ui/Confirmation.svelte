<script lang="ts">
  import type { Snippet } from "svelte";

  import { SLButton, SLDialog } from "$src/shoelace";

  let {
    onConfirm = null,
    onCancel = null,
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
      if (onConfirm) onConfirm();
    } else {
      if (onCancel) onCancel();
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

  {#snippet footer()}
    <SLButton onclick={() => { open = false; }}>Cancel</SLButton>
    <SLButton variant="primary" onclick={() => { confirmed = true; open = false; }}>OK</SLButton>
  {/snippet}
</SLDialog>
