<script lang="ts">
  import { SlIconButton } from "@shoelace-style/shoelace";
  import "@shoelace-style/shoelace/dist/components/icon-button/icon-button";

  type Props = {
    onclick?: SlIconButton["onclick"]
  } & Pick<SlIconButton, "name" | "label">;

  let props: Props = $props();
</script>
<sl-icon-button {...props}></sl-icon-button>
