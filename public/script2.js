// for editing recipe
window.onload = function() {
    var allIngredientList = document.querySelectorAll(".twentyWidth.ingredient"); // all ingredients
    var allInstructionList = document.querySelectorAll(".twentyWidth.instruction"); // all instructions

    allIngredientList[0].addEventListener('click', cloneButton);
    allInstructionList[0].addEventListener('click', cloneButton);

    // add event listeners (+ &&  - buttons to remaining buttons)  
    addBothListeners(allIngredientList);
    addBothListeners(allInstructionList);
    
}

function cloneButton(){
    var divToClone = this.parentNode;
    console.log(divToClone.parentNode);
    var clonedDiv = divToClone.cloneNode(true);

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
    clonedDiv.childNodes[1].addEventListener('click', plusDiv);
    clonedDiv.childNodes[2].addEventListener('click', minusDiv);

    moveDiv(divToClone, clonedDiv);
}

    
function moveDiv(divToClone, clonedDiv) {
    console.log(divToClone);
    if (divToClone.className === "ingredient") {
        divToClone.parentNode.parentNode.insertBefore(clonedDiv, document.getElementById('instructions'));
    } else {
        divToClone.parentNode.parentNode.insertBefore(clonedDiv, document.getElementById('submitButton'));
    }
}

function addBothListeners(nodeList) {
    for (var i=1; i<nodeList.length; i++){
        console.log(nodeList[i]);
        // adding event listener to plus 
        nodeList[i].parentNode.childNodes[1]. addEventListener('click', plusDiv);

        // minus button && its corresponding event listener
        var minusButton = document.createElement("div");
        minusButton.className = "twentyWidth minusButton";
        minusButton.textContent = "-";
        minusButton.addEventListener('click', minusDiv);
        nodeList[i].parentNode.insertBefore(minusButton, nodeList[i].parentNode.lastChild.nextSibling);
    }
}