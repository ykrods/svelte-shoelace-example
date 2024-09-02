<script lang="ts">
  import type { Snippet } from "svelte";

  import SlDialog from "@shoelace-style/shoelace/dist/components/dialog/dialog";

  import { SLButton } from "$src/shoelace";

  type Props = Partial<SlDialog>;

  let {
    open = $bindable(false),
    onConfirm = null,
    onCancel = null,
    children,
    ...props
  }: {
    open: boolean
    title: string
    onConfirm?: () => any
    onCancel?: () => any
    children: Snippet
  } & Props = $props();

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
<sl-dialog bind:this={dialog} {...props}>
  {@render children()}
  <div slot="footer">
    <SLButton
      variant="primary"
      onclick={() => { confirmed = true; open = false; }}
      >OK</SLButton>
  </div>
</sl-dialog>
