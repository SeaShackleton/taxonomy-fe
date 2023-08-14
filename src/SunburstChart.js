import React, { useEffect, useRef, useState } from 'react'
import Sunburst from 'sunburst-chart'
import * as d3 from 'd3'
import data from "./data";


export default function SunburstChart() {
	const chart = React.useRef(null);
	const ref = React.useRef(null)
	const color = d3.scaleOrdinal(d3.schemePaired);
	const [data2, setData2] = useState([]);


	const fetchTaxonData = () => {
		fetch("http://localhost:8000/api/taxonomy/1")
			.then(response => {
				return response.json()
				//return response;
			})
			.then(data2 => {
				//var t = JSON.parse(data2);
				console.log( data2 );
				setData2(data2);
			})
	};

	useEffect(() => {
		fetchTaxonData();
	  }, []);
	  
	  
	React.useEffect(() => {
		chart.current = Sunburst()
		chart.current
		  .data(data)
		  .width(500)
		  .height(500)
		  .color((d, parent) => color(parent ? parent.data.name : null))
		  .excludeRoot(true)
		  //.radiusScaleExponent(0.4)
		  .labelOrientation('angular')
		  .children('taxons')
		  .onClick(d => { 
				chart.current.focusOnNode(d);
			})
		  (ref.current)
	  }, []);
	  
	  return (
		<div ref={ref} id="sunburst" />
	  );
}