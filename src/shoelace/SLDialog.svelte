<!--
  NOTE: SlDialog.open の値を変える形でもダイアログを開閉できるが
        bind できないので独自の変数として管理
-->
<script lang="ts">
  import type { Snippet } from "svelte";

  import SlDialog from "@shoelace-style/shoelace/dist/components/dialog/dialog";

  import { SLButton } from "$src/shoelace";

  type PropKeys = "label" | "noHeader";
  type Props = Partial<Pick<SlDialog, PropKeys>>;

  let {
    open = $bindable(false),
    onClose = null,
    children,
    footer = null,
    ...props
  }: {
    open: boolean
    onClose?: () => any
    children: Snippet
    footer?: Snippet
  } & Props = $props();

  let dialog: SlDialog;

  $effect(() => {
    const afterHide = () => {
      open = false;
      if (onClose) onClose();
    };

    dialog.addEventListener('sl-after-hide', afterHide);

    return () => {
      dialog.removeEventListener('sl-after-hide', afterHide);
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
