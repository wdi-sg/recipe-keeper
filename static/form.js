const addInput = function (e) {
  e.preventDefault();
  let eleList = document.querySelectorAll(".ingredient");
  let lastEle = eleList[eleList.length - 1];
  let ix = Number(lastEle.name.split('-')[1]) + 1;

  let newFields = document.createElement("div");
  newFields.className = "form-group form-row";
  newFields.id = `ing-${ix}`;

  let ingCol = document.createElement("div");
  ingCol.className = "col-5";

  let newIngredient = document.createElement("input");
  newIngredient.className = "ingredient form-control";
  newIngredient.name = `ing-${ix}`;

  let qtyCol = document.createElement("div");
  qtyCol.className = "col-5";

  let newQuantity = document.createElement("input");
  newQuantity.className = "quantity form-control";
  newQuantity.name = `qty-${ix}`;

  let btnCol = document.createElement("div");
  btnCol.className = "col-2";

  let dBtn = document.createElement("button");
  dBtn.className = "btn btn-small btn-outline-secondary btn-block del-input";
  dBtn.id = ix;
  dBtn.innerText = "Remove";
  dBtn.addEventListener("click", delInput);

  ingCol.appendChild(newIngredient);
  qtyCol.appendChild(newQuantity);
  btnCol.appendChild(dBtn);
  newFields.appendChild(ingCol);
  newFields.appendChild(qtyCol);
  newFields.appendChild(btnCol);
  document.querySelector("#ingredientlist").appendChild(newFields);
};

const delInput = function (e) {
  e.preventDefault();
  console.log(this.id);
  let toRemove = document.querySelector(`.form-group #ing-${this.id}`);
  toRemove.remove();
};

const addListener = function () {
  let addButton = document.querySelector("#increase");
  addButton.addEventListener("click", addInput);

  let delButtons = document.querySelectorAll(".del-input");
  for (let btn of delButtons) {
    btn.addEventListener("click", delInput);
  }
};

document.addEventListener(
  "DOMContentLoaded",
  addListener
);
