<script>
  import { createEventDispatcher, onMount } from 'svelte';

  import "@shoelace-style/shoelace/dist/components/button/button.js";
  import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";

  export let visible = false;
  export let label = "";

  let dispatch = createEventDispatcher();

  let dialog;
  let confirmed = false;

  onMount(() => {
    const afterHide = () => {
      dispatch(confirmed ? "confirmed" : "cancelled");
      visible = false;
    };

    dialog.addEventListener('sl-after-hide', afterHide);

    return () => {
      dialog.removeEventListener('sl-after-hide', afterHide);
    }
  });

  $: if (visible) {
    confirmed = false;
    dialog.show();
  }
</script>
<sl-dialog {label} bind:this={dialog}>
  <slot></slot>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <sl-button
    slot="footer"
    variant="secondary"
    on:click={ () => { dialog.hide(); }}
  >Cancel</sl-button>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <sl-button
    slot="footer"
    variant="primary"
    on:click={ () => { confirmed = true; dialog.hide(); }}
  >OK</sl-button>
</sl-dialog>
