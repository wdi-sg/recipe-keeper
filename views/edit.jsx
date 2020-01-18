var React = require('react');

class Edit extends React.Component {
    render() {
    let page = "/recipes/"+this.props.id+"?_method=put";
  	return (
  		<form method="POST" action={page}>
            Edit Recipe {this.props.id}:
            <div>
            Title: 
            <input type="text" name="title" defaultValue={this.props.recipe.title}/>
            </div>
            <div>
            Ingredients:
            <input type="text" name="ingredients" defaultValue={this.props.recipe.ingredients}/>
            </div>
            <div>
            Instructions:
            <input type="text" name="instructions" defaultValue={this.props.recipe.instructions}/>
            </div>
            <div>
            <input type="submit" defaultValue="Submit"/>
            </div>
        </form>
  	)
  }
}

module.exports = Edit;