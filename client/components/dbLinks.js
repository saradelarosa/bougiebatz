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
  getLinks() {
    axios.get('api/article')
      .then((res) => {
        console.log(res, "dbLinks get res recieved");
        this.setState({links: res});
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <h2>Saved Links</h2>
        <div>
          {this.state.links.map((link) =>
            <div>
              <a href={link}> {link}
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
