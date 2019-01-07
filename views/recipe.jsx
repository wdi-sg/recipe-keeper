var React = require('react');
var DefaultLayout = require('./layouts/default');

class Recipe extends React.Component {

  render() {

    return (
      <DefaultLayout title="This Recipe" recipeLength={this.props.length}>
      <div style={{textAlign: 'center', height: '300px'}}>
        <h2>ID: {this.props.recipe.id}</h2>
        <h2>Title: {this.props.recipe.title}</h2>
        <h2>Ingredients: {this.props.recipe.ingredients}</h2>
        <h2>Instructions: {this.props.recipe.instructions}</h2>
        <br />
        <form method="GET" action={"/recipes/" + this.props.recipe.id + "/edit"}>
            <input type="submit" value="Edit Recipe"/>
        </form>
        <br />
        <form method="POST" action={"/recipes/" + this.props.recipe.id + "?_method=DELETE"}>
            <input type="submit" value="Delete Recipe"/>
        </form>
      </div>
      </DefaultLayout>
    );
  }
}

module.exports = Recipe;