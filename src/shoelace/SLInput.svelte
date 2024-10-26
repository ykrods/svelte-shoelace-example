<script lang="ts">
  import SlInput from "@shoelace-style/shoelace/dist/components/input/input";


  type Props = {
    value?: string,
    "help-text"?: SlInput["helpText"]
  } & Partial<Pick<SlInput,
    | "name"
    | "type"
    | "label"
    | "maxlength"
    | "minlength"
    | "required"
    | "pattern"
  >>;

  let {
    value = $bindable(""),
    ...props
  }: Props = $props();

  let input: SlInput;


  $effect(() => {
    const onSlInput = () => { value = input.value; }

    input.addEventListener("sl-input", onSlInput);

    return () => {
      input.removeEventListener("sl-input", onSlInput);
    }
  });
</script>
<sl-input bind:this={input} {value} {...props}></sl-input>
