var React = require('react');


class EditRecipeForm extends React.Component {
  render () {

    var url = "/recipes/" + this.props.id + "?_method=PUT";
    console.log("this.props.id: " + this.props.id);
    return (
      <html>
        <body>
          <div>
            <h1>Edit Recipe Form</h1>
            <form action = {url} method = "POST">

              <p>Recipe Title</p>
              <input name = "title" value = {this.props.recipe.title}/>

              <p>Recipe Ingredients</p>
              <input name = "ingredients" value = {this.props.recipe.ingredients}/>

              <p>Recipe Instructions</p>
              <input name = "instructions" value = {this.props.recipe.instructions}/>

              <p>=====================</p>
              <input type = "submit"/>

            </form>
          </div>
        </body>
      </html>
    )
  }
};

module.exports = EditRecipeForm;