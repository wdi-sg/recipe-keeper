
var addMoreIngredient= function () {
    let len = document.querySelectorAll(".ingredients > .row").length;
    console.log(len)

    // create main div
    let div = document.createElement("div");
    div.className = "row";

    // create div for each field
    let innerDiv1 = document.createElement("div");
    let innerDiv2 = document.createElement("div");
    let innerDiv3 = document.createElement("div");
    innerDiv1.className = "col";
    innerDiv2.className = "col";
    innerDiv3.className = "col";

    // create respective input field
    let nameInput = document.createElement("input");
    let amountInput = document.createElement("input");
    let notesInput = document.createElement("input");

    nameInput.className = "form-control";
    amountInput.className = "form-control";
    notesInput.className = "form-control";

    amountInput.type = "number";

    nameInput.setAttribute("name", `ingredients[${len}][name]`);
    amountInput.setAttribute("name", `ingredients[${len}][amount]`);
    notesInput.setAttribute("name", `ingredients[${len}][notes]`);

    // append created elements to div
    innerDiv1.appendChild(nameInput);
    innerDiv2.appendChild(amountInput);
    innerDiv3.appendChild(notesInput);

    div.appendChild(innerDiv1);
    div.appendChild(innerDiv2);
    div.appendChild(innerDiv3);

    document.querySelector(".ingredients").appendChild(div);
}

document.querySelector('.moreIngredientButton').addEventListener('click', addMoreIngredient);