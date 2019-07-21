var React = require('react');
const Template = require('./template.jsx');


class DeleteRecipe extends React.Component {
  render() {
    var url = "/recipes/"+this.props.recipe.id + "?_method=DELETE";
    var recipeURL = "/recipes/"+this.props.recipe.id;

    return (
      <Template>
        <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <a className="link" href="/recipes">Back to list</a>
          </div>
        </div>
          <div className="row">
          <div className="col-xs-12 delete-message">
            <h3>Are you sure you want to delete this recipe?</h3>
            </div>
          </div>
          <div className="recipe">
            <div className="row">
              <div className = "col-xs-12 col-sm-12 col-md-6 hero">
                <img src={this.props.recipe.image}></img>
              </div>
              <div className = "col-xs-12 col-sm-12 col-md-6 content">
                <h1>{this.props.recipe.title}</h1>
                <h2>Ingredients</h2>
                <p>{this.props.recipe.ingredients}</p>
                <h2>Instructions</h2>
                <p>{this.props.recipe.instructions}</p>
                <p>Cooking Time: {this.props.recipe.cookingTime}</p>
                <div className="row buttons">
                  <div className = "col-xs-12 col-sm-12 col-md-12 right">
                  <form action={url} method="POST">
                      <button className="button" type="submit">Delete {this.props.recipe.name}</button>
                  </form>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>


        </Template>
    );
  }
}

module.exports = DeleteRecipe;
