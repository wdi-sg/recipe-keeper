//delete recipe step 8: create edit form page
var React = require ('react');

class DeleteRecipeForm extends React.Component {
  render () {

    //edit recipe step 9: create url to override submit button post method to put method
    var url = "/recipes/" + this.props.id + "?_method=DELETE";

    return (
      <html>
        <body>
          <div>
            <h1>Delete Recipe Form</h1>

            <form action={url} method="POST">
              <p>Recipe Title: {this.props.recipe.title}</p>

              <p>Recipe Ingredient: {this.props.recipe.ingredients}</p>

              <p>Recipe Instructions: {this.props.recipe.instructions}</p>

              <p>=====================</p>
              <input type = "submit"/>

            </form>
          </div>
        </body>
      </html>
    )
  }
};

module.exports = DeleteRecipeForm;