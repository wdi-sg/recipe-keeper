var React = require('react');
var DefaultLayout = require('./layouts/default');

class Recipes extends React.Component {
  render() {

    const recipes = this.props.recipes.map( (recipe, i) => {
        if (i == 0) {
            return (
                <div class="carousel-item active">
                    <div className="d-block w-100" style={{height: '300px'}}>

                            <div className="recipe" style={{textAlign: 'center'}} className="carousel-caption d-none d-md-block">
                                <h3 style={{textTransform: 'uppercase'}}>{recipe.title}</h3>

                                <h5><a style={{color: 'white'}} href={"http://localhost:3000/recipes/" + recipe.id}>Click to view recipe</a></h5>
                            </div>

                    </div>
                </div>
            );
        } else {
           return (
                <div class="carousel-item">
                    <div className="d-block w-100" style={{height: '300px'}}>

                            <div className="recipe" style={{textAlign: 'center'}} className="carousel-caption d-none d-md-block">
                                <h3 style={{textTransform: 'uppercase'}}>{recipe.title}</h3>

                                <h5><a style={{color: 'white'}} href={"http://localhost:3000/recipes/" + recipe.id}>Click to view recipe</a></h5>
                            </div>

                    </div>
                </div>
            );
        }
    });

    return (
      <DefaultLayout title="HC Recipes" recipeLength={this.props.recipes.length}>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            {recipes}
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

      </DefaultLayout>
    );
  }
}

module.exports = Recipes;