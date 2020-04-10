var React = require('react');
class Id extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Title: {this.props.title}</h1>
            <p>Ingredients: {this.props.ingredients}</p>
            <p>Instructions: {this.props.instructions}</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Id;