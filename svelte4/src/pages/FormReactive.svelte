<script>
  import "@shoelace-style/shoelace/dist/components/input/input.js";
  import "@shoelace-style/shoelace/dist/components/select/select.js";
  import "@shoelace-style/shoelace/dist/components/menu-item/menu-item.js";
  import "@shoelace-style/shoelace/dist/components/checkbox/checkbox.js";
  import "@shoelace-style/shoelace/dist/components/button/button.js";

  let confirmation = '';

  $: upper = confirmation.toUpperCase();
</script>
<svelte:head>
  <title>Form - reactive</title>
</svelte:head>
<div class="content">
  <h1>Form - reactive</h1>
  <form class="attention-error" on:submit|preventDefault={ () => { alert('confirmed!'); }}>
    <sl-input
      name="Confirmation"
      type="text"
      label="confirmation"
      value={confirmation}
      on:sl-input={(e) => { confirmation = e.target.value; }}
      required
      pattern="shoelace"
      help-text="Please type 'shoelace'"
      ></sl-input>
    <br>
    <sl-input
      name="upper"
      type="text"
      label="upper"
      value={upper}
      disabled
    ></sl-input>
    <br>
    <sl-button
      type="submit"
      variant="primary"
    >Submit</sl-button>
  </form>
</div>
