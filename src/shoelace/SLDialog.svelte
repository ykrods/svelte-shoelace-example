<script lang="ts">
  import type { Snippet } from "svelte";

  import type { SlDialog } from "@shoelace-style/shoelace";
  import "@shoelace-style/shoelace/dist/components/dialog/dialog";


  type Props = {
    open: boolean
    children: Snippet
    onClose?: () => any
  } & Partial<Pick<SlDialog,
    | "label"
    | "noHeader"
  >>;

  let {
    open = $bindable(false),
    children,
    onClose,
    ...props
  }: Props = $props();

  let dialog: SlDialog;


  function afterHide() {
    open = false;
    onClose?.();
  }

  $effect(() => {
    if (open && !dialog.open) {
      dialog.show();
    }
    if (!open && dialog.open) {
      dialog.hide();
    }
  });
</script>
<sl-dialog
  bind:this={dialog}
  onsl-after-hide={afterHide}
  {...props}
>
  {@render children()}
</sl-dialog>
