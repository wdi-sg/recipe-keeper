const React = require('react');
import Head from './head';
import Header from './header';

class EditRecipeForm extends React.Component {

    render() {

        const ingredients = this.props.ingredients.map(ingredient => {
            return <div className="edit-form__ingredient">
                        <input type="text" className="ingredient__item" name="ingredient[name][]" defaultValue={ingredient.name}></input>
                        <input type="text" className="ingredient__amount" name="ingredient[amount][]" defaultValue={ingredient.amount}></input>
                        <input type="text" className="ingredient__notes" name="ingredient[notes][]" defaultValue={ingredient.notes}></input>
                    </div>

        })

        const instructions = this.props.instructions.map(instruction => {
            return <div className="edit-form__instruction">
                        <h3>#{this.props.instructions.indexOf(instruction)}</h3>
                        <input type="text" className="instructions__para" name="instructions[]" defaultValue={instruction}></input>
                    </div>
        })

        return (
            <html>
                <Head />
                <body>
                    <div className="container">
                        <Header />
                        <div className="nav">
                            <a href="/recipes/" className="nav__link show-all-recipes">Show All Recipes</a>
                            <a href="/" className="nav__link index">Home</a>
                            <a href="/recipes/reset" className="nav__link reset">Reset Recipes</a>
                            <a href="/ingredients" className="nav__link ingredients-link">Ingredients List</a>
                        </div>
                        <form method="POST" action={`/recipes/${this.props.id}?_method=put`} className="edit-form">
                            <h2 className="edit-form__header">Edit This Recipe</h2>
                            <input type="text" name="title" placeholder="title" maxLength="25" defaultValue={this.props.title}></input>
                            <input type="text" name="img" placeholder="image link" defaultValue={this.props.img}></input>
                            <div className="edit-form__ingredients">
                            <h3>Ingredients</h3>
                            <div className="form__btn-wrapper">
                                <button className="edit-form__add-ingredient-btn" type="button">Add</button>
                                <button className="edit-form__delete-ingredient-btn" type="button">Delete</button>
                            </div>
                            {ingredients}

                            </div>
                            <div className="edit-form__instructions">
                            <h3>Instructions</h3>
                                <div className="form__btn-wrapper">
                                    <button className="edit-form__add-instruction-btn" type="button">Add</button>
                                    <button className="edit-form__delete-instruction-btn" type="button">Delete</button>
                                </div>
                                    {instructions}
                            </div>
                            <p className="edit-form__invalid-msg">{this.props.message}</p>
                            <button className="edit-form__create-btn" type="submit">Edit!</button>
                        </form>
                    </div>
                </body>
                <script src="scripts/edit-recipe.js" defer></script>
            </html>
        );
    }
}

module.exports = EditRecipeForm;