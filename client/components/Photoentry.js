import React from 'react';
import { default as Fade } from 'react-fade';

//creating template f

var PhotoEntry = ({photos, handleSearchParamChange}) => (
	<Fade duration={.8}>
	<div className="smallPhotos">
	{photos.map((photo, i) =>
     <div key={i}>
       <a href={photo.url}>
         <img className="smallPhotoItem" src={photo.multimedia[2].url} />
       </a>
    </div>
   )}
 </div>
 </Fade>
)


export default PhotoEntry;
