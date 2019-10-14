var React = require('react');

class Recipe extends React.Component {
  render() {


    return (
      <html>
        <body>
          <div>
            <h1>This shows you a specific recipe!</h1>
            <br></br>
            <h3>Recipe:</h3>
            <p>{this.props.title}</p>
            <h3>Ingredients:</h3>
            <p>{this.props.ingredients}</p>
            <h3>Steps:</h3>
            <p>{this.props.instructions}</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Recipe;