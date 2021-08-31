<script>
  import "@shoelace-style/shoelace/dist/components/form/form";
  import "@shoelace-style/shoelace/dist/components/input/input";
  import "@shoelace-style/shoelace/dist/components/select/select";
  import "@shoelace-style/shoelace/dist/components/menu-item/menu-item";
  import "@shoelace-style/shoelace/dist/components/checkbox/checkbox";
  import "@shoelace-style/shoelace/dist/components/button/button";

  let confirmation = '';

  $: upper = confirmation.toUpperCase();

  function onSubmit(evt) {
    alert('confirmed!');
  }

</script>
<svelte:head>
  <title>Form - reactive</title>
</svelte:head>
<div class="content">
  <h1>Form - reactive</h1>
  <p>
    <sl-form on:sl-submit={onSubmit}>
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
      <sl-button type="primary" disabled={confirmation !== "shoelace"} submit>Submit</sl-button>
    </sl-form>
  </p>
</div>
<style>
  .invalid:not([disabled])::part(label),
  .invalid:not([disabled])::part(help-text) {
    color: rgb(var(--sl-color-danger-600));
  }
  .invalid:not([disabled])::part(base) {
    border-color: rgb(var(--sl-color-danger-500));
  }

  .invalid {
    --focus-ring: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-danger-500) / var(--sl-focus-ring-alpha));
  }
</style>
