const React = require('react');

class Destroy extends React.Component {
  render() {
    return(
      <html>
        <body>
          <h1>Delete</h1>
          <p>Recipe: {this.props.recipe.title}</p><br/>
          <p>Title: {this.props.recipe.title}</p>
          <p>Ingredients: {this.props.recipe.ingredients}</p>
          <p>Instructions: {this.props.recipe.instructions}</p><br/>
          <form action={"/recipes/" + this.props.id + "?_method=DELETE"} method="POST">
            <input type="submit" value="Delete This Recipe"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Destroy;