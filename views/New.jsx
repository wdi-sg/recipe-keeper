const React = require("react");
const SetNumber = require("./components/SetNumber");
const InputRecipe = require("./components/InputRecipe");

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
    const {number} = this.props;
    if (number > 0) {
      for (let i = 0; i < number; i++) {
        this.numOfIngredients.push(this.addSelection(i));
      }
    }
    return (
      <>
        <h1>Add new recipe</h1>
        <button><a href="/recipes">Cancel</a></button>
        <SetNumber number={number}/>
        <InputRecipe number={number} numOfIngredients={this.numOfIngredients} />
      </>
    );
  }
}

module.exports = New;
