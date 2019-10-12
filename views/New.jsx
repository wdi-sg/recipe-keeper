const React = require("react");

class New extends React.Component {
  constructor() {
    super();
    this.numOfIngredients = [];
  }

  addSelection(index) {
    const {ingredientsArr} = this.props;
    return (
      <div key={index}>
        <span>{index+1}) </span>
        <select name="ingredients">
          <option value="none">Select ingredient</option>
          {ingredientsArr.map((data, i) => (
            <option key={i} value={data.name}>{data.name}</option>
          ))}
        </select>
      </div>
    );
  }

  render() {
    const {ingredientsArr, number} = this.props;
    if (number > 0) {
      for (let i = 0; i < number; i++) {
        this.numOfIngredients.push(this.addSelection(i));
      }
    }
    return (
      <>
        <h1>Add new recipe</h1>
        <form action="/recipes/new" method="get">
          <label htmlFor="number">Total number of ingredients required? </label>
          <input type="number" name="number" defaultValue={number}/>
        </form>

        {number > 0 ? (
          <>
            <form action="/recipes" method="post" id="newRecipe">
              <div>
                <label htmlFor="title">Recipe title: </label>
                <input type="text" name="title" />
              </div>
              <label>Ingredients:</label>
              <div>{this.numOfIngredients}</div>
              <label htmlFor="instructions">Instructions:</label>
              <div>
                <textarea cols="50" rows="4" name="instructions" />
              </div>
            </form>
            <button type="submit" form="newRecipe" value="submit">
              Add
            </button>
          </>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

module.exports = New;
