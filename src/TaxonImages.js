import React, { useEffect } from 'react';
import './TaxonImages.css';

export default function TaxonImages(props) {
	  
	  useEffect( () => {
		console.log(props.taxon[0].id);
		const getImages = () => {
			fetch("http://localhost:8000/api/taxons/"+ props.taxon[0].id +"/images")
				.then(response => {
					return response.json()
				})
				.then(d => {
					console.log(d);
				})			
		};
		
		getImages();
	  }, [props.taxon]);
	  
	  return (
		<div id="imageCont">test</div>
	  );
}