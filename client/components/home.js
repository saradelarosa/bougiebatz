import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import axios from 'axios';
import Select from 'react-select';
import { Grid, Row, Col } from 'react-bootstrap';

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
