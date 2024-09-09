<script lang="ts">
  import "@shoelace-style/shoelace/dist/components/button/button";
  import "@shoelace-style/shoelace/dist/components/checkbox/checkbox";
  import "@shoelace-style/shoelace/dist/components/input/input";
  import "@shoelace-style/shoelace/dist/components/option/option";
  import "@shoelace-style/shoelace/dist/components/select/select";
  import "@shoelace-style/shoelace/dist/components/textarea/textarea";

  import type { Snippet } from "svelte";

  let {
    onSubmit,
    children,
  } : {
    onSubmit: (evt: SubmitEvent) => any
    children: Snippet
  } = $props();

  let form: HTMLFormElement | undefined;


  $effect(() => {
    // @see https://shoelace.style/getting-started/form-controls#required-fields
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
      form?.addEventListener("submit", onSubmit);
    });

    return () => {
      form?.removeEventListener("submit", onSubmit);
    }
  });

</script>
<form bind:this={form}>
  {@render children()}
</form>
