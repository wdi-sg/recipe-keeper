import { v4 as uuidv4 } from "uuid";

export const recipeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [
        ...state,
        {
          title: action.recipe.title,
          ingredients: action.recipe.ingredients,
          instructions: action.recipe.instructions,
          id: uuidv4(),
        },
      ];
    case "REMOVE_RECIPE":
      return state.filter((recipe) => recipe.id !== action.id);
    default:
      return state;
  }
};
