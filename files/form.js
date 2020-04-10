const addInput = function (e) {
  e.preventDefault();
  let inCount = document.querySelectorAll(".ingredient").length + 1;
  let newIngredient = document.createElement("input");
  newIngredient.className = "ingredient form-control";
  newIngredient.setAttribute("name", `ing-${inCount}`);
  let newQty = document.createElement("input");
  newQty.className = "qty form-control";
  newQty.setAttribute("name", `qty-${inCount}`);

  let ingredient = document.createElement("div");
  ingredient.className = "form-group row";

  let col1 = document.createElement("div");
  col1.className = "col";
  let col2 = document.createElement("div");
  col2.className = "col";

  col1.appendChild(newIngredient);
  col2.appendChild(newQty);
  ingredient.appendChild(col1);
  ingredient.appendChild(col2);

  document.querySelector("#ingredientlist").appendChild(ingredient);
};

const tryThis = function () {
  let button = document.querySelector("#increase");
  button.addEventListener("click", addInput);
};

document.addEventListener(
  "DOMContentLoaded",
  tryThis
);
