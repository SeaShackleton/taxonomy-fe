import React, { useState } from 'react';

const TaxonomyService = (function(){
	
	const getAncestory = (target, children, ancestors = [{id:1, name:"Life"}]) => {
		if(children.hasOwnProperty("taxons")) {
			for(let child of children.taxons){
				if(children.id === target) {
					return ancestors;
				}
				
				const found = getAncestory(target, child, ancestors.concat({id: child.id, name: child.name}));
				if(found){
					return found;
				}
			}
		}
			
		return undefined;
	};
	
	return {
		getAncestoryById: function(data, id){
			return getAncestory(id, data );
		}
	};
})();

export default TaxonomyService;