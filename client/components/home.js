import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

class Home extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>HOME SCREEN</div>
    )
  }
}

export default Home
