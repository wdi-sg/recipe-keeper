import React, { useContext } from "react";

import { RecipeContext } from "./RecipeContext.js";

import RecipeDetails from "./RecipeDetails.js";

const RecipeList = () => {
  const { recipes } = useContext(RecipeContext);
  return recipes.length ? (
    <div className="recipe-list">
      <ul>
        {recipes.map((recipe) => {
          return <RecipeDetails recipe={recipe} key={recipe.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty"></div>
  );
};

export default RecipeList;
