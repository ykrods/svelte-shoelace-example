<script lang="ts">
  import { SLApp, SLIconButton } from "$src/shoelace";
</script>
<div>
  <SLApp basePath="/svelte-shoelace-example/shoelace/">
    <SLIconButton name="moon" onclick={() => console.log("foo")}/>
  </SLApp>
</div>
