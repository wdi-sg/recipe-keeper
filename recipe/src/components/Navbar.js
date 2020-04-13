import React, { useContext } from "react";
import { RecipeContext } from "./RecipeContext.js";

const Navbar = () => {
  const { recipes } = useContext(RecipeContext);
  return (
    <div className="navbar">
      <h1>Recipe List</h1>
    </div>
  );
};

export default Navbar;
