<script lang="ts">
  import { SLIconButton } from "$src/shoelace";

  let theme = $state("light");
  document.documentElement.classList.add("sl-theme-light");

  function toggleTheme() {
    theme = ( theme === "light" ) ? "dark" : "light";
    ["light", "dark"].forEach((t) => {
      document.documentElement.classList.toggle(`sl-theme-${t}`, theme === t);
    });
  }
</script>
<SLIconButton
  name={theme == "light" ? "moon" : "sun"}
  label={theme == "light" ? "dark mode" : "light mode"}
  onclick={toggleTheme}
/>
