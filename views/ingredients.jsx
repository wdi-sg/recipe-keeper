const React = require('react');
import Head from './head';
import Header from './header';

class Ingredients extends React.Component {

    render() {

        let recipeUrl;

        const ingredArr = Array.from(new Set(this.props.recipes
            .map(recipe => recipe.ingredients)
            .flat()
            .map(ingred => ingred.name)));

        const ingredients = ingredArr.map(ingredient => {

            const recipesWithIngredient = this.props.recipes

                .filter(recipe => {
                    if (recipe.ingredients.map(ingred => ingred.name)
                        .includes(ingredient)) {
                        return recipe
                    };
                })

                .map(recip => {
                    return <a href={`/recipes/${recip.id}`}>{`${recip.title}`}</a>
                })

            return <div className="ingredient__el">
                        <a href={recipeUrl} className="ingredient__item">{ingredient}</a>
                        <div className="ingredient__links">
                            <h4 className="ingredient__links-header">Used In: </h4>
                            {recipesWithIngredient}
                        </div>
                    </div>

        })


        return (
            <html>
            <Head />
            <body>
            <Header />
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