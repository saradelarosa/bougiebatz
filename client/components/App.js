import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Large from './Largephotos.js';

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
    </Route>
  </Router>
), document.getElementById('treetop'))

export default App;
