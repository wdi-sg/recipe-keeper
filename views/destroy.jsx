const React = require('react');

class Destroy extends React.Component {
  render() {
    return(
      <html>
        <body>
          <h1>Destroy</h1>
          <p>Recipe has been destroyed.</p><br/>
          <p>Title: {this.props.recipe.title}</p>
          <p>Ingredients: {this.props.recipe.ingredients}</p>
          <p>Instructions: {this.props.recipe.instructions}</p>
        </body>
      </html>
    );
  }
}

module.exports = Destroy;