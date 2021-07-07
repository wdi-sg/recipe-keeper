const React = require('react');
const DefaultLayout = require('./layouts/default');
const RecipeBlock = require('./components/recipeBlock');
const Select = require('./components/selectMenu');

class Recipes extends React.Component {
  render() {


    let headerTitle = "Recipes | Recipe Keeper";
    let recipes = this.props.recipes;

    let allRecipes = recipes.map((recipe) => {
        return (
            <RecipeBlock recipe={recipe}/>
        );
    })

    return (
      <DefaultLayout title={headerTitle}>
        <h1>All Recipes</h1>
        <Select/>
        <div>{allRecipes}</div>
      </DefaultLayout>
    );
  }
}

module.exports = Recipes;