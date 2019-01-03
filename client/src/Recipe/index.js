import React, { Component } from "react";
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";

class Recipe extends Component {
  render() {
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

export default Recipe;
