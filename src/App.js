import React, { useState, useEffect } from "react";
import './App.css';
import SunburstChart from "./SunburstChart";
import Breadcrumbs from "./Breadcrumbs";
import TaxonImages from "./TaxonImages";

function App() {
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);
	const [taxonomy, setTaxonomy] = useState();
	
	const fetchTaxonData = () => {
		fetch("http://localhost:8000/api/taxons/1")
			.then(response => {
				return response.json()
			})
			.then(d => {
				setData(d);
				setLoading(false);
				setTaxonomy([{id:d.id, name:d.name}]);
			})
	};	
		
	useEffect(() => {
		fetchTaxonData();
	  }, []);
	
	function handleTaxon(taxon){
		setTaxonomy(taxon.reverse());
	}	
	
	if(isLoading){
		return <div>Loading</div>
	}	
	return (
		<div id="container" className="App">
			<div id="nav">
				<h1>Taxonomy</h1>
			</div>
			<Breadcrumbs taxonomy={taxonomy} />
			<div id="sunBurstAndImgCont">
				<SunburstChart data={data} taxonChange={ handleTaxon }/>
				<TaxonImages taxon={taxonomy} />
			</div>
		</div>
	);
}

export default App;
