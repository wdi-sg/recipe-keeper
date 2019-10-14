
var React = require('react');
class EditedRecipe extends React.Component {
    render() {
        return (
            <html>
        <body>
          <div>
            <h1>edited Recipe: {this.props.Title}</h1>
            <div>
                            <h3>Ingredients :</h3>
                            <ul>{this.props.Ingredients}</ul>
                              <h3>Instructions :</h3>
                            <ul>{this.props.Instructions}</ul>
                        </div>
          </div>
        </body>
      </html>
            )
    }
}


module.exports = EditedRecipe;