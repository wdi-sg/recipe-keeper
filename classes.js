class recipe {
    constructor(title, ingredients, instructions){
        this.title = title;
        //ingredients is an array of ingredient objects ( ingredient[] )
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}
module.exports.recipe = recipe;
class ingredient {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}
module.exports.ingredient = ingredient;