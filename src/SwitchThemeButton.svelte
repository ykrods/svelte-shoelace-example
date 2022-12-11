<script>
  import "@shoelace-style/shoelace/dist/components/icon-button/icon-button.js";

  export { className as class };

  let className = '';
  let theme = "light";
  document.documentElement.classList.add("sl-theme-light");

  function toggleTheme() {
    theme = ( theme === "light" ) ? "dark" : "light";
    ["light", "dark"].forEach((t) => {
      document.documentElement.classList.toggle(`sl-theme-${t}`, theme === t);
    });
  }
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<sl-icon-button
  name={theme == "light" ? "moon" : "sun"}
  label={theme == "light" ? "dark mode" : "light mode"}
  class={className}
  on:click={toggleTheme}
/>
