var React = require('react');

class AddedNew extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Hey there, you've added {this.props.latestRecipe.title}</h1>
            <h2>Double check if you have added the ingredients correctly underneath</h2>
            <p>Ingredients: {this.props.latestRecipe.ingredients}</p>
            <h3>Here is a reminder on how to prepare {this.props.latestRecipe.ingredients} just in case you need it =)</h3>
            <p> Instructions: {this.props.latestRecipe.instructions}</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = AddedNew;