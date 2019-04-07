//primarily, we will need this to create
//additional input elements for ingredients

//using ingredientList, we will append aadditional ingredient input elements
//when button "addIngredient" is clicked
let ingredientList = document.getElementById("ingredients-list");

function addIngredient() {
  let arrayOfIngredientInputs = document.getElementsByClassName("ingredient-input");
  if (arrayOfIngredientInputs === []) {
  } else {
    let numberOfInputsCurrently = arrayOfIngredientInputs.length.toString();
    //now that we have the number of inputs, we can figure out what the next
    // "name" is that we need to append to our key:value pair
    //if we have 2 inputs, the next input needs to be the 3rd in the array, which is 2
    //hence numberOfInputsCurrently will be the index we append to the newest ingredient input]

    let ingredientName = "ingredients[" + numberOfInputsCurrently + "]";
    //now we need to construct the dom element and append it to the parent "ingredients-list"
    let newIngredientInput = document.createElement("input");
    //add class to newIngredientInput

    newIngredientInput.setAttribute("class", "ingredient-input");
    //add type="text"
    newIngredientInput.setAttribute("type", "text");
    //add name = ingredientName
    newIngredientInput.setAttribute("name", ingredientName);
    //value can be left blank since this is a new ingredient input
    //since values are set, we can now append it to the parent div
    let lineBreak = document.createElement("br");

    let ingredientDiv = document.createElement("div");
    ingredientDiv.setAttribute("class", "form-group ingredient-input");
    let ingredientLabel = document.createElement("label");
    ingredientLabel.setAttribute("for", "ingredients" + numberOfInputsCurrently);
    ingredientLabel.innerText("Ingredient");
    let ingredientSelect = document.createElement("select");
    ingredientSelect.setAttribute("class", "form-control");
    ingredientSelect.setAttribute("id", "ingredients" + numberOfInputsCurrently);
    ingredientSelect.setAttribute("name", "ingredients[" + numberOfInputsCurrently + "]");

    //now we need to grab all the json data and stuff it into the options

    ingredientList.appendChild(lineBreak);
    ingredientList.appendChild(newIngredientInput);
  }
}

let buttonAddIngredientInput = document.getElementById("add-ingredient");

buttonAddIngredientInput.addEventListener("click", addIngredient);
