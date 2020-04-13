const React = require('react');
import Head from './head';
import Header from './header';

class AddRecipeForm extends React.Component {

    render() {

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
                        <form method="POST" action="/recipes" className="add-form">
                            <h2 className="add-form__header">Add a New Recipe</h2>
                            <input type="text" name="title" placeholder="title" maxLength="25"></input>
                            <input type="text" name="img" placeholder="image link"></input>
                            <div className="add-form__ingredients">
                                <h3>Ingredients</h3>
                                <div className="form__btn-wrapper">
                                    <button className="add-form__add-ingredient-btn" type="button">Add</button>
                                    <button className="add-form__delete-ingredient-btn" type="button">Delete</button>
                                </div>

                            </div>
                            <div className="add-form__instructions">
                                <h3>Instructions</h3>
                                <div className="form__btn-wrapper">
                                    <button className="add-form__add-instruction-btn" type="button">Add</button>
                                    <button className="add-form__delete-instruction-btn" type="button">Delete</button>
                                </div>

                            </div>
                            <p className="add-form__invalid-msg">{this.props.message}</p>
                            <button className="add-form__create-btn" type="submit">Create!</button>
                        </form>


                    </div>
                </body>
                <script src="scripts/add-recipe.js" defer></script>
            </html>
        );
    }
}

module.exports = AddRecipeForm;