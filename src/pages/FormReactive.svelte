<script lang="ts">
  import type { SlInput } from "@shoelace-style/shoelace";
  
  import "@shoelace-style/shoelace/dist/components/input/input";
  import "@shoelace-style/shoelace/dist/components/button/button";

  import Layout from "$src/layout/Layout.svelte";
  import { SLForm } from "$src/shoelace";
    

  let confirmation = $state('');

  let upper = $derived(confirmation.toUpperCase());

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
  <SLForm {onSubmit}>
    <sl-input
      name="Confirmation"
      type="text"
      label="confirmation"
      value={confirmation}
      onsl-input={(e: Event) => { confirmation = (e.target as SlInput).value; }}
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
  </SLForm>
</Layout>
