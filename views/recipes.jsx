var React = require('react');
var DefaultLayout = require('./layouts/default');

class Recipes extends React.Component {
  render() {

    const recipes = this.props.recipes.map( (recipe, i) => {
            return (
                <div class="col-md-4">
                    <div class="card">
                        <a href={"http://localhost:3000/recipes/" + recipe.id}>
                            <img class="card-img-top" src="https://us.123rf.com/450wm/ryzhkov86/ryzhkov861603/ryzhkov86160300164/54732338-caprese-salad-salad-with-tomatoes-mozzarella-cheese-and-rocket-salad-salad-dressing-with-pesto-sauce.jpg?ver=6" alt="Card image cap"/>
                            <div class="card-body">
                                <h4>{recipe.id}</h4>
                                <h4>{recipe.title}</h4>
                                <p>{recipe.ingredients}</p>
                                <p>{recipe.instructions}</p>
                            </div>
                        </a>
                    </div>
                </div>
            );
    });

    return (
      <DefaultLayout title="HC Recipes" recipeLength={this.props.recipes.length}>
        <div class="row">
            {recipes}
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Recipes;