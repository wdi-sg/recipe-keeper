import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: "",
      ingredients: [{ ingredientName: "", ingredientAmount: "" }],
      instructions: [{ instructionStep: "" }],
      doRedirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.addInstruction = this.addInstruction.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    if (["ingredientName", "ingredientAmount"].includes(target.name)) {
      let ingredients = [...this.state.ingredients];
      ingredients[target.dataset.id][target.name] = target.value;
      this.setState({ ingredients }, () => console.log(this.state.ingredients));
    } else if (["instructionStep"].includes(target.name)) {
      let instructions = [...this.state.instructions];
      instructions[target.dataset.id][target.name] = target.value;
      this.setState({ instructions }, () => console.log(this.state));
    } else if ("recipeName" === target.name) {
      this.setState({ [target.name]: target.value });
    }
  }

  handleSubmit(e) {
    this.sendDataToDb();
    e.preventDefault();
    this.setState({ doRedirect: true });
  }

  sendDataToDb = () => {
    fetch("/recipes", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(res => res.json());
  };
  addIngredient(e) {
    this.setState(prevState => ({
      ingredients: [
        ...prevState.ingredients,
        { ingredientName: "", ingredientAmount: "" }
      ]
    }));
  }
  addInstruction(e) {
    this.setState(prevState => ({
      instructions: [...prevState.instructions, { instructionStep: "" }]
    }));
  }
  render() {

    let { ingredients, instructions } = this.state;
    if (this.state.doRedirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="recipeName">Name of recipe</label>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    className="form-control"
                    name="recipeName"
                    placeholder="Enter recipe name"
                  />
                </div>
                <button
                  type="button"
                  onClick={this.addIngredient}
                  className="btn btn-info"
                >
                  Add new ingredient
                </button>
                {ingredients.map((val, idx) => {
                  let ingredientId = `ingredient-${idx}`,
                    amountId = `amount-${idx}`;
                  return (
                    <div className="form-group" key={ingredientId}>
                      <label htmlFor={ingredientId}>{`Ingredient ${idx +
                        1}`}</label>
                      <input
                        type="text"
                        name="ingredientName"
                        data-id={idx}
                        id={ingredientId}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                      <label htmlFor={amountId}>amount</label>
                      <input
                        type="text"
                        name="ingredientAmount"
                        data-id={idx}
                        id={amountId}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  );
                })}
                <button
                  type="button"
                  onClick={this.addInstruction}
                  className="btn btn-info"
                >
                  Add new step
                </button>
                {instructions.map((val, idx) => {
                  let instructionId = `instruction-${idx}`;
                  return (
                    <div className="form-group" key={instructionId}>
                      <label htmlFor={instructionId}>{`Step ${idx + 1}`}</label>
                      <input
                        type="text"
                        name="instructionStep"
                        data-id={idx}
                        id={instructionId}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  );
                })}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default RecipeForm;
