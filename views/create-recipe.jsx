//this page will be loaded via a GET request
//form to do the recipe will be generated
//additional ingredients will be added through public create-recipe.js file

let React = require("react");

function sortRecipeByName(recipeA, recipeB) {
    var nameA = recipeA.name.toLowerCase();
    var nameB = recipeB.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

class createRecipe extends React.Component {
  render() {
    let ingredientsArray = this.props.ingredients;
    ingredientsArray.sort(sortRecipeByName);
    let ingredientsSelect = ingredientsArray.map(ingredient => {
      return <option>{ingredient.name}</option>;
    });
    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Page Title</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
        </head>
        <body>
          <form action="/create-recipe" method="post">
            <div className="form-group">
              <label for="recipe-name">Recipe Name</label>
              <input
                type="text"
                className="form-control"
                id="recipe-name"
                aria-describedby="emailHelp"
                name="title"
                placeholder="Enter recipe name"
              />
              <small id="recipe-name-help" className="form-text text-muted">
                Choose a name for your recipe!
              </small>
            </div>
            <div id="ingredients-list">
              <input type="text" name="ingredients[0]" className="ingredient-input" />
              <div className="form-group ingredient-input">
                <label for="ingredients0">Ingredient</label>
                <select className="form-control" id="ingredients0" name="ingredients[0]">
                  {ingredientsSelect}
                </select>
              </div>
            </div>
            <br />
            <div id="add-ingredient">Add Ingredient</div>
            <br />
            <input type="text" name="instructions" />
            <br />
            <button type="submit">Submit Recipe</button>
          </form>
          <script src="/create-recipe.js" />
          <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"
          />
        </body>
      </html>
    );
  }
}
module.exports = createRecipe;
