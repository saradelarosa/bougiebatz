import React from 'react';

var MediumPhotoEntry = ({mediumPhotos}) => (
  <div className="medium-photos">
    {mediumPhotos.map((photo) =>
      <a href={photo.url}>
        <img className="medium-item" src={photo.multimedia[2].url} />
      </a>
    )}
  </div>
);

export default MediumPhotoEntry
