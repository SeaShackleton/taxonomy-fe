import React, { useEffect, useState } from 'react';
import {url} from './constants/globals';
import './TaxonImages.css';

export default function TaxonImages(props) {
	const [images, setImages] = useState([]);
	const [isLoading, setLoading] = useState(true);
	  
	useEffect( () => {
		console.log(props.taxon[0].id);

		const getImages = () => {
			fetch("http://localhost:8000/api/taxons/"+ props.taxon[0].id +"/images")
				.then(response => {
					return response.json()
				})
				.then(d => {
					setLoading(false);
					setImages(d);
					console.log(d);
				})			
		};
		getImages();

		return () => {
			setImages([]);
			setLoading(true);
		}


	}, [props.taxon]);
	  
	if(isLoading){
		return <div className="loadingContainer"><img src={url+"/img/loading-gif.gif"} /></div>
	}		  
	return (
		<div id="imageCont">
			{images.map( (image) => (
				<img src={url+"/img/taxons/"+ image.taxon_id +"/"+image.file_name} />
			))}
		</div>
	);
}