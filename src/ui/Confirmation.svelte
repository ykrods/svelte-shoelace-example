<script lang="ts">
  import type { Snippet } from "svelte";

  import "@shoelace-style/shoelace/dist/components/dialog/dialog";

  import { SLButton } from "$src/shoelace";

  let {
    open = $bindable(false),
    title = "",
    onConfirm = null,
    onCancel = null,
    children,
  }: {
    open: boolean
    title: string
    onConfirm?: () => any
    onCancel?: () => any
    children: Snippet
  } = $props();

  let dialog;
  let confirmed = $state(false);

  $effect(() => {
    const afterHide = () => {
      open = false;
      if (onConfirm && confirmed) {
        onConfirm();
      }
      if (onCancel && !confirmed) {
        onCancel();
      }
    };

    dialog.addEventListener('sl-after-hide', afterHide);

    return () => {
      dialog.removeEventListener('sl-after-hide', afterHide);
    }
  });

  $effect(() => {
    if (open && !dialog.open) {
      dialog.show();
      confirmed = false;
    }
    if (!open && dialog.open) {
      dialog.hide();
    }
  });
</script>
<sl-dialog bind:this={dialog} label={title}>
  {@render children()}
  <div slot="footer">
    <SLButton
      variant="primary"
      onclick={() => { confirmed = true; open = false; }}
      >OK</SLButton>
  </div>
</sl-dialog>
