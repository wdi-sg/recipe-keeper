var React = require('react');

class Recipe extends React.Component {
  render() {


    return (
      <html>
        <body>
          <div>
            <h1>This shows you a specific recipe!</h1>
            <br></br>
            <h3>Recipe Title:</h3>
            <br></br>
            <p>{this.props.title}</p>
            <br></br>
            <h3>Recipe Ingredients:</h3>
            <br></br>
            <p>{this.props.ingredients}</p>
            <br></br>
            <h3>Recipe Steps:</h3>
            <br></br>
            <p>{this.props.instructions}</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Recipe;