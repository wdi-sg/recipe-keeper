const formAddIngredientBtn = document.querySelector(".add-form__add-ingredient-btn");
const formAddInstructionBtn = document.querySelector(".add-form__add-instruction-btn");

const formIngredientsSection = document.querySelector(".add-form__ingredients")
const formInstructionsSection = document.querySelector(".add-form__instructions");

const addIngredient = () => {
    formIngredientsSection.insertAdjacentHTML('beforeend',
        `<div class="add-form__ingredient">
            <input type="text" name="name" placeholder="ingredient"></input>
            <input type="text" name="amount" placeholder="quantity/amount"></input>
            <input type="notes" name="notes" placeholder="notes"></input>
        </div>`)
}

formAddIngredientBtn.addEventListener('click', addIngredient);

const addInstruction = () => {

    instructionNum = document.querySelectorAll('.add-form__instruction').length

    formInstructionsSection.insertAdjacentHTML('beforeend',
        `
        <div class="add-form__instruction">
            <h3>#${instructionNum}</h3>
            <input type="text" name="instructions"></input>
        </div>
        `
    )
}

formAddInstructionBtn.addEventListener('click', addInstruction);