import React, { useContext } from "react";
import { RecipeContext } from "./RecipeContext.js";

const RecipeDetails = ({ recipe }) => {
  // const { removeRecipe } = useContext(RecipeContext);
  const { dispatch } = useContext(RecipeContext);
  return (
    <div>
      <li>
        <div className="title">{recipe.title}</div>
        <div className="ingredients">
          {" "}
          <h5>Ingredients: </h5>
          {recipe.ingredients}
        </div>
        <div className="instructions">
          <h5>Instructions:</h5> {recipe.instructions}
        </div>
        {/* <button className="delete" onClick={() => removeRecipe(recipe.id)}> Delete
        </button> */}
        <button
          className="delete"
          onClick={() => dispatch({ type: "REMOVE_RECIPE", id: recipe.id })}
        >
          Delete
        </button>
      </li>
      <br />
    </div>
  );
};

export default RecipeDetails;
