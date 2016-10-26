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
    <div>
    <video id='background-video' autoPlay loop>
    <source src='https://dl.dropboxusercontent.com/s/126l5o9woivl3u8/GettyImages-500107419.mp4?dl=0' type='video/mp4'/>
    </video>
    </div>
  )
}

}

export default Home
