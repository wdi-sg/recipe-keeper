var React = require('react');
var DefaultLayout = require('./layouts/default');

class Recipes extends React.Component {
  render() {

    const recipes = this.props.recipes.map( recipe => { return (
            <div className="col">
                <a href={"http://localhost:3000/recipes/" + recipe.id}>
                    <div className="recipe">
                        <h3>{recipe.id}</h3>
                        <h3>{recipe.title}</h3>
                        <h3>{recipe.ingredients}</h3>
                        <h3>{recipe.instructions}</h3>
                    </div>
                    </a>
            </div>
        );
    });

    return (
      <DefaultLayout title="HC Recipes" recipeLength={this.props.recipes.length}>

        <h1>Recipes Homepage</h1>
        {recipes}

      </DefaultLayout>
    );
  }
}

module.exports = Recipes;