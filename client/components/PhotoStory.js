import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';
import { default as Fade } from 'react-fade';

class PhotoStory extends React.Component {
  // static contextTypes = {
  //   router: React.PropTypes.object
  // }
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
      currentPhotos: [],
      currentPhotoIndex: 1
    }
  }

  getPhotos(source, section, time) {
    axios
    .get('api/Large', {
      params: {
        source: source || 'all',
        section: section || 'all',
        time: time || '24',
        limit: 20,
        offset: 0
      }
    })
    .then((response) => {
      var multimediaPhotos = response.data.results
      .filter((photo) => photo.multimedia.length === 4)
      this.setState({
        photos: multimediaPhotos,
        currentPhotos: multimediaPhotos.slice(0, this.state.currentPhotoIndex)
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getNextPhoto(e) {
    var index = this.state.currentPhotoIndex + 1
    var last = this.state.photos.length - 1
    if(index > last) {
      e.preventDefault()
      return null
    }
    var photos = this.state.photos.slice(index - 1, index)
    this.setState({
      currentPhotoIndex: index,
      currentPhotos: photos
    })
    e.preventDefault()
  }

  getPreviousPhoto(e) {
    var index = this.state.currentPhotoIndex - 1
    if(index < 1) {e.preventDefault(); return null}
    var photos = this.state.photos.slice(index - 1, index)
    this.setState({
      currentPhotoIndex: index,
      currentPhotos: photos
    })
    e.preventDefault()
  }

  componentDidMount() {
    this.getPhotos('all', 'all', '24');
  }


  render() {
    return (
      <div>
        <Fade duration={.8}>
        {this.state.currentPhotos.map((photo, i) =>
              <div style={divStyles} key={i} >
                <a style={center} href={photo.url}>
                  <img className="grow" src={photo.multimedia[3].url} />
                </a>
                <div>
                    <button style={buttonRight} onClick={this.getNextPhoto.bind(this)}>Next</button>
                    <button style={buttonLeft} onClick={this.getPreviousPhoto.bind(this)}>Previous</button>
                </div>
                <div style={centerAbstract}>{photo.abstract}</div>
              </div>
        )}
        </Fade>
      </div>
    )

  }
}

//styles to attach to style attribute of elements
var center = {
  'text-align': 'center'
}
var centerAbstract = {
     'width': '50%',
     'height': '50%',
     'margin': '0 auto',
     'font-family': 'avenir',
     'font-size': '1.2em',
}
var buttonRight = {
  'background-color': 'white',
   'border-radius': '8px',
   'margin': '3px',
   'width': '20%',
   'float': 'right'
}
var buttonLeft = {
  'background-color': 'white',
   'border-radius': '8px',
   'margin': '3px',
   'width': '20%',
   'float': 'left'
}
var divStyles = {
  'color': 'black',
  'fontFamily': 'sans-serif',
  'display': 'flex',
  'justify-content': 'center',
  'flex-direction':'column',
  'align-text': 'center',
  'padding': '5px',
  'margin': '5px'
}

export default PhotoStory;
