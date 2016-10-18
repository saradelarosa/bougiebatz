import React from 'react'
import axios from 'axios'

// import PhotoEntry from 'PhotoEntry'

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
