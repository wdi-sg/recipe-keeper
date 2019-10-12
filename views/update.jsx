const React = require('react');

class Update extends React.Component {
  render() {
    return(
      <html>
        <body>
          <h1>Update</h1>
          <p>Updated: {this.props.recipe.title}</p>
          <p>Title: {this.props.recipe.title}</p>
          <p>Ingredients: {this.props.recipe.ingredients}</p>
          <p>Instructions: {this.props.recipe.instructions}</p>
        </body>

        <form action={"/recipes/" + this.props.id + "?_method=DELETE"} method="POST">
            <input type="submit" value="Delete This Recipe"/>
        </form>
      </html>
    );
  }
}

module.exports = Update;