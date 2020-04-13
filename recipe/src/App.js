import React, { Component } from "react";
import "./App.css";
// import RecipeForm from "./components/RecipeForm.js";
import RecipeContextProvider from "./components/RecipeContext";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import NewRecipeForm from "./components/NewRecipeForm";

function App() {
  // state = {
  //   list: [],
  // };

  // whenSubmit = (fields) => {
  //   console.log(`this is from ---> `, fields);
  //   const newRecipe = { fields };
  //   const list = [...this.state.list];
  //   list.push(newRecipe);

  //   this.setState({ list: [] });
  // };

  return (
    <div className="App">
      <RecipeContextProvider>
        <Navbar />
        <NewRecipeForm />
        <RecipeList />
      </RecipeContextProvider>

      {/* <h1>Add a Recipe</h1>
        <RecipeForm whenSubmit={(fields) => this.whenSubmit(fields)} />
        <p>{this.state.list}</p> */}
      {/* <ul>
          {this.state.list.map(item => {
            return (
              <li {item}></li>
            )
          })}
        </ul> */}
    </div>
  );
}

export default App;
