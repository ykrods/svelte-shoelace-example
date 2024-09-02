<script lang="ts">
  import "@shoelace-style/shoelace/dist/components/input/input";
  import "@shoelace-style/shoelace/dist/components/select/select";
  import "@shoelace-style/shoelace/dist/components/menu-item/menu-item";
  import "@shoelace-style/shoelace/dist/components/checkbox/checkbox";
  import "@shoelace-style/shoelace/dist/components/button/button";

  import Layout from "$src/layout/Layout.svelte";

  let confirmation = $state('');
  let form;

  let upper = $derived(confirmation.toUpperCase());

  $effect(() => {
    // @see https://shoelace.style/getting-started/form-controls#required-fields
    customElements.whenDefined("sl-input").then(() => {
      form?.addEventListener("submit", onSubmit);
    });

    return () => {
      form?.removeEventListener("submit", onSubmit);
    }
  });

  function onSubmit(evt: SubmitEvent) {
    evt.preventDefault();
    alert('confirmed!');
  }
</script>
<svelte:head>
  <title>Form - reactive</title>
</svelte:head>
<Layout>
  <h1>Form - reactive</h1>
  <form class="attention-error" bind:this={form}>
    <sl-input
      name="Confirmation"
      type="text"
      label="confirmation"
      value={confirmation}
      onsl-input={(e) => { confirmation = e.target.value; }}
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
</Layout>
