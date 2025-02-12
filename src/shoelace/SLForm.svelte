<script lang="ts">
  import type { Snippet } from "svelte";

  import "@shoelace-style/shoelace/dist/components/button/button";
  import "@shoelace-style/shoelace/dist/components/checkbox/checkbox";
  import "@shoelace-style/shoelace/dist/components/input/input";
  import "@shoelace-style/shoelace/dist/components/option/option";
  import "@shoelace-style/shoelace/dist/components/select/select";
  import "@shoelace-style/shoelace/dist/components/textarea/textarea";


  let {
    onSubmit,
    children,
    id = undefined,
  } : {
    onSubmit: (evt: SubmitEvent) => any
    children: Snippet
    id?: string
  } = $props();

  let form: HTMLFormElement;


  $effect(() => {
    // Form validation with shoelace components needs to call addEventlistener
    // after component is loaded and rendered.
    // @see https://shoelace.style/getting-started/form-controls
    const elements = [
      "sl-button",
      "sl-checkbox",
      "sl-input",
      "sl-option",
      "sl-select",
      "sl-textarea",
    ];

    Promise.all(
      elements.map(elm => customElements.whenDefined(elm))
    ).then(() => {
      form.addEventListener("submit", onSubmit);
    });

    return () => {
      form.removeEventListener("submit", onSubmit);
    }
  });

</script>
<form bind:this={form} {id}>
  {@render children()}
</form>
