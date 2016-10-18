import React from 'react'

//creating template f

var PhotoEntry = ({photos, handleSearchParamChange}) => (
	<div className="Small Photos"> 
	{photos.map((photo, i) =>
     <div key={i}>
       <a href={photo.url}>
         <img className="" src={photo.multimedia[0].url} />
       </a>
    </div>
   )}
 </div>
)


export default PhotoEntry;
