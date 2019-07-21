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
          </div>
          <div className="row">
            <h2>Are you sure you want to delete this recipe</h2>

          </div>
          <div className="row">
            <div className = "six columns">
              <img className="u-max-full-width" src={this.props.recipe.image}></img>
            </div>
            <div className = "six columns">
              <h2>{this.props.recipe.title}</h2>
              <h3>Ingredients</h3>
              <p>{this.props.recipe.ingredients}</p>
              <h3>Instructions</h3>
              <p>{this.props.recipe.instructions}</p>
            </div>
          </div>
          <div className="row">
          <form action={url} method="POST">
              <button type="submit">Delete {this.props.recipe.name}</button>
          </form>
          </div>
        </div>

        </Template>
    );
  }
}

module.exports = DeleteRecipe;
