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
            <div className="container">
                <div className="nav">
                    <a href="/" className="nav__link index-link">Home</a>
                    <a href="/recipes/new" className="nav__link add-recipe">Add a Recipe</a>
                    <a href="/recipes/" className="nav__link show-all-recipes">Show All Recipes</a>
                    <a href="/recipes/reset" className="nav__link reset-link">Reset Recipes</a>
                </div>
                <div className="ingredient-list__container">
                    <h3>Ingredients List</h3>
                    {ingredients}
                </div>
            </div>
            </body>
            </html>
        );
    }
}

module.exports = Ingredients;