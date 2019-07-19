var React = require('react');
var RecipePreview = require('./components/recipePreview.jsx');
const Template = require('./template.jsx');

class Main extends React.Component {
  render() {

    const allRecipes = this.props.recipes.map(function(recipe){
      return <RecipePreview data={recipe}/>
    });

    return (
      <Template>

          <div className="container">
            <div className="row">
              <h1>All Recipes</h1>
            </div>
            {allRecipes}
          </div>

        </Template>
    );
  }
}

module.exports = Main;
