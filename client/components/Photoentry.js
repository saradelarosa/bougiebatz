import React from 'react';
import { default as Fade } from 'react-fade';

//creating template f

var PhotoEntry = ({photos, handleSearchParamChange}) => (
	<div className="smallPhotos">
	{photos.map((photo, i) =>
		<Fade duration={.8}>
     <div key={i}>
       <a href={photo.url}>
         <img className="smallPhotoItem" src={photo.multimedia[3].url} />
       </a>
    </div>
		</Fade>
   )}
 </div>
)


export default PhotoEntry;
