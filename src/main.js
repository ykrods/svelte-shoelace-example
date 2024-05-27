import App from './App.svelte';

import "./global.css";

import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/themes/dark.css";

const app = new App({
  target: document.body,
});

export default app;
