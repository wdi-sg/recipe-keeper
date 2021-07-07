import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import IngredientInput from "./IngredientInputs";
import InstructionInput from "./InstructionInputs";

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
  componentDidMount() {
    if (this.props.match.params.id) {
      fetch(`/recipes/${this.props.match.params.id}/edit`)
        .then(res => res.json())
        .then(res => {
          let recipe = res;
          let ingredients = [];
          let instructions = [];
          this.setState({ recipeName: recipe.name });
          recipe.ingredients.map(val => {
            let ingredient = {
              ingredientName: val.name,
              ingredientAmount: val.amount
            };
            ingredients.push(ingredient);
          });
          this.setState({ ingredients: ingredients });
          recipe.instructions.map(val => {
            let instruction = { instructionStep: val };
            instructions.push(instruction);
          });
          this.setState({ instructions: instructions });
        });
    }
  }
  handleChange(e) {
    console.log(this.state);
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
    if (this.props.match.params.id) {
      this.updateRecipe();
    } else {
      this.addRecipe();
    }
    e.preventDefault();
    this.setState({ doRedirect: true });
  }
  updateRecipe = () => {
    fetch(`/recipes/:${this.props.match.params.id}/`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(res => res.json());
  };
  addRecipe = () => {
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
              <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <div className="form-group">
                  <label htmlFor="recipeName">Name of recipe</label>
                  <input
                    type="text"
                    defaultValue={this.state.recipeName}
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
                <IngredientInput ingredients={ingredients} />
                <button
                  type="button"
                  onClick={this.addInstruction}
                  className="btn btn-info"
                >
                  Add new step
                </button>
                <InstructionInput instructions={instructions} />

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
