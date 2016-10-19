import React from 'react'

//creating template f

var PhotoEntry = ({photos, handleSearchParamChange}) => (
	<div className="smallPhotos"> 
	{photos.map((photo, i) =>
     <div key={i}>
       <a href={photo.url}>
         <img className="flex-item" src={photo.multimedia[0].url} />
       </a>
    </div>
   )}
 </div>
)


export default PhotoEntry;
