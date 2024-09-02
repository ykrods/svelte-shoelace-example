<script lang="ts">
  import "@shoelace-style/shoelace/dist/themes/light.css";
  import "@shoelace-style/shoelace/dist/themes/dark.css";

  import type { Snippet } from "svelte";

  import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

  let {
    basePath,
    children,
  }: {
    basePath: string
    children: Snippet
  } = $props();

  setBasePath(basePath);
</script>
{@render children()}
