/*
Template literals in Javascript

Backticks enclosed with curly brackets. Like this {``}
Then use ${ } to pass in JS variables

Example:
{`/recipes/${this.props.thisRecipe.id}/edit`}



*/


var React = require('react');
class Ingredients extends React.Component {
	render() {
		
		const ingreString = this.props.list.map( ingre => {
				
					return <li className="list-group-item d-flex justify-content-between align-items-center"> {ingre.notes} {ingre.name}
	    		<strong>{ingre.amount}</strong>
	  			</li>

		})

		console.log(ingreString)
		/*
		At this point ingreString is still an array (as printed by the console log above)
		But react is able convert it into a coherent html string. 
		*/

		return(
			<ul class="list-group">{ingreString}</ul>
			)/*End Return */
	}/*End Render */

}/*End Ingredients */


class Recipe extends React.Component {
	render() {
		console.log(this.props.thisRecipe.id)
		
		return (
			<html>
				<head>
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
				</head>
				<body>
					<div class="card w-75 p-3">	
						<div class="card-header">
							Recipe No . {this.props.thisRecipe.id}
						</div>
						<div class="card-body d-flex flex-column justify-content-*-center">
							<img class="card-img-top" src="https://i.imgur.com/eTuCPxM.jpg" height="400" width="400" alt="Card image cap"></img>
							<h5 class="card-title mt-3 mb-1">{this.props.thisRecipe.name}</h5>
							<p class="card-text"><Ingredients list={this.props.thisRecipe.ingredients}/></p>
							<p class="card-text">{this.props.thisRecipe.steps}</p>
							<form class="mt-1 mb-1" action= {`/recipes/${this.props.thisRecipe.id}/edit`} method="GET">
								<button type="submit" className="btn btn-primary">Edit</button>
							</form>
							<form class="mt-1 mb-1" action={`/recipes/${this.props.thisRecipe.id}?_method=delete`} method="POST">
								<button type="submit" className="btn btn-primary">Delete</button>
							</form>
							<form class="mt-2 mb-1" action="/recipes" method="GET">
								<button type="submit" className="btn btn-primary">Back to Main Menu</button>
							</form>
							<form class="mt-2 mb-1" action="/ingredients" method="GET">
								<button type="submit" className="btn btn-primary">Go to Ingredients Menu</button>
							</form>
						</div>
					</div>
				</body> 
			</html>
		)

	}
}

module.exports = Recipe