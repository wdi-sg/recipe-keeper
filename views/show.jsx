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
        </body>
      </html>
    );
  }
}

module.exports = Show;