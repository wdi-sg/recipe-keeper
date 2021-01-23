let React = require("react");

class Home extends React.Component {
  render() {
    let newRecipe = this.props.recipe;
    let ingredients = newRecipe.ingredients;
    for (let i = 0; i < ingredients.length; i++) {
        const ingredient = ingredients[i];
    }
    let ingredientList = ingredients.map( ingredient => {
        return <li>{ingredient.name}</li>
    })

    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Page Title</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          {newRecipe.title}
          <br />
          {ingredientList}
          {newRecipe.instructions}

            <form action="/recipe-created" method="post">
            <input type="text" name="title"/>
            <input type="text" name="ingredients"/>
            </form>
        </body>
      </html>
    );
  }
}
module.exports = Home;
