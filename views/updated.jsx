var React = require('react');

class Updated extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Hey there, the recipe in now entitled as {this.props.recipe.title}</h1>
            <h2>Ingredients and instructions are as below: </h2>
            <p>Ingredients: {this.props.recipe.ingredients}</p>
            <p> Instructions: {this.props.recipe.instructions}</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Updated;