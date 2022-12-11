<script>
  import "@shoelace-style/shoelace/dist/components/button/button.js";

  import Confirmation from "../ui/Confirmation.svelte";

  let dialogVisible = false;
  let result = "";
</script>
<div class="content">
  <h1>Dialog</h1>
  <div>
    <Confirmation
      bind:visible={dialogVisible}
      label="Confirmation"
      on:confirmed={ () => { result = "confirmed!"; } }
      on:cancelled={ () => { result = "cancelled!"; } }
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Confirmation>
  </div>
  <sl-button
    variant="primary"
    on:click={ () => { dialogVisible = true; }}
  >Open</sl-button>
  result: { result }
</div>
