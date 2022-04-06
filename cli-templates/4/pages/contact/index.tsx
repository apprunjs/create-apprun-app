import { app, Component } from 'apprun';

export default class ContactComponent extends Component {
  state = 'Contact';

  view = state => <div>
    <h2>{state}</h2>
    <p>This is an AppRun Component</p>
  </div>;
}

