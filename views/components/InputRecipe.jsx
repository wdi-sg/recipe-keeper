const React = require("react");

class InputRecipe extends React.Component {
  render() {
    const {number, numOfIngredients, id, title, instructions} = this.props;
    const path = id === undefined ? "/recipes" : `/recipes/${id}?_method=put`
    const setTitle = title === undefined ? "" : title;
    const setInstructions = instructions === undefined ? "" : instructions;
    const type = id === undefined ? "Add" : "Edit";
    return (
      <>
        {number > 0 ? (
          <>
            <form action={path} method="post" id="recipe">
              <div>
                <label htmlFor="title">Recipe title: </label>
                <input type="text" name="title" defaultValue={setTitle}/>
              </div>
              <label>Ingredients:</label>
              <div>{numOfIngredients}</div>
              <label htmlFor="instructions">Instructions:</label>
              <div>
                <textarea cols="50" rows="4" name="instructions" defaultValue={setInstructions} />
              </div>
            </form>
            <button type="submit" form="recipe" value="submit">
              {type}
            </button>
          </>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

module.exports = InputRecipe;
