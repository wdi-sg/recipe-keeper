var React = require('react');
var RecipePreview = require('./components/recipePreview.jsx');
const Template = require('./template.jsx');

class Main extends React.Component {
  render() {

    const allRecipes = this.props.recipes.map(function(recipe){
      return <RecipePreview data={recipe}/>
    });

    const createUrl = "/recipes/new";

    return (
      <Template>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 main">
                  <h1>All Recipes</h1>
                  <a className="create-new-recipe" href={createUrl}>Add a New Recipe</a>
              </div>
            </div>
            <div className="row">
                {allRecipes}
            </div>
          </div>

        </Template>
    );
  }
}

module.exports = Main;
