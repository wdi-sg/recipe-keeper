const addInput = function (e) {
  e.preventDefault();
  let ix = document.querySelectorAll(".ingredient").length + 1;
  let newFields = document.createElement("div");
  newFields.className = "form-group form-row";

  let ingCol = document.createElement("div");
  ingCol.className = "col";

  let newIngredient = document.createElement("input");
  newIngredient.className = "ingredient form-control";
  newIngredient.name = `ing-${ix}`;

  let qtyCol = document.createElement("div");
  qtyCol.className = "col";

  let newQuantity = document.createElement("input");
  newQuantity.className = "quantity form-control";
  newQuantity.name = `ing-${ix}`;

  ingCol.appendChild(newIngredient);
  qtyCol.appendChild(newQuantity);
  newFields.appendChild(ingCol);
  newFields.appendChild(qtyCol);
  document.querySelector("#ingredientlist").appendChild(newFields);
};

const addListener = function () {
  let button = document.querySelector("#increase");
  button.addEventListener("click", addInput);
};

document.addEventListener(
  "DOMContentLoaded",
  addListener
);
