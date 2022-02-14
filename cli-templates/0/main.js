import { app, html } from 'https://unpkg.com/apprun/dist/apprun-html.esm.js';
const add = (state, delta) => state + delta;
const view = state => {
  return html`<div>
    <h1>${state}</h1>
      <button @click=${run(add, -1)}>-1</button>
      <button @click=${run(add, +1)}>+1</button>
    </div>`;
};
app.start(document.body, 0, view);