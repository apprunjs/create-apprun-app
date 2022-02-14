import { app, Component, html } from 'https://unpkg.com/apprun/dist/apprun-html.esm.js';

const add = (state, delta) => state + delta;
class Counter extends Component {
  state = 0;
  view = state => {
    return html`<div>
    <h1>${state}</h1>
      <button @click=${run(add, -1)}>-1</button>
      <button @click=${run(add, +1)}>+1</button>
    </div>`;
  };
}

app.webComponent('my-counter', Counter);