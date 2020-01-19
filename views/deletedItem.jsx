var React = require('react');

class DeletedItem extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Hey there, you have deleted {this.props.recipe.title}</h1>
            <p> Just in case you want to see it one last time, the ingredients was {this.props.recipe.ingredients}</p>
            <p> Not forgetting, please screenshot the instructions before you forget. Instructions: {this.props.recipe.instructions}</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = DeletedItem;