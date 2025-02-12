<script lang="ts">
  import type { SlTextarea } from "@shoelace-style/shoelace";

  import "@shoelace-style/shoelace/dist/components/textarea/textarea";


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

  function onInput(evt: Event) {
    value = (evt.target as SlTextarea).value;
  }
</script>
<sl-textarea 
  onsl-input={onInput}
  {value} 
  {...props}
></sl-textarea>
