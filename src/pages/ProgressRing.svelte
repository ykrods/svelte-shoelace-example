<script>
  import "@shoelace-style/shoelace/dist/components/progress-ring/progress-ring";

  import Layout from "$src/layout/Layout.svelte";

  let progress = $state(0);
  let d = $state(0);

  $effect(() => {
    const timerID = setInterval(() => {
      d++;
      progress = Math.min(progress + d, 100);
      if (100 === progress) {
        clearInterval(timerID);
      }
    }, 100);
    return () => clearInterval(timerID);
  });
</script>
<Layout>
  <h1>Progress Ring</h1>
  <div>
    <sl-progress-ring
      value={progress}
      style="margin-bottom: 1.5em;"
    >{progress}</sl-progress-ring>
  </div>
</Layout>
