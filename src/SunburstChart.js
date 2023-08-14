import React, { useEffect, useRef } from 'react'
import Sunburst from 'sunburst-chart'
import * as d3 from 'd3'


export default function SunburstChart(props) {
	const chart = React.useRef(null);
	const ref = React.useRef(null)
	const color = d3.scaleOrdinal(d3.schemePaired);
	  
	React.useEffect(() => {
		chart.current = Sunburst()
		chart.current
		  .data(props.data)
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