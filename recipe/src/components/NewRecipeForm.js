import React, { useContext, useState } from "react";
import { RecipeContext } from "./RecipeContext.js";

const NewRecipeForm = () => {
  //const { addRecipe } = useContext(RecipeContext);
  const { dispatch } = useContext(RecipeContext);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, ingredients, instructions);
    //addRecipe(title,ingredients, instructions);
    dispatch({
      type: "ADD_RECIPE",
      recipe: {
        title,
        ingredients,
        instructions,
      },
    });
    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <input
        type="text"
        name="ingredients"
        placeholder="Ingredients"
        value={ingredients}
        onChange={(event) => setIngredients(event.target.value)}
      />
      <br />
      <input
        type="text"
        name="instructions"
        placeholder="Instructions"
        value={instructions}
        onChange={(event) => setInstructions(event.target.value)}
      />
      <br />
      <input type="submit" value="Add" />
    </form>
  );
};
export default NewRecipeForm;
