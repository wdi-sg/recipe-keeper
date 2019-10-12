const React = require("react");

class Edit extends React.Component {
  constructor() {
    super();
    this.numOfIngredients = [];
  }

  addSelection(index, ingredient) {
    const {ingredientsArr} = this.props;
    return (
      <div key={index}>
        <span>{index + 1}) </span>
        <select name="ingredients">
          {ingredient !== undefined ? (
            <option defaultValue={ingredient}>{ingredient}</option>
          ) : (
            <option defaultValue="none">Select ingredient</option>
          )}
          {ingredientsArr.map((data, i) => (
            <span key={i}>
              {data.name !== ingredient ? (
                <option key={i} defaultValue={data.name}>
                  {data.name}
                </option>
              ) : (
                ""
              )}
            </span>
          ))}
        </select>
      </div>
    );
  }

  render() {
    const {ingredientsArr, recipe} = this.props;
    let ingredients = recipe.ingredients;
    if (!Array.isArray(recipe.ingredients)) {
      ingredients = [ingredients];
    }
    let number =
      this.props.number === undefined ? ingredients.length : this.props.number;
    if (number > 0) {
      for (let i = 0; i < number; i++) {
        this.numOfIngredients.push(this.addSelection(i, ingredients[i]));
      }
    }
    return (
      <>
        <h1>Edit</h1>
        <button><a href={`/recipes/${recipe.id}`}>Cancel</a></button>
        <form action={`/recipes/${recipe.id}/edit`} method="get">
          <label htmlFor="number">Total number of ingredients required? </label>
          <input type="number" name="number" defaultValue={number} />
        </form>
        <form
          action={`/recipes/${recipe.id}?_method=put`}
          method="post"
          id="editRecipe"
        >
          <div>
            <label htmlFor="title">Recipe title: </label>
            <input type="text" name="title" defaultValue={recipe.title} />
          </div>
          <label>Ingredients:</label>
          <div>{this.numOfIngredients}</div>
          <label htmlFor="instructions">Instructions:</label>
          <div>
            <textarea
              cols="50"
              rows="4"
              name="instructions"
              defaultValue={recipe.instructions}
            />
          </div>
        </form>
        <button type="submit" form="editRecipe" value="submit">
          Edit
        </button>
      </>
    );
  }
}

module.exports = Edit;
