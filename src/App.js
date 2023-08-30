import React, { useState, useEffect } from "react";
import './App.css';
import SunburstChart from "./SunburstChart";
import Breadcrumbs from "./Breadcrumbs";

function App() {
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);
	const [taxonomy, setTaxonomy] = useState();
	
	const fetchTaxonData = () => {
		fetch("http://localhost:8000/api/taxonomy/1")
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
		setTaxonomy(taxon);
	}	
	
	if(isLoading){
		return <div>Loading</div>
	}	
	return (
		<div className="App">
			<Breadcrumbs taxonomy={taxonomy} />
			<SunburstChart data={data} taxonChange={ handleTaxon }/>
		</div>
	);
}

export default App;
