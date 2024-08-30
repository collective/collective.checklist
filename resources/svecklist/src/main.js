import { mount } from 'svelte';
import App from './App.svelte';
import { patch } from './api';
import './app.scss';

// const app = new App({
//   target: document.getElementById('svecklist'),
// })

// export default app
let targets = document.querySelectorAll(".svecklist");

targets.forEach(element => {
  const app = mount(App, {
    target: element,
    props: {
      svecklistid: element.getAttribute('svecklistid'),
      mode: element.getAttribute('mode'),
    }
  })
});
