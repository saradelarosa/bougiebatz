import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Large from './Largephotos.js';
import Medium from './Mediumphotos.js';
import Small from './Smallphotos.js';
import PhotoStory from './PhotoStory.js'
import css from '../styles/style.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {}
  }
  render () {
    return (
      <div>
        <ul className="header">
          <li><Link to="/PhotoStory">Go at Your Own Pace</Link></li>
          <li><Link to="/" className="newsLink"> NEWS</Link></li>
          <li><Link to="/Large" className="links">Current</Link></li>
          <li><Link to="/Medium" className="links">Last Week</Link></li>
          <li><Link to="/Small" className="links">This Month</Link></li>
        </ul>
        <div className="content">
        {this.props.children}
      </div>
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
      <Route path="PhotoStory" component={PhotoStory} />
    </Route>
  </Router>
), document.getElementById('treetop'))

export default App;
