<script lang="ts">
  import type { SlInput } from "@shoelace-style/shoelace";
  import "@shoelace-style/shoelace/dist/components/input/input";


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

  function onInput(evt: Event) {
    value = (evt.target as SlInput).value
  }
</script>
<sl-input onsl-input={onInput} {value} {...props}></sl-input>
