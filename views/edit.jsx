var React = require('react');

class Edit extends React.Component {
  render() {
    const recipeID = this.props.id;
    const postURL = '/recipes/'+recipeID+'?_method=put';
    return (
      <html>
        <body>
          <div>
            <h1>Edit Form</h1>
            <form method="POST" action={postURL}>
                Title: <input type="text" name="title" placeholder={this.props.recipeIndex.title}/><br/>
                Ingredients: <input type="text" name="ingredients" placeholder={this.props.recipeIndex.ingredients}/><br/>
                Instructions: <input type="text" name="instructions" placeholder={this.props.recipeIndex.instructions}/><br/>
                <input type="submit" value="Edit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;