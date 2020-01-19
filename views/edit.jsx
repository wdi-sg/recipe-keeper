var React = require('react');

class Edit extends React.Component {
  render() {
    let postURL = '/recipes/'+this.props.id+'?_method=put';
    return (
      <html>
        <body>
          <div>
            <h1>Edit Form</h1>
            <form method="POST" action={postURL}>
                Title: <input type="text" name="title" placeholder={this.props.recipe.title}/><br/>
                Ingredients: <input type="text" name="ingredients" placeholder={this.props.recipe.ingredients}/><br/>
                Instructions: <input type="text" name="instructions" placeholder={this.props.recipe.instructions}/><br/>
                <input type="submit" value="Edit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;