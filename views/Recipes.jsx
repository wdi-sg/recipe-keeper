var React = require('react');
class Recipes extends React.Component {
    render() {
        return (
            <html>
              <body>
                <div>

                <h2>Recipe #{this.props.id}</h2>
                <h1>{this.props.title}</h1>
                <p>Ingredients needed: <br />{this.props.ingredients}</p>
                <p>Cooking instructions: <br /> {this.props.instructions}</p>
                </div>
              </body>
            </html>
          );
    }
}

module.exports = Recipes;