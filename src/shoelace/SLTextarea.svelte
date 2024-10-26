<script lang="ts">
  import SlTextarea from "@shoelace-style/shoelace/dist/components/textarea/textarea";


  type Props = {
    value?: string,
    "help-text"?: SlTextarea["helpText"]
  } & Partial<Pick<SlTextarea,
    | "label"
    | "disabled"
    | "resize"
    | "rows"
  >>;

  let {
    value = $bindable(""),
    ...props
  } : Props = $props();

  let textarea: SlTextarea;


  $effect(() => {
    const onSlInput = () => { value = textarea.value; }

    textarea.addEventListener("sl-input", onSlInput);

    return () => {
      textarea.removeEventListener("sl-input", onSlInput);
    }
  });
</script>
<sl-textarea bind:this={textarea} {value} {...props}></sl-textarea>
