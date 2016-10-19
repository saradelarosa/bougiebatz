import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';

class PhotoStory extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }
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
        limit: 20
      }
    })
    .then((response) => {
      var multimediaPhotos = response.data.results
      .filter((photo) => photo.multimedia.length === 4)
      // .splice(0,4)
      //there was a problem because some articles multimedia is ''
      //only want to render 4 images so splice
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
    var photos = this.state.photos.slice(index - 1, index)
    this.setState({
      currentPhotoIndex: index,
      currentPhotos: photos
    })
    e.preventDefault()
  }

  getPreviousPhoto(e) {
    var index = this.state.currentPhotoIndex - 1
    var photos = this.state.photos.slice(index - 1, index)
    this.setState({
      currentPhotoIndex: index,
      currentPhotos: photos
    })
    e.preventDefault()
  }
// add emthods to call get photos again and it will automatically increment, or remove
componentDidMount() {
  this.getPhotos('all', 'all', '24');
}


  render() {
    return (
      <div>
        {this.state.currentPhotos.map((photo, i) =>
          <Row key={i}>
            <Col xs={8} xsOffset={2}>
              <div style={LargeStyles} key={i} >
                <span>{photo.abstract}</span>
                <a href={photo.url}>
                  <img className="grow" src={photo.multimedia[3].url} />
                </a>
                <div>{photo.title}</div>
                <div>
                  <form>
                    <button onClick={this.getNextPhoto.bind(this)}>Next Article</button>
                    <button onClick={this.getPreviousPhoto.bind(this)}>Previous Article</button>
                  </form>
               </div>
              </div>
            </Col>
          </Row>
        )}
      </div>
    )

  }
}

//styles to attach to style attribute of elements
var LargeStyles = {
  color: 'black',
  'fontFamily': 'sans-serif',
}

export default PhotoStory;
