let React = require("react");

class createRecipe extends React.Component {
  render() {
    //render a form for the recipe
    //have a button which sends a GET request to
    //repopulate the page with an additional input?
    if (this.props === ) {
        
    }
    let title = this.props.title;
    let instructions = this.props.instructions;
    let ingredientArray = this.props.ingredients;
    let numOfIngredients = this.props.ingredients.length;

    let ingredientsHTML = [];
    let indexInString;
    for (let i = 2; i < numOfIngredients + 2; i++) {
      //within the loop, we want the ingredient inputs to be populated
      //with values, but we don't want the last value to be populated
      indexInString = i.toString();
      const ingredient = ingredientArray[i - 2];
      ingredientsHTML.push(
        <div>
          <input type="text" name="ingredients" value={ingredient} />
        </div>
      );
    }

    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Page Title</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <form action="/recipe-created" method="post">
            <input type="text" name="title" value={title} />
            {ingredientsHTML}
            <button type="submit" name="ingredientIndex" value={indexInString}>
              Add More Ingredients
            </button>
            <input type="text" name="instructions" value={instructions} />
            <button type="submit"></button>
          </form>
        </body>
      </html>
    );
  }
}
module.exports = createRecipe;
