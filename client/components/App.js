import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Large from './Largephotos.js';
import Medium from './Mediumphotos.js';
import Small from './Smallphotos.js';

class App extends React.Component {
  constructor() {
    super()

    this.state = {}
  }
  render () {
    return (
      <div>
        <h1>Visual News</h1>
        <ul>
          <li><Link to="/Large">Large</Link></li>
          <li><Link to="/GO">GET IT DONE</Link></li>
          <li><Link to="/Small">Small</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="Large" component={Large} />
      <Route path="Medium" component={Medium} />
      <Route path="Small" component={Small} />
    </Route>
  </Router>
), document.getElementById('treetop'))

export default App;
