import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import axios from 'axios';
import Select from 'react-select';
import { Grid, Row, Col } from 'react-bootstrap';

class Large extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
      values: {
        all: 'all',
        admin: 'admin',
        'afternoon update': 'afternoon update',
        arts: 'arts',
        automobiles: 'automobiles',
        autos: 'autos',
        blogs: 'blogs',
        books: 'books',
        briefing: 'briefing',
        business: 'business',
        'business day': 'business day',
        corrections: 'corrections',
        'crosswords & games': 'crosswords & games',
        'crosswords/games': 'crosswords/games',
        education: 'education',
        'fashion & style': 'fashion & style',
        food: 'food',
        giving: 'giving',
        'great homes & destinations': 'great homes & destinations',
        health: 'health',
        'home & garden': 'home & garden',
        'international home': 'international home',
        'job market': 'job market',
        magazine: 'magazine',
        membercenter: 'membercenter',
        movies: 'movies',
        multimedia: 'multimedia',
        'multimedia/photos': 'multimedia/photos',
        'n.y. / region': 'n.y. / region',
        'nyt now': 'nyt now',
        obituaries: 'obituaries',
        open: 'open',
        opinion: 'opinion',
        podcasts: 'podcasts',
        'public editor': 'public editor',
        'real estate': 'real estate',
        science: 'science',
        sports: 'sports',
        style: 'style',
        'sunday review': 'sunday review',
        't magazine': 't magazine',
        't:style': 't:style',
        technology: 'technology',
        'the learning network': 'the learning network',
        'the upshot': 'the upshot',
        theater: 'theater',
        'times insider': 'times insider',
        'times topics': 'times topics',
        'today’s paper': 'today’s paper',
        travel: 'travel',
        'u.s.': 'u.s.',
        washington: 'washington',
        'week in review': 'week in review',
        well: 'well',
        world: 'world',
        'your money': 'your money'
      },
      //for dropdown menu
      options: [
        { value:  'all', label: 'all' },
        { value: 'arts', label: 'arts' },
        { value: 'automobiles', label: 'automobiles' },
        { value: 'blogs', label: 'blogs' },
        { value: 'books', label: 'books' },
        { value: 'briefing', label: 'briefing' },
        { value: 'business', label: 'business' },
        { value: 'education', label: 'education' },
        { value: 'fashion & style', label: 'fashion & style' },
        { value: 'food', label: 'food' },
        { value: 'health', label: 'health' },
        { value: 'home & garden', label: 'home & garden' },
        { value: 'international home', label: 'international home' },
        { value: 'job market', label: 'job market' },
        { value: 'magazine', label: 'magazine' },
        { value: 'membercenter', label: 'membercenter' },
        { value: 'movies', label: 'movies' },
        { value: 'multimedia', label: 'multimedia' },
        { value: 'multimedia/photos', label: 'multimedia/photos' },
        { value: 'n.y. / region', label: 'n.y. / region' },
        { value: 'nyt now', label: 'nyt now' },
        { value: 'obituaries', label: 'obituaries' },
        { value: 'open', label: 'open' },
        { value: 'opinion', label: 'opinion' },
        { value: 'podcasts', label: 'podcasts' },
        { value: 'public editor', label: 'public editor' },
        { value: 'real estate', label: 'real estate' },
        { value: 'science', label: 'science' },
        { value: 'sports', label: 'sports' },
        { value: 'style', label: 'style' },
        { value: 'sunday review', label: 'sunday review' },
        { value: 't:style', label: 't:style' },
        { value: 'technology', label: 'technology' },
        { value: 'the learning network', label: 'the learning network' },
        { value: 'the upshot', label: 'the upshot' },
        { value: 'theater', label: 'theater' },
        { value: 'times insider', label: 'times insider' },
        { value: 'times topics', label: 'times topics' },
        { value: 'today’s paper', label: 'today’s paper' },
        { value: 'travel', label: 'travel' },
        { value: 'u.s.', label: 'u.s.' },
        { value: 'washington', label: 'washington' },
        { value: 'week in review', label: 'week in review' },
        { value: 'well', label: 'well' },
        { value: 'world', label: 'world' },
        { value: 'yougr money', label: 'your money' }
      ]
    }
  }
  getNewImages(value) {
    for(let key in this.state.values) {
      if(key === value) {
        this.getPhotos('all', value, '24')
      }
    }
  }

  getPhotos(source, section, time, limit) {
    axios
    .get('api/Large', {
        params: {
          source: source || 'all',
          section: section || 'all',
          time: time || '24',
          limit: 20
          //only rendering 4, but sometimes the articles do not have photos
          //so retrieve extra and then select 4 later
        }
    })
    .then((response) => {
      var multimediaPhotos = response.data.results
        .filter((photo) => photo.multimedia.length === 4)
        // .splice(0,4)
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
    this.getPhotos('all', this.state.val, '24');
  }

  render() {
    return (
      <div>
      <div className="select">
      {/* Select is an npm module that creates... look it up */}
       <Col xs={1} xsOffset={0}>
          <Select
            placeholder=""
            options={this.state.options}
            autosize={false}
            onInputChange={this.getNewImages.bind(this)}
            scrollMenuIntoView={false}
            searchable={true}
            matchProp={'value'}
            //uncomment these to remove the drop down list filter search
            // menuRenderer={function(){}}
            // optionRenderer={function(){}}
          />
        </Col>

      </div>
      <Col xs={8} xsOffset={0}>
        <LargePhotos
          photos={this.state.photos}
          removeArticle={()=> this.removeArticle()}
          nextArticle={()=> this.nextArticle()}
        />
      </Col>
      </div>
    )

  }
}
//stateless functional component for rendering images
var LargePhotos = ({ photos, nextArticle, removeArticle }) => (
  <div className="Large Photos">
   {photos.map((photo, i) =>
     <Row>
       <Col xs={5} xsOffset={i % 2 === 0 ? 2 : 5}>
         <div style={LargeStyles} key={i} > {photo.abstract}
           <a href={photo.url}>
             <img className="grow" src={photo.multimedia[3].url} />
           </a>
           <div className={i}>{photo.title}</div>
         </div>
       </Col>
    </Row>
   )}
 </div>
)
//styles to attach to style attribute of elements
var LargeStyles = {
    color: 'black',
    'fontFamily': 'sans-serif',
}

export default Large;
