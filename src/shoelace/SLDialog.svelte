<script lang="ts">
  import type { Snippet } from "svelte";

  import SlDialog from "@shoelace-style/shoelace/dist/components/dialog/dialog";


  type Props = {
    open: boolean
    onClose?: () => any
    children: Snippet
    footer?: Snippet
  } & Partial<Pick<SlDialog,
    | "label"
    | "noHeader"
  >>;

  let {
    open = $bindable(false),
    onClose = null,
    children,
    footer = null,
    ...props
  }: Props = $props();

  let dialog: SlDialog;


  $effect(() => {
    const afterHide = () => {
      open = false;
      if (onClose) onClose();
    };

    dialog.addEventListener("sl-after-hide", afterHide);

    return () => {
      dialog.removeEventListener("sl-after-hide", afterHide);
    }
  });

  $effect(() => {
    if (open && !dialog.open) {
      dialog.show();
    }
    if (!open && dialog.open) {
      dialog.hide();
    }
  });
</script>
<sl-dialog bind:this={dialog} {...props}>
  {@render children()}

  {#if footer}
    <div slot="footer">
      {@render footer()}
    </div>
  {/if}
</sl-dialog>
