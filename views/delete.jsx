var React = require('react');

class Delete extends React.Component {
    render() {
    let page = "/recipes/"+this.props.id+"?_method=delete";
  	return (
  		<form method="POST" action={page}>
            <div>
               <h1>Delete Recipe {this.props.recipe.id}:</h1>
               <h1>Recipe: {this.props.recipe.title}</h1>
               <h1>Ingredients: {this.props.recipe.ingredients}</h1>
               <h1>Instructions: {this.props.recipe.instructions}</h1>
               <input type="hidden" name="id" value={this.props.recipe.id}/>
               <input type="submit" defaultValue="Delete this recipe"/>
               </div>
        </form>
  	)
  }
}

module.exports = Delete;