const React = require('react');
const DefaultLayout = require('./layouts/default');
const RecipeBlock = require('./components/recipeBlock');



class Home extends React.Component {
  render() {

    let headerTitle = "Home | Recipe";
    let recipes = this.props.recipes;

    let allRecipes = recipes.map((recipe, index) => {
        return (
            <RecipeBlock recipe={recipe} index={index}/>
        );
    })

    return (
      <DefaultLayout title={headerTitle}>
        <h1>The Recipe Keeper</h1>
        <div>{allRecipes}</div>
      </DefaultLayout>
    );
  }
}

module.exports = Home;