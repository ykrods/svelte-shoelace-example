<script lang="ts">
  import type { SlIcon } from "@shoelace-style/shoelace";
  import "@shoelace-style/shoelace/dist/components/icon/icon";

  type Props = Pick<SlIcon, "name" | "label">;

  let props: Props  = $props();
</script>
<sl-icon {...props}></sl-icon>
