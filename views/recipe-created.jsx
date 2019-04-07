let React = require("react");

class recipeNew extends React.Component {
  render() {
      let recipe = this.props.recipe;
      let recipeName = recipe.title;
      let ingredients = recipe.ingredients.map(ingredient => {
          return <p>{ingredient}</p>
      })
      let instructions = recipe.instructions;
    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Page Title</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
            <div>{recipeName}</div>
            {ingredients}
            <div>{instructions}</div>
        </body>
      </html>
    );
  }
}
module.exports = recipeNew;
