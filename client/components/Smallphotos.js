import React from 'react'
import axios from 'axios'

import PhotoEntry from 'PhotoEntry'

class Small extends React.Component {
	constructor(props) {
		super(props)
			this.state = {
				photos: []	
			};
	}

	componentDidMount(){
		axios.get('http://api.nytimes.com/svc/news/v3/content/all/all.json')
		.then((res)=>{ 
			this.setState({
				photos:res.data
			})
		})
		.catch((error)=>{
			console.log(error);
		})
	}

	render() {
		return (
			<div id="SmallPhotos">
				<h1>News From the Month</h1>
				<ul>{this.state.photos.map((photo, i) =>
				<PhotoEntry photo={photo} key={i}/>	
				)}
				</ul>
			</div>
			)
		}
	}

	export default Small;

	"results": [
    {
      "section": "Food",
      "subsection": "",
      "title": "Creepy Crawly Chocolates for Halloween",
      "abstract": "Spiders and webs from a chocolatier from Chicago arrive just in time for the holiday.",
      "url": "http://www.nytimes.com/2016/10/19/dining/chocolate-spider-webs-halloween-treats.html",
      "byline": "By FLORENCE FABRICANT",
      "thumbnail_standard": "https://static01.nyt.com/images/2016/10/19/dining/19-BURNER-TREAT/19-BURNER-TREAT-thumbStandard.jpg",
      "item_type": "Article",
      "source": "The New York Times",
      "updated_date": "2016-10-17T19:35:15-04:00",
      "created_date": "2016-10-17T19:35:15-04:00",
      "published_date": "2016-10-17T00:00:00-04:00",
      "material_type_facet": "News",
      "kicker": "",
      "subheadline": "",
      "des_facet": [
        "Chocolate",
        "Halloween"
      ],
      "org_facet": [
        "Veruca Chocolates"
      ],
      "per_facet": "",
      "geo_facet": "",
      "related_urls": null,
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/10/19/dining/19-BURNER-TREAT/19-BURNER-TREAT-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Tony Cenicola/The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/10/19/dining/19-BURNER-TREAT/19-BURNER-TREAT-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Tony Cenicola/The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/10/19/dining/19-BURNER-TREAT/19-BURNER-TREAT-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Tony Cenicola/The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/10/19/dining/19-BURNER-TREAT/19-BURNER-TREAT-mediumThreeByTwo440.jpg",
          "format": "mediumThreeByTwo440",
          "height": 293,
          "width": 440,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Tony Cenicola/The New York Times"
        }
      ]
    },