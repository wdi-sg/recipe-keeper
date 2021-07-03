var React = require('react');
var DefaultLayout = require('./layouts/default');

class Recipe extends React.Component {

  render() {

    return (
      <DefaultLayout title="This Recipe" recipeLength={this.props.length}>
        <h2>{this.props.recipe.id}</h2>
        <h2>{this.props.recipe.title}</h2>
        <h2>{this.props.recipe.ingredients}</h2>
        <h2>{this.props.recipe.instructions}</h2>
        <form method="GET" action={"/recipes/" + this.props.recipe.id + "/edit"}>
            <input type="submit" value="Edit Recipe"/>
        </form>
        <form method="POST" action={"/recipes/" + this.props.recipe.id + "?_method=DELETE"}>
            <input type="submit" value="Delete Recipe"/>
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Recipe;