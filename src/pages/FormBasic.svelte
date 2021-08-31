<script>
  import "@shoelace-style/shoelace/dist/components/form/form";
  import "@shoelace-style/shoelace/dist/components/input/input";
  import "@shoelace-style/shoelace/dist/components/select/select";
  import "@shoelace-style/shoelace/dist/components/menu-item/menu-item";
  import "@shoelace-style/shoelace/dist/components/checkbox/checkbox";
  import "@shoelace-style/shoelace/dist/components/button/button";
  import "@shoelace-style/shoelace/dist/components/alert/alert";
  import "@shoelace-style/shoelace/dist/components/icon/icon";

  let alert;
  let alertText = '';

  function onSubmit(evt) {
    alertText = '';
    for (const [key, value] of event.detail.formData) {
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
  <p>
    <sl-form on:sl-submit={onSubmit}>
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
        <sl-menu-item value="birds">Birds</sl-menu-item>
        <sl-menu-item value="cats">Cats</sl-menu-item>
        <sl-menu-item value="dogs">Dogs</sl-menu-item>
      </sl-select>
      <br>
      <sl-checkbox name="agree" value="yes" required>
        I totally agree
      </sl-checkbox>
      <br><br>
      <sl-button submit>Submit</sl-button>
    </sl-form>
    <sl-alert type="success" duration=3000 closable bind:this={alert}>
      <sl-icon slot="icon" name="check2-circle"></sl-icon>
      <pre>{ alertText }</pre>
    </sl-alert>
  </p>
</div>
