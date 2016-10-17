import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

class Large extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }
  constructor(props) {
    super(props)

    this.state = {

    }
  }
    render() {
      return (
        <div>HELLO THERE</div>
      )

    }
}
export default Large;
