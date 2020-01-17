
var React = require('react');
var DefaultLayout = require('./layouts/default');

class recipePages extends React.Component {
  render() {

         const recipes = this.props.recipes;

         const recipeElements = recipes.map((recipe, index)=>{
            let recipeLink = "/recipes/"+(index+1);
           return(
            <li><a href={recipeLink}>{recipe.title}</a></li>)});
    return (
    <DefaultLayout title="Home">
          <h1>List Of Recipes</h1>
          <ul>
          {recipeElements}
          </ul>

      </DefaultLayout>
    );
  }
}

module.exports = recipePages;