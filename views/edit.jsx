var React = require('react');

class Edit extends React.Component {
  render() {
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
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