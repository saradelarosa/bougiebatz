import React from 'react';

var MediumPhotoEntry = ({mediumPhotos}) => (
  <div className="Medium Photos">
    {mediumPhotos.map((photo) =>
      <a href={photo.url}>
        <img className="grow" src={photo.multimedia[1].url} />
      </a>
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// MediumPhotoEntry.propTypes = {
//   mediumPhotos: React.PropTypes.object.isRequired
// };

export default MediumPhotoEntry
