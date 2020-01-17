var React = require('react');
class SingleRecipe extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Recipe Title: { this.props.title }</h1>
            <h2>Details</h2>
            <img src={this.props.img}></img>
              {/* <li>ID: {this.props.id}</li> */}
              Ingredients: {this.props.ingredients} <br></br>
              Instructions: {this.props.instructions}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = SingleRecipe;