<script>
  import { onMount } from "svelte";

  import "@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js";

  let progress = 0;
  let d = 0;

  onMount(() => {
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
<div class="content">
  <h1>Progress Ring</h1>
  <div>
    <sl-progress-ring
      value={progress}
      style="margin-bottom: .5em;"
    >{progress}</sl-progress-ring>
  </div>
</div>
