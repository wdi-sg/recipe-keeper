const formAddIngredientBtn = document.querySelector(".add-form__add-ingredient-btn");
const formAddInstructionBtn = document.querySelector(".add-form__add-instruction-btn");

const formIngredientsSection = document.querySelector(".add-form__ingredients")
const formInstructionsSection = document.querySelector(".add-form__instructions");

const addIngredient = () => {

    ingredientNum = document.querySelectorAll('.add-form__ingredient').length

    formIngredientsSection.insertAdjacentHTML('beforeend',
        `<div class="add-form__ingredient">
            <input type="text" name="ingredient[name][]" placeholder="ingredient" value=""></input>
            <input type="text" name="ingredient[amount][]" placeholder="quantity/amount" value=""></input>
            <input type="notes" name="ingredient[notes][]" placeholder="notes" value=""></input>
        </div>`)
}

formAddIngredientBtn.addEventListener('click', addIngredient);

const addInstruction = () => {

    instructionNum = document.querySelectorAll('.add-form__instruction').length

    formInstructionsSection.insertAdjacentHTML('beforeend',
        `
        <div class="add-form__instruction">
            <h3>#${instructionNum}</h3>
            <input type="text" name="instructions[]" value=""></input>
        </div>
        `
    )
}

formAddInstructionBtn.addEventListener('click', addInstruction);