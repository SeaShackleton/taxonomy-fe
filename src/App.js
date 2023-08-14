import React, { useState, useEffect } from "react";
import './App.css';
import SunburstChart from "./SunburstChart";

function App() {
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);
	
	const fetchTaxonData = () => {
		fetch("http://localhost:8000/api/taxonomy/1")
			.then(response => {
				return response.json()
			})
			.then(d => {
				setData(d);
				setLoading(false);
			})
	};	
		
	useEffect(() => {
		fetchTaxonData();
	  }, []);
	
	if(isLoading){
		return <div>Loading</div>
	}	
	return (
		<div className="App">
			<SunburstChart data={data}/>
		</div>
	);
}

export default App;
