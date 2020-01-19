var React = require('react');
var header = require('./Layout.jsx');


class Edit extends React.Component {
  render() {
    let formUrl = "/recipes/"+this.props.recipe.id+"?_method=put"
    console.log(this.props.recipe.id);
    return (
    <html>
        <head>
            <title>Edit Recipe</title>
        </head>
        <body>
          <div>
            <h1>Edit This Recipe:</h1>
            <form method = "POST" action = {formUrl}>
                <label for='title'>Recipe Name: </label>
                    <input id = 'title' type = 'text/input' name = 'title' value = {this.props.recipe.title} />
                <label for='ing'>Ingredients: </label>
                    <input id = 'ingredients' type = 'text/input' name = 'ingredients' value = {this.props.recipe.ingredients} />
                <label for='inst'>Instructions: </label>
                    <input id ='instructions' type = 'text/input' name = 'instructions' value = {this.props.recipe.instructions} />
                <input type = 'submit'/>
                <button>Cancel</button>
            </form>
          </div>
        </body>
    </html>
    );
  }
}

module.exports = Edit;