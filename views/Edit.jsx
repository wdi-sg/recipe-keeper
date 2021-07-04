const React = require("react");
const SetNumber = require("./components/SetNumber");
const InputRecipe = require("./components/InputRecipe");

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
        <button>
          <a href={`/recipes/${recipe.id}`}>Cancel</a>
        </button>
        <SetNumber number={number} id={recipe.id} />
        <InputRecipe
          number={number}
          numOfIngredients={this.numOfIngredients}
          id={recipe.id}
          title={recipe.title}
          instructions={recipe.instructions}
        />
      </>
    );
  }
}

module.exports = Edit;
