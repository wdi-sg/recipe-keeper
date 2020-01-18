const React = require('react');
const PropTypes = require('prop-types');
const DefaultLayout = require('./layouts/default');

class Recipe extends React.Component {
    render() {

      const actionURL = `/recipes/${this.props.recipeId}?_method=delete`;
      const editURL = `/recipes/${this.props.recipeId}/edit`;

        return (
          <DefaultLayout>
            <div>
              <h3>{this.props.message}</h3>
              <h1>{this.props.recipe.title}</h1>
              <h3>Ingredients:</h3>
              <p>{this.props.recipe.ingredients}</p>
              <h3>Method:</h3>
              <p>{this.props.recipe.method}</p>
              <p><a href={editURL}>Click me to edit this recipe.</a></p>
              <p><a href={actionURL}>Click to delete recipe:</a></p>
            <p><a href="/recipes/add">Click me to add a new recipe</a></p>
            <p><a href="/recipes/">Click me to go back to the main list.</a></p>
            </div>
        </DefaultLayout>
        );
    }
};

module.exports = Recipe;
