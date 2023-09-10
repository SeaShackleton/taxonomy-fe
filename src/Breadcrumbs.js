import "./Breadcrumbs.css";

export default function Breadcrumbs(props) {
	
	return (
		<ol className="breadcrumbs">
			{props.taxonomy.map((taxon, i) => <li key={taxon.id}>{taxon.name}</li>)}
		</ol>
	);
}