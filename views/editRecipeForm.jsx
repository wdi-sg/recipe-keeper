var React = require('react');

class editRecipeForm extends React.Component {
  render () {

    var url = "/recipes/" + this.props.id + "?_method=PUT";

    return (
      <html>
        <body>
          <div>
            <h1>Edit Recipe Form</h1>
            <form action = {url} method = "POST">

              <p>Title</p>
              <input name = "title" value = {this.props.recipe.title}/>

              <p>Ingredients</p>
              <input name = "ingredients" value = {this.props.recipe.ingredients}/>

              <p>Instructions</p>
              <input name = "instructions" value = {this.props.recipe.instructions}/>

              <p></p>
              <input type = "submit"/>

            </form>
          </div>
        </body>
      </html>
    )
  }
};

module.exports = editRecipeForm;