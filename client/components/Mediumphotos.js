import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import axios from 'axios';
import MediumPhotoEntry from './MediumPhotoEntry.js';
import { default as Fade } from 'react-fade';



class Medium extends React.Component {
  // static contextTypes = {
  //   router: React.PropTypes.object
  // }
  constructor(props) {
    super(props)

    this.state = {
      mediumPhotos: [],
      //default search parameters
      searchParams: {
        source: 'all',
        section: 'all',
        time: '24-168',
        limit: 20
      }
    }
  }
  getPhotos(source, section, time, limit) {
    //bypassing the server here
    axios
    // .get('http://api.nytimes.com/svc/news/v3/content/nyt/business/72.json?limit=15')
    //get params and organize them, add them to req.body
    .get('api/Large', {
      params: {
        source: 'all',
        section: 'all',
        time: '89',
        //only rendering 8, but sometimes the articles do not have photos
        //so retrieve extra and then select 8 later
        limit: 30,
        offset: '30'
      }
      // params: {
      //   source: source || 'all',
      //   section: section || 'all',
      //   time: time || '24',
      //   limit: limit || 8
      // }
    })
    .then((response) => {
      var multimediaPhotos = response.data.results
      .filter((photo) => photo.multimedia.length === 4 || photo.multimedia.length === 3  )
      .splice(4,20)
      //there was a problem because some articles multimedia is ''
      //only want to render 8 images so splice
      this.setState({
        mediumPhotos: multimediaPhotos
      })
    })
    .catch(function (error) {
      console.log(error);
      // this.setState({ mediumPhotos: [] });
    });
  }

  componentDidMount() {
    this.getPhotos();
  }
  // // Get the photos from the server when the component loads
  // componentDidMount() {
  //   axios.get('http://api.nytimes.com/svc/news/v3/content/all/all.json')
  //   .then((res) => {
  //     this.setState({ mediumPhotos: res.data })
  //   })
  //   // Use .catch for error handling
  //   // Notice the reseting of the photos in case of an error
  //   .catch((err) => {
  //     console.error(err)
  //     this.setState({ mediumPhotos: [] })
  //   })
  // }
  render() {
    return (
      <div>
      <Fade duration={.6}>
        <h1>News from the Past Few Days</h1>
          <MediumPhotoEntry
            mediumPhotos={this.state.mediumPhotos}
          />
      </Fade>
      </div>
    )
  }
}

export default Medium
