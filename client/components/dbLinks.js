import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import axios from 'axios';
import { default as Fade } from 'react-fade';
import $ from 'jquery';

class Saved extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: ['https://www.google.com','https://www.google.com' ]
    };
  }
//get request to server which will send a get request to the db
  getLinks() {
    axios.get('api/article')
      .then((res) => {
        console.log(res, "dbLinks get res recieved");
        //res is an object with property data containing array of ulrs
        //res mapped in articleRoutes.js to just be the url
        this.setState({links: res.data});
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.getLinks();
  }

  render() {
    return (
      <div>
        <h2>Saved Stories</h2>
        <div>
          {this.state.links.map((link, i) =>
            <div key={i*10}>
              <a href={link}>
                <img src={link} />
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Saved;
