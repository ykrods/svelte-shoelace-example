<script lang="ts">
  import type { SlIconButton } from "@shoelace-style/shoelace";
  import type { BaseProps } from "./types";

  import "@shoelace-style/shoelace/dist/components/icon-button/icon-button";
  import { slProps } from "./lib"

  type Props = {
    onclick?: SlIconButton["onclick"]
  } & Pick<SlIconButton, "name" | "label"> & BaseProps;

  let props: Props = $props();
</script>
<sl-icon-button {...slProps(props)}></sl-icon-button>
