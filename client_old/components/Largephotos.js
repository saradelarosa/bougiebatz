import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import axios from 'axios';
import Select from 'react-select';
import Dropdown from 'react-dropdown';
import { default as Fade } from 'react-fade';

const options = [{ value:  'all', label: 'all' },
      { value: 'arts', label: 'arts' },
      { value: 'blogs', label: 'blogs' },
      { value: 'books', label: 'books' },
      { value: 'briefing', label: 'briefing' },
      { value: 'business', label: 'business' },
      { value: 'food', label: 'food' },
      { value: 'health', label: 'health' },
      { value: 'magazine', label: 'magazine' },
      { value: 'movies', label: 'movies' },
      { value: 'multimedia', label: 'multimedia' },
      { value: 'multimedia/photos', label: 'photos' },
      { value: 'n.y. / region', label: 'new york' },
      { value: 'obituaries', label: 'obituaries' },
      { value: 'open', label: 'open' },
      { value: 'opinion', label: 'opinion' },
      { value: 'public editor', label: 'public editor' },
      { value: 'real estate', label: 'real estate' },
      { value: 'science', label: 'science' },
      { value: 'sports', label: 'sports' },
      { value: 'style', label: 'style' },
      { value: 'sunday review', label: 'sunday review' },
      { value: 'technology', label: 'technology' },
      { value: 'theater', label: 'theater' },
      { value: 'today’s paper', label: 'today' },
      { value: 'travel', label: 'travel' },
      { value: 'u.s.', label: 'u.s.' },
      { value: 'washington', label: 'washington' },
      { value: 'week in review', label: 'week in review' },
      { value: 'well', label: 'well' },
      { value: 'world', label: 'world' },
      { value: 'your money', label: 'your money' }];

class Large extends React.Component {
  // static contextTypes = {
  //   router: React.PropTypes.object
  // }
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      selectValue: null
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(updatedValue) {
    console.log('State changed to ' + updatedValue.value);
    this.setState({
      selectValue: updatedValue.value
    });
    this.getPhotos('all', updatedValue.value, 24)
  }

  getPhotos(source, section, time) {
    console.log('Inside getPhotos', section);
    axios
    .get('api/Large', {
        params: {
          source: source || 'all',
          section: section || 'all',
          time: time || '24',
          limit: 20,
          offset: 0
          //only rendering 4, but sometimes the articles do not have photos
          //so retrieve extra and then select 4 later
        }
    })
    .then((response) => {
      var multimediaPhotos = response.data.results
        .filter((photo) => photo.multimedia.length === 4);
        // .splice(0,4)
      //there was a problem because some articles multimedia is ''
      //only want to render 4 images so splice
      this.setState({
        photos: multimediaPhotos
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getPhotos('all', this.state.val, '24');
  }

  saveLink(e) {
    console.log($(e.currentTarget).attr('src'), "++++++++");
    axios.post('api/article', {
      articleImageUrl: $(e.currentTarget).attr('src')
    })
    .then((res) => console.log('sucess from large photos')
    )
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
      <div className="select">
      {/* Select is an npm module that creates... look it up */}
        <Dropdown 
          options={options}
          onChange={this.updateValue}
          value={this.state.selectValue}
          placeholder='Section'
          />
      </div>
      <div>
        <LargePhotos
          photos={this.state.photos}
          saveLink={this.saveLink.bind(this)}
        />
      </div>
      </div>
    )

  }
}
//stateless functional component for rendering images
var LargePhotos = ({ photos, saveLink }) => (
  <Fade duration={.8}>
  <div className="largePhotos">
   {photos.map((photo, i) =>
         <div className="largePhoto"  key={i} >
           <a className="show" href={photo.url} target="_blank">
             <img className='showImg'  onClick={saveLink} src={photo.multimedia[3].url} />
           </a>
           <div className="reveal"> {photo.abstract} </div>
         </div>
   )}
   </div>
   </Fade>
)

var hide = {
  'display':'none',
}

export default Large;
