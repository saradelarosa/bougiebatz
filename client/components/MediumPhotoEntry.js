import React from 'react';

var MediumPhotoEntry = ({mediumPhotos}) => (
  <div className="Medium Photos">
    {mediumPhotos.map((photo) =>
      <a href={photo.url}>
        <img className="grow" src={photo.multimedia[3].url} />
      </a>
    )}
  </div>
);

export default MediumPhotoEntry
