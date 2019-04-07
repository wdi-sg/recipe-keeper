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
    //hence numberOfInputsCurrently will be the index we append to the newest ingredient input

    let newIngredientSelect = document.getElementsByClassName("ingredient-input")[0].cloneNode(true);
    let label = newIngredientSelect.childNodes[0].childNodes[0];
    label.setAttribute("for", "ingredientsValue"+numberOfInputsCurrently);
    let select = newIngredientSelect.childNodes[0].childNodes[1];
    select.setAttribute("id", "ingredientsValue"+numberOfInputsCurrently);
    select.setAttribute("name", "ingredients["+numberOfInputsCurrently+"]['name']");
    
    let labelQty = newIngredientSelect.childNodes[1].childNodes[0];
    labelQty.setAttribute("for", "ingredientsQty"+numberOfInputsCurrently);
    let selectQty = newIngredientSelect.childNodes[1].childNodes[1];
    selectQty.setAttribute("id", "ingredientsQty"+numberOfInputsCurrently);
    selectQty.setAttribute("name", "ingredients["+numberOfInputsCurrently+"]['quantity']");
    
    let labelNotes = newIngredientSelect.childNodes[2].childNodes[0];
    labelNotes.setAttribute("for", "ingredientsNotes"+numberOfInputsCurrently);
    let inputNotes = newIngredientSelect.childNodes[2].childNodes[1];
    inputNotes.setAttribute("id", "ingredientsNotes"+numberOfInputsCurrently);
    inputNotes.setAttribute("name", "ingredients["+numberOfInputsCurrently+"]['notes']");

    //now we need to grab all the json data and stuff it into the options
    ingredientList.appendChild(newIngredientSelect);
  }
}

let buttonAddIngredientInput = document.getElementById("add-ingredient");

buttonAddIngredientInput.addEventListener("click", addIngredient);
