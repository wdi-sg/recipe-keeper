const React = require("react");

class listRecipe extends React.Component {

	render() {
		const dataObject = this.props.recipes;
		
		const tableDataArray = dataObject.map(item => {
			let redirectURL = `/recipes/${item.id}`;
			return (<tr>
						<th>{item.id}</th>
						<td><a href={redirectURL}>{item["Recipe Title"]}</a></td>
					</tr>
					);
		})

		return (
			<html>
			<head>
			</head>
			<body>
				<h1>Recipe List</h1>
				<table>
				<thead>
					<tr>
						<th>Recipe ID</th>
						<th>Recipe title</th>
					</tr>
				</thead>
				<tbody>
					{tableDataArray}
				</tbody>
				</table>	
			</body>
			</html>
			);
	}
}

module.exports = listRecipe;