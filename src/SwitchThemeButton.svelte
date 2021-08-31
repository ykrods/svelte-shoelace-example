<script>
  import "@shoelace-style/shoelace/dist/components/icon-button/icon-button";

  export { className as class };

  let className = '';
  let theme = "light";

  document.documentElement.classList.add("sl-theme-light");

  function switchTheme() {
    theme = ( theme === "light" ) ? "dark" : "light";
    document.documentElement.classList.toggle("sl-theme-light");
    document.documentElement.classList.toggle("sl-theme-dark");
  }
</script>
<sl-icon-button
  name={theme == "light" ? "moon" : "sun"}
  label={theme == "light" ? "dark mode" : "light mode"}
  class={className}
  on:click={switchTheme}
/>
