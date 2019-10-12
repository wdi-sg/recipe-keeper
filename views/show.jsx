const React = require('react');

class Show extends React.Component {
  render() {
    return(
      <html>
        <body>
          <h1>Show</h1>
          <p>Title: {this.props.recipe.title}</p>
          <p>Ingredients: {this.props.recipe.ingredients}</p>
          <p>Instructions: {this.props.recipe.instructions}</p>

          <form action={"/recipes/" + this.props.id + "?_method=DELETE"} method="POST">
            <input type="submit" value="Delete This Recipe"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Show;