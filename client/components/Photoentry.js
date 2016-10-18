import React from 'react'

//creating template f

var PhotoEntry = ({photos, handleSearchParamChange}) => (
	<div className="Small Photos"> 
	{photos.map((photo, i) =>
     <div key={i} > {photo.abstract}
       <a href={photo.url}>
         <img className="" src={photo.multimedia[2].url} />
       </a>
    </div>
   )}
 </div>
)


export default PhotoEntry;
