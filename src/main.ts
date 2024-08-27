import { mount } from "svelte";

import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/themes/dark.css";

// import './app.css';

import App from './App.svelte';

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app;
