import React, { useEffect, useState } from 'react';
import {url} from './constants/globals';
import './TaxonImages.css';

export default function TaxonImages(props) {
	const [images, setImages] = useState([]);
	  
	  useEffect( () => {
		console.log(props.taxon[0].id);
		const getImages = () => {
			fetch("http://localhost:8000/api/taxons/"+ props.taxon[0].id +"/images")
				.then(response => {
					return response.json()
				})
				.then(d => {
					setImages(d);
					console.log(d);
				})			
		};
		getImages();
		
		return () => {
			setImages([]);
		}
		

	  }, [props.taxon]);
	  
	  return (
		<div id="imageCont">
			{images.map( (image) => (
				<img src={url+"/img/taxons/"+ props.taxon[0].id +"/"+image.file_name} />
			))}
		</div>
	  );
}