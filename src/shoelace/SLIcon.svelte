<script lang="ts">
  import SlIcon from "@shoelace-style/shoelace/dist/components/icon/icon";

  type Props = {
    slot?: string;
  } & Pick<SlIcon, "name" | "label">

  let props: Props  = $props();
</script>
<sl-icon {...props}></sl-icon>
