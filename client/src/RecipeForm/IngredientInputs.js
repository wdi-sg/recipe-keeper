import React, { Component } from "react";

class IngredientInputs extends Component {
  render() {
    return this.props.ingredients.map((val, idx) => {
      let ingredientId = `ingredient-${idx}`,
        amountId = `amount-${idx}`;
      return (
        <div className="form-group" key={ingredientId}>
          <label htmlFor={ingredientId}>{`Ingredient ${idx + 1}`}</label>
          <input
            defaultValue={val.ingredientName}
            type="text"
            name="ingredientName"
            data-id={idx}
            id={ingredientId}
            className="form-control"
          />
          <label htmlFor={amountId}>amount</label>
          <input
            defaultValue={val.ingredientAmount}
            type="text"
            name="ingredientAmount"
            data-id={idx}
            id={amountId}
            className="form-control"
          />
        </div>
      );
    });
  }
}

export default IngredientInputs;
