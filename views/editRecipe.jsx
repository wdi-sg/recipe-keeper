var React = require('react');
const Template = require('./template.jsx');

class EditRecipe extends React.Component {
  render() {
    var url = "/recipes/"+this.props.recipe.id + "?_method=PUT";
    return (
        <Template>
        <div className="container">
          <div className="row">
            <div className = "col-md-offset-2 col-xs-12 col-sm-12 col-md-8 form-modal">
              <h1>Edit recipe</h1>
            <form action={url} method="POST">
                <p>ID</p>
                <input name="id" value={this.props.recipe.id}/>
                <p>Title</p>
                <input name="title" value={this.props.recipe.title}/>
                <p>Description</p>
                <textarea name="description" value={this.props.recipe.description}/>
                <p>Cooking Time</p>
                <input name="cookingTime" value={this.props.recipe.cookingTime}/>
                <p>Ingredients</p>
                <textarea name="ingredients" value={this.props.recipe.ingredients}/>
                <p>Instructions</p>
                <textarea  name="instructions" value={this.props.recipe.instructions}/>
                <p>Image Link</p>
                <input name="image" value={this.props.recipe.image}/>
                <br/><br/>
                <input className="button" type="submit"/>
                <br/>
            </form>
            </div>
          </div>
        </div>
        </Template>
    );
  }
}

module.exports = EditRecipe;
