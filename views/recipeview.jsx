const React = require('react');

class RecipeView extends React.Component {
  render() {
    let recipe = this.props.recipe;
    console.log(recipe);
    return (
      <html>
        <head>
          <link rel="stylesheet"
                href="../static/bootstrap.min.css"
                />
        </head>

        <body>
          <div className="container">
            {`IT'S A SINGLE RECIPE`}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = RecipeView;
