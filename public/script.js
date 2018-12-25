var ingredients = [];
var instructions = [];

window.onload = () => {   
    ingredients.push(document.body.querySelectorAll('.ingredient-wrapper')[0]);
    ingredients[0].childNodes[1].addEventListener('click', addIngredient);
    instructions.push(document.body.querySelectorAll('.instructions-wrapper')[0]);
    instructions[0].childNodes[1].addEventListener('click', addInstruction);
    // document.body.querySelector('.instruction-add').addEventListener('click', addInstruction);
}

function addIngredient(){
    let thisIngredient = this.parentNode;
    let newIngredient = duplicate(thisIngredient);

    newIngredient.childNodes[1].addEventListener('click', addIngredient);
    newIngredient.childNodes[2].addEventListener('click', removeIngredient);

    ingredients.push(newIngredient);
    thisIngredient.childNodes[1].style.display = "none";
    document.body.querySelector('form').insertBefore(newIngredient, document.body.querySelector('#cooking-instructions-label'));
}

function addInstruction(){
    let thisInstruction = this.parentNode;
    let newInstruction = duplicate(thisInstruction);

    newInstruction.childNodes[1].addEventListener('click', addInstruction);
    newInstruction.childNodes[2].addEventListener('click', removeInstruction);

    instructions.push(newInstruction);
    thisInstruction.childNodes[1].style.display = "none";
    document.body.querySelector('form').insertBefore(newInstruction, document.body.querySelector('#submit-button'));
}

function duplicate(node){
    let clonedNode = node.cloneNode(true);
    clonedNode.childNodes[0].value = "";
    clonedNode.childNodes[2].style.display = "flex";

    return clonedNode;
}

function removeIngredient(){
    let thisIngredient = this.parentNode;
    let thisIngredientIndex = ingredients.findIndex(ingredient=>{
        return ingredient === thisIngredient;
    });
    ingredients.splice(thisIngredientIndex,1);
    thisIngredient.remove();
    ingredients[ingredients.length - 1].childNodes[1].style.display = "flex";
    ingredients.length >= 2 ? ingredients[ingredients.length - 1].childNodes[2].style.display = "flex" : 0;
}

function removeInstruction(){
    let thisInstruction = this.parentNode;
    let thisInstructionIndex = instructions.findIndex(instruction=>{
        return instruction === thisInstruction;
    });
    instructions.splice(thisInstructionIndex,1);
    thisInstruction.remove();
    instructions[instructions.length - 1].childNodes[1].style.display = "flex";
    instructions.length >= 2 ? instructions[instructions.length - 1].childNodes[2].style.display = "flex" : 0;
}