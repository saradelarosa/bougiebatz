import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

var MediumPhotoEntry = ({mediumPhotos}) => (
  <div className="Medium Photos">
    {mediumPhotos.map((photo) =>
      <Grid>
        <Row>
          <Col xs={6} md={4}>
          <a href={photo.url}>
            <img className="grow" src={photo.multimedia[1].url}/>
          </a>
          </Col>
        </Row>
      </Grid>
    )}
  </div>
);



// {/* <Grid>
//    <Row>
//      <Col xs={6} md={4}>
//        <Image src="/assets/thumbnail.png" rounded />
//      </Col>
//      <Col xs={6} md={4}>
//        <Image src="/assets/thumbnail.png" circle />
//      </Col>
//      <Col xs={6} md={4}>
//        <Image src="/assets/thumbnail.png" thumbnail />
//      </Col>
//    </Row>
//  </Grid> */}
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// MediumPhotoEntry.propTypes = {
//   mediumPhotos: React.PropTypes.object.isRequired
// };

export default MediumPhotoEntry
