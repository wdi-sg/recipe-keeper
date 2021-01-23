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
    let quantity = [];
    for (let i = 1; i < 11; i++) {
      quantity.push(<option>{i}</option>);
    }
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
                aria-describedby="recipe-name-help"
                name="title"
                placeholder="Enter recipe name"
              />
              <small id="recipe-name-help" className="form-text text-muted">
                Choose a name for your recipe!
              </small>
            </div>
            <div id="ingredients-list">
              <div className="ingredient-input row">
                <div className="form-group ingredient-value col-7">
                  <label for="ingredientsValue0">Ingredient</label>
                  <select
                    className="form-control"
                    id="ingredientsValue0"
                    name="ingredients[0]['name']">
                    {ingredientsSelect}
                  </select>
                </div>
                <div className="form-group ingredient-qty col-2">
                  <label for="ingredientsQty0">Qty</label>
                  <select
                    className="form-control"
                    id="ingredientsQty0"
                    name="ingredients[0]['quantity']">
                    {quantity}
                  </select>
                </div>
                <div className="form-group ingredient-notes col-3">
                  <label for="ingredientsNotes0">notes</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ingredientsNotes0"
                    aria-describedby="ingredient-notes-help"
                    name="ingredients[0]['notes']"
                    placeholder="add notes"
                  />
                  <small id="ingredient-notes-help" className="form-text text-muted">
                    add some helpful notes!
                  </small>
                </div>
              </div>
            </div>
            <div id="add-ingredient" className="btn btn-primary">
              Add Ingredient
            </div>
            <br />
            <br />
            <div className="form-group">
              <label for="instructions">Instructions</label>
              <input
                type="text"
                className="form-control"
                id="instructions"
                aria-describedby="instructions-help"
                name="instructions"
                placeholder="Enter instructions for recipe"
              />
              <small id="instructions-help" className="form-text text-muted">
                Choose a name for your recipe!
              </small>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit Recipe
            </button>
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
