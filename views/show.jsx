var React = require('react');

class Show extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Hey there, would you like to cook {this.props.recipeList.title}</h1>
            <h2>Ingredients and instructions are as below: </h2>
            <p>Ingredients: {this.props.recipeList.ingredients}</p>
            <p> Instructions: {this.props.recipeList.instructions}</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Show;