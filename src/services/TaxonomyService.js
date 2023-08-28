import React, { useState } from 'react';

const TaxonomyService = (function(){
	
	const getAncestory = (target, children, ancestors = []) => {

	};
	
	return {
		getAncestoryById: function(data, id){
			console.log(getAncestory(id, Object.values(data)));
			//for(let node of Object.values(data)){			}
			console.log(data)
		}
	};
})();

export default TaxonomyService;