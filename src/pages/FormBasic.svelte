<script lang="ts">
  import "@shoelace-style/shoelace/dist/components/select/select";
  import "@shoelace-style/shoelace/dist/components/option/option";
  import "@shoelace-style/shoelace/dist/components/checkbox/checkbox";
  import "@shoelace-style/shoelace/dist/components/alert/alert";

  import Layout from "$src/layout/Layout.svelte";

  import { SLButton, SLForm, SLInput, SLIcon } from "$src/shoelace";

  let alert;
  let alertText = $state('');

  function onSubmit(evt) {
    evt.preventDefault();

    console.log(evt);
    const formData = new FormData(evt.target);
    alertText = '';
    for (const [key, value] of formData) {
      alertText += `${key}: ${value}\n`;
    }
    alert.toast();
  }
</script>
<svelte:head>
  <title>Form - basic</title>
</svelte:head>
<Layout>
  <h1>Form - basic</h1>

  <SLForm {onSubmit}>
    <SLInput
      name="name"
      type="text"
      label="Name"
      required
      maxlength={10}
      help-text="Input your name, Maximum length: 10 characters."
    ></SLInput>
    <br>
    <sl-select
      name="favorite"
      label="Select your favorite"
      clearable
      required
    >
      <sl-option value="birds">Birds</sl-option>
      <sl-option value="cats">Cats</sl-option>
      <sl-option value="dogs">Dogs</sl-option>
    </sl-select>
    <br>
    <sl-checkbox name="agree" value="yes" required>
      I totally agree
    </sl-checkbox>
    <br><br>
    <SLButton type="submit" variant="primary">Submit</SLButton>
  </SLForm>

  <sl-alert type="success" duration=3000 closable bind:this={alert}>
    <span slot="icon"><SLIcon name="check2-circle" label="checked"></SLIcon></span>
    <pre>{ alertText }</pre>
  </sl-alert>
</Layout>
