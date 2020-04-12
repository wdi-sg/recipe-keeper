const React = require('react');
const head = require('./head');
const header = require('./header');

class Ingredients extends React.Component {

    render() {

        let recipeUrl;

        const ingredientsArr = this.props.recipes.map(recipe => {
            return recipe.ingredients
        })

        const ingredients = ingredientsArr.flat().map(ingredient => {

            const recipesWithIngredient = this.props.recipes
                .filter(recipe => {
                    if (recipe.ingredients.includes(ingredient)) return recipe;
                })
                .map(recip => {
                    return <a href={`/recipes/${recip.id}`}>{`${recip.title}`}</a>
                })

            console.log(recipesWithIngredient);


            return <div className="ingredient__el">
                        <a href={recipeUrl} className="ingredient__item">{ingredient.name}</a>
                        <div className="ingredient__links">
                        <h4 className="ingredient__links-header">Used In: </h4>
                        {recipesWithIngredient}
                        </div>
                    </div>

        })


        return (
            <html>
            {head()}
            <body>
            {header()}
            {ingredients}
            </body>
            </html>
        );
    }
}

module.exports = Ingredients;