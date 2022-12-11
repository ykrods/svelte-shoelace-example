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
  <form on:submit|preventDefault={ () => { alert('confirmed!'); }}>
      <sl-input
        class:invalid={confirmation !== "shoelace"}
        name="Confirmation"
        type="text"
        label="confirmation"
        value={confirmation}
        on:sl-input={(e) => { confirmation = e.target.value; }}
        required
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
        disabled={confirmation !== "shoelace"}
      >Submit</sl-button>
  </form>
</div>
<style>
  .invalid:not([disabled])::part(label),
  .invalid:not([disabled])::part(help-text) {
    color: var(--sl-color-danger-600);
  }
  .invalid:not([disabled])::part(base) {
    border-color: var(--sl-color-danger-600);
  }
  .invalid:focus-within::part(base) {
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-color-danger-600);
  }
</style>
