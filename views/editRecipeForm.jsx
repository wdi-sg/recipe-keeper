//edit recipe step 8: create edit form page
var React = require('react');

class EditRecipeForm extends React.Component {
  render () {

    //edit recipe step 9: create url to override submit button post method to put method
    var url = "/recipes/" + this.props.id + "?_method=PUT";

    return (
      <html>
        <body>
          <div>
            <h1>Edit Recipe Form</h1>

            {/*edit recipe step 10: submit button post method*/}
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