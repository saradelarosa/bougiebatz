import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import axios from 'axios';
import PhotoEntry from './Photoentry.js';
import ImageLayout from 'react-image-layout';
// import react-component-gallery from "react-component-gallery";

class Small extends React.Component {
	// static contextTypes = {
  //   router: React.PropTypes.object
  // }
	constructor(props) {
		super(props)
			this.state = {
				photos: [],
				searchParams: {
					source: 'all',
					section: 'all',
					time: '168',
					limit: 50,
					offest: '40'
				}
			}
	}

	getPhotos(source, section, time, limit) {
		axios.get('api/Large', {
			params: {
				source: 'all',
				section:'all',
				time: '168',
				limit: 50,
				offset: '50'
			}
		})
		.then((response )=>{
			var multimediaPhotos = response.data.results
        .filter((photo) => photo.multimedia.length === 4 )
        .splice(0,50)

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
    console.log()
  }

	render() {
		return (
		<div>
		<h1> News From the Month </h1>
	     <PhotoEntry photos={this.state.photos} />
	    </div>
		)
	  }
	}


	export default Small;
