import React, { createContext, useState, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { recipeReducer } from "./RecipeReducer.js";

export const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
  const [recipes, dispatch] = useReducer(
    recipeReducer,
    [
      {
        title: "Chicken Soup",
        ingredients: "chicken",
        instructions: "boil the chicken",
        id: 1,
      },
      {
        title: "Banana cake",
        ingredients: "banana",
        instructions: "peel the banana",
        id: 2,
      },
    ],
    () => {
      const localData = localStorage.getItem("recipes");
      return localData ? JSON.parse(localData) : [];
    }
  );
  // const RecipeContextProvider = (props) => {
  //   const [recipes, setRecipes] = useState([
  //     {
  //       title: "Chicken Soup",
  //       ingredients: "chicken",
  //       instructions: "boil the chicken",
  //       id: 1,
  //     },
  //     {
  //       title: "Banana cake",
  //       ingredients: "banana",
  //       instructions: "peel the banana",
  //       id: 2,
  //     },
  //   ]);

  //   const addRecipe = (title, ingredients, instructions) => {
  //     setRecipes([
  //       ...recipes,
  //       { title, ingredients, instructions, id: uuidv4() },
  //     ]);
  //   };

  //   const removeRecipe = (id) => {
  //     // if the id is the not the same as the id we pass in, we keep the recipe in the array
  //     setRecipes(recipes.filter((recipe) => recipe.id !== id));
  //   };

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <RecipeContext.Provider value={{ recipes, dispatch }}>
      {/* <RecipeContext.Provider value={{ recipes, addRecipe, removeRecipe }}> */}
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
