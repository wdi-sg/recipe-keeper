window.onload = function() {
    var firstIngredientAdd = document.querySelectorAll(".twentyWidth")[0];
    var firstInstructionAdd = document.querySelectorAll(".twentyWidth")[1]; 

    firstIngredientAdd.addEventListener('click', cloneButton);
    firstInstructionAdd.addEventListener('click', cloneButton);
}

function cloneButton(){
    var divToClone = this.parentNode;
    // console.log(divToClone.parentNode);
    var clonedDiv = divToClone.cloneNode(true);
    clonedDiv.childNodes[0].value = "";

    // adding event listener to + button
    clonedDiv.childNodes[1].addEventListener('click', plusDiv);


    // adding minus button && event listener
    var minusButton = document.createElement("div");
    minusButton.className = "twentyWidth minusButton";
    minusButton.textContent = "-";
    minusButton.addEventListener('click', minusDiv);
    clonedDiv.insertBefore(minusButton, clonedDiv.lastChild.nextSibling);

    moveDiv(divToClone, clonedDiv);

}

function minusDiv() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}

function plusDiv() {
    var divToClone = this.parentNode;
    var clonedDiv = divToClone.cloneNode(true);
    clonedDiv.childNodes[0].value = "";

    clonedDiv.childNodes[1].addEventListener('click', plusDiv);
    clonedDiv.childNodes[2].addEventListener('click', minusDiv);

    moveDiv(divToClone, clonedDiv);
}

    
function moveDiv(divToClone, clonedDiv) {
    if (clonedDiv.className === "ingredientList") {
        divToClone.parentNode.insertBefore(clonedDiv, document.getElementById('instructions'));
    } else {
        divToClone.parentNode.insertBefore(clonedDiv, document.getElementById('submitButton'));
    }
}