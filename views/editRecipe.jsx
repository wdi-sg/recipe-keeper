var React = require('react');
const Template = require('./template.jsx');

class EditRecipe extends React.Component {
  render() {
    var url = "/recipes/"+this.props.recipe.id + "?_method=PUT";
    return (
        <Template>
          <div className="container">
            <div className="row">
              <h1>Edit Recipe</h1>
            </div>
            <form action={url} method="POST">
                <p>ID</p>
                <input name="id" value={this.props.recipe.id}/>
                <p>Title</p>
                <input name="title" value={this.props.recipe.title}/>
                <p>Ingredients</p>
                <textarea name="ingredients" value={this.props.recipe.ingredients}/>
                <p>Instructions</p>
                <textarea  name="instructions" value={this.props.recipe.instructions}/>
                <p>Image Link</p>
                <input name="image" value={this.props.recipe.image}/>
                <br/><br/>
                <input type="submit"/>
                <br/>
            </form>
          </div>
        </Template>
    );
  }
}

module.exports = EditRecipe;
