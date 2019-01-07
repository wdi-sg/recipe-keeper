var React = require('react');
var DefaultLayout = require('./layouts/default');

class EditRecipe extends React.Component {

  render() {

    return (
      <DefaultLayout title="This Recipe" recipeLength={this.props.length}>

        <form method="POST" action={"/recipes/" + this.props.recipe.id + "?_method=PUT"}>
            <input type="" name="title" placeholder="Your New Recipe's Name" value={this.props.recipe.title}/>
            <input type="" name="ingredients" placeholder="Ingredients Needed" value={this.props.recipe.ingredients}/>
            <input type="" name="instructions" placeholder="Recipe Instructions" value={this.props.recipe.instructions} />
            <input type="submit"/>
        </form>

      </DefaultLayout>
    );
  }
}

module.exports = EditRecipe;