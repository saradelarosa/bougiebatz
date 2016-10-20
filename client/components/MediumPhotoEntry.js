import React from 'react';
import { default as Fade } from 'react-fade';

var MediumPhotoEntry = ({mediumPhotos}) => (
  <div className="medium-photos">
  <Fade duration={.8}>
    {mediumPhotos.map((photo) =>
      <a href={photo.url}>
        <img className="medium-item" src={photo.multimedia[2].url} />
      </a>
    )}
    </Fade>
  </div>
);

export default MediumPhotoEntry
