var React = require('react');

class Delete extends React.Component {
  render() {
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
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