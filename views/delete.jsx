var React = require('react');

class Delete extends React.Component {
  render() {
    let postURL = '/recipes/'+this.props.id+'?_method=delete';
    return (
      <html>
        <body>
          <div>
            <h1>Delete Form</h1>
            <form method="POST" action={postURL}>
                Title: <input type="text" name="title" value={this.props.recipe.title}/><br/>
                Ingredients: <input type="text" name="ingredients" value={this.props.recipe.ingredients}/><br/>
                Instructions: <input type="text" name="instructions" value={this.props.recipe.instructions}/><br/>
                <input type="submit" value="Delete"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Delete;