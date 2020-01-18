var React = require('react');
//this.prop.ingredients is the ingredients list, ingred 
class AnIngredient extends React.Component {
	render() {

		var choices = this.props.ingrelist.map(ingre => {
			if(ingre.name == this.props.obj.name) {
				return <option selected> {ingre.name} </option>
			} else {
				return <option> {ingre.name} </option>
			} 
		})

		return(
					<div className="form-row px-1 w-75">
						<div className="px-1 form-group col-md-6">
      				<label htmlFor="sel1">Ingredient</label>
      					<select name="this1" className="form-control" id="sel1">
        					{choices}
      					</select>
      			</div>
      			
      				<div class="form-group col-md-2">
		      			<label htmlFor="sel1">Amount</label>
		      			<input name="amount" type="text" className="form-control"  value={this.props.obj.amount}/>
      				</div>
      				<div class="form-group col-md-4">
		      			<label htmlFor="sel1">Notes</label>
		      			<input name="notes" type="text" className="form-control"  value={this.props.obj.notes}/>
      				</div>
      			
      		</div>
			) // End return 
	} // End Render
} // End AnIngredient


class Edit extends React.Component {
	render() {

			let formUrl = "/recipes/"+this.props.thisRecipe.id+"?_method=put"
			let htmlString = "";

			const showIngre = this.props.thisRecipe.ingredients.map(ingre => {
					return <AnIngredient obj = {ingre} ingrelist = {this.props.ingredients} />
			})

				
		return (
			<html>
				<head>
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
				</head>
				<body>
					<h1 className="p-3">{this.props.thisRecipe.name} - Recipe No . {this.props.thisRecipe.id}</h1>
					<form action = {formUrl} method="POST">
						<div className="px-1 form-group w-75">
              <label htmlFor="name-form">Name</label>
              <input name="name" type="text" className="form-control" id="name-form" value={this.props.thisRecipe.name}/>
            </div>

      			{showIngre}

            <div className="px-1 form-group">
              <label htmlFor="step-form">Steps</label>
              <input name="steps" type="text" className="form-control" id="steps-form" value={this.props.thisRecipe.steps}/>
            </div>

            <button type="submit" className="btn btn-primary m-2">Submit Edit</button>

          </form>

          <form action = {`/recipes/${this.props.thisRecipe.id}/addIngredient`} method="GET">
      				<button type="submit" className="btn btn-secondary m-2">Add Ingredient</button>
      		</form>

      		<form action = {`/recipes/${this.props.thisRecipe.id}/edit?_method=delete`} method="POST">
      				<button type="submit" className="btn btn-secondary m-2">Delete Ingredient</button>
      		</form>

          



				</body> 
			</html>
		)

	}
}

module.exports = Edit