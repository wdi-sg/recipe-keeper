const React = require('react');

class Create extends React.Component {
  render() {
    console.log(this.props.recipe);
    return(
      <html>
        <body>
          <h1>Create</h1>
          <p>Recipe Saved!</p>
          <p>Title: {this.props.recipe.title}</p>
          <p>Ingredients: {this.props.recipe.ingredients}</p>
          <p>Instructions: {this.props.recipe.instructions}</p>
        </body>
      </html>
    );
  }
}

module.exports = Create;