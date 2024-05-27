<script>
  import "@shoelace-style/shoelace/dist/components/input/input.js";
  import "@shoelace-style/shoelace/dist/components/select/select.js";
  import "@shoelace-style/shoelace/dist/components/option/option.js";
  import "@shoelace-style/shoelace/dist/components/checkbox/checkbox.js";
  import "@shoelace-style/shoelace/dist/components/button/button.js";
  import "@shoelace-style/shoelace/dist/components/alert/alert.js";
  import "@shoelace-style/shoelace/dist/components/icon/icon.js";

  let alert;
  let alertText = '';

  function onSubmit(evt) {
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
<div class="content">
  <h1>Form - basic</h1>

  <form class="attention-error" on:submit|preventDefault={onSubmit}>
    <sl-input
      name="name"
      type="text"
      label="Name"
      required
      maxlength="10"
      help-text="Input your name, Maximum length: 10 characters."
    ></sl-input>
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
    <sl-button type="submit" variant="primary">Submit</sl-button>
  </form>

  <sl-alert type="success" duration=3000 closable bind:this={alert}>
    <sl-icon slot="icon" name="check2-circle"></sl-icon>
    <pre>{ alertText }</pre>
  </sl-alert>
</div>
