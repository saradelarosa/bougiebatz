import React from 'react';
import axios from 'axios';


class Medium extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }
  constructor(props) {
    super(props)

    this.state = {
      mediumPhotos: []
    }
  }
  // Get the photos from the server when the component loads
  componentDidMount() {
    axios.get('http://api.nytimes.com/svc/news/v3/content/all/all.json')
    .then((res) => {
      this.setState({ mediumPhotos: res.data })
    })
    // Use .catch for error handling
    // Notice the reseting of the photos in case of an error
    .catch((err) => {
      console.error(err)
      this.setState({ mediumPhotos: [] })
    })
  }
  render() {
    return (
      <div>
        <h1>News from the Past Week</h1>
      </div>
    )
  }
}

export default Medium
