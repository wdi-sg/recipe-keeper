var React = require('react');
class Id extends React.Component {
  render() {
    let currentId = "'" + this.props.currentId + "'";
    let deleteLink = "/recipes/" + this.props.currentId + "?_method=delete"
    return (
      <html>
        <body>
          <div>
            <h1>Title: {this.props.currentRecipe.title}</h1>
            <p>Ingredients: {this.props.currentRecipe.ingredients}</p>
            <p>Instructions: {this.props.currentRecipe.instructions}</p>
          </div>
          <form method="POST" action={deleteLink}>
            <input name="id" type="hidden" value={currentId}/>
            <input type="submit" value="Delete Recipe"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Id;