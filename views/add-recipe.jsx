const React = require('react');
const head = require('./head');
const header = require('./header');

class AddRecipeForm extends React.Component {

    render() {

        return (
            <html>
                {head()}
                <body>
                    <div className="container">
                        {header()}
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
                                <button className="add-form__add-ingredient-btn" type="button">Add Ingredient</button>

                            </div>
                            <div className="add-form__instructions">
                                <h3>Instructions</h3>
                                <button className="add-form__add-instruction-btn" type="button">Add Instruction</button>

                            </div>
                            <p className="add-form__invalid-msg">{this.props.message}</p>
                            <button class="add-form__create-btn" type="submit">Create!</button>
                        </form>


                    </div>
                </body>
                <script src="scripts/add-recipe.js" def></script>
            </html>
        );
    }
}

module.exports = AddRecipeForm;