<script>
  import Layout from "$src/layout/Layout.svelte";

  import { SLButton } from "$src/shoelace";
  import Confirmation from "$src/ui/Confirmation.svelte";

  let open = $state(false);
  let result = $state("");
</script>
<Layout>
  <h1>Dialog</h1>
  <SLButton
    variant="primary"
    onclick={() => { open = true; }}
    >Open</SLButton>
  result: { result }
</Layout>

<Confirmation
  bind:open
  label="Confirmation"
  onConfirm={() => { result = "confirmed"; }}
  onCancel={() => { result = "canceled"; }}
  >
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Confirmation>
