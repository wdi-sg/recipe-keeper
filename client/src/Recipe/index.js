import React, { Component } from "react";
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = { doRedirect: false };
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }
  deleteRecipe() {
    fetch(`/recipes/:${this.props.match.params.id}/`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json());
    this.setState({ doRedirect: true });
  }
  render() {
    if (this.state.doRedirect) {
      return <Redirect to="/" />;
    } else {
      let recipe;
      for (let item in this.props.recipes) {
        if (
          parseInt(this.props.recipes[item].id) ===
          parseInt(this.props.match.params.id)
        ) {
          recipe = this.props.recipes[item];
        }
      }
      if (recipe) {
        return (
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>{recipe.name}</h1>
                <Link
                  to={{
                    pathname: `/recipes/${recipe.id}/edit`
                  }}
                  className="btn btn-primary"
                >
                  Edit Recipe
                </Link>

                <button
                  type="button"
                  onClick={this.deleteRecipe}
                  className="btn btn-warning"
                >
                  Delete Recipe
                </button>
                <h4>Ingredients</h4>
                {recipe.ingredients.map(item => {
                  return <Ingredient key={item.name} value={item} />;
                })}
                <h4>Instructions</h4>
                {recipe.instructions.map((item, index) => {
                  return (
                    <Instruction
                      key={`${recipe.name}Instruction${index}`}
                      value={item}
                      index={index + 1}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      } else return <div>Not loaded yet</div>;
    }
  }
}

export default Recipe;
