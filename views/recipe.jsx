var React = require('react');
var DefaultLayout = require('./layouts/default');

class Recipe extends React.Component {

  render() {

    return (
      <DefaultLayout title="This Recipe" recipeLength={this.props.length}>
        <h1>Individual Recipe</h1>
        <h2>{this.props.recipe.id}</h2>
        <h2>{this.props.recipe.title}</h2>
        <h2>{this.props.recipe.ingredients}</h2>
        <h2>{this.props.recipe.instructions}</h2>

      </DefaultLayout>
    );
  }
}

module.exports = Recipe;