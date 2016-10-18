import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import axios from 'axios';

class Large extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
      //default search parameters
      searchParams: {
        source: 'all',
        section: 'all',
        time: '24',
        limit: 4
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
          time: '24',
          //only rendering 4, but sometimes the articles do not have photos
          //so retrieve extra and then select 4 later
          limit: 8
        }
        // params: {
        //   source: source || 'all',
        //   section: section || 'all',
        //   time: time || '24',
        //   limit: limit || 4
        // }
    })
    .then( (response) => {
      var multimediaPhotos = response.data.results
        .filter((photo) => photo.multimedia.length === 4 )
        .splice(0,4)
      //there was a problem because some articles multimedia is ''
      //only want to render 4 images so splice
      this.setState({
        photos: multimediaPhotos
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getPhotos();
  }

  render() {
    return (
      <div>
      <div>HELLO THERE TEST</div>
      <LargePhotos
        photos={this.state.photos}
        handleSearchParamChange={this.getPhotos.bind(this)}
      />
      </div>
    )

  }
}

var LargePhotos = ({ photos, handleSearchParamChange }) => (
  <div className="Large Photos">
   {photos.map((photo, i) =>
     <div key={i} > {photo.abstract}
       <a href={photo.url}>
         <img className="grow" src={photo.multimedia[2].url} />
       </a>
    </div>
   )}
 </div>
)

export default Large;
