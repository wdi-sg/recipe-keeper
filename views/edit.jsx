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
      				<label>Ingredient</label>
      					<select name="ingreArray" className="form-control">
        					{choices}
      					</select>
      			</div>
      			
      				<div class="form-group col-md-2">
		      			<label>Amount</label>
		      			<input name="amountArray" type="text" className="form-control"  value={this.props.obj.amount}/>
      				</div>
      				<div class="form-group col-md-4">
		      			<label>Notes</label>
		      			<input name="notesArray" type="text" className="form-control"  value={this.props.obj.notes}/>
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
					<h1 className="p-3">{this.props.thisRecipe.name} - Recipe {this.props.thisRecipe.id}</h1>
					<form action = {formUrl} method="POST">
						<div className="px-1 form-group w-75">
              <label>ID</label>
              <input name="id" type="text" className="form-control" id="id-form" readOnly value={this.props.thisRecipe.id}/>
            </div>


						<div className="px-1 form-group w-75">
              <label>Name</label>
              <input name="name" type="text" className="form-control" id="name-form" value={this.props.thisRecipe.name}/>
            </div>

      			{showIngre}

            <div className="px-1 form-group">
              <label>Steps</label>
              <input name="steps" type="text" className="form-control" id="steps-form" value={this.props.thisRecipe.steps}/>
            </div>

            <button type="submit" className="btn btn-primary m-2">Submit</button>

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