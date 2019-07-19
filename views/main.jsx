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
              <div className="eight columns">
                  <h1>All Recipes</h1>
              </div>
              <div className="four columns">
                <a href={createUrl}>Create New Recipe</a>
              </div>
            </div>
            {allRecipes}
          </div>

        </Template>
    );
  }
}

module.exports = Main;
