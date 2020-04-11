const React = require('react');
const head = require('./head');

class RecipeForm extends React.Component {

    render() {

        return (
            <html>
                {head}
                <body>
                    <div className="container">
                        <div className="header">
                            <img src=""></img>
                            <h1 className="header__text">GORDON RAMZ' RECIPES</h1>
                            <img src=""></img>
                        </div>
                        <div className="nav">
                            <a href="/reset" className="nav__link reset">Reset to original Recipes</a>
                            <a href="/" className="nav__link index">Home</a>
                        </div>
                        <form method="POST" action="/recipes" className="add-form">
                            <h2 className="add-form__header">Add a New Recipe</h2>
                            <input type="text" name="title" placeholder="title" maxLength="25"></input>
                            <input type="text" name="img" placeholder="image link"></input>
                            <div className="add-form__ingredients">
                            <h2>Ingredients</h2>
                            <button className="add-form__add-ingredient-btn" type="button">Add Ingredient</button>

                            </div>
                            <div className="add-form__instructions">
                            <h2>Instructions</h2>
                            <button className="add-form__add-instruction-btn" type="button">Add Instruction</button>

                            </div>
                            <h4>{this.props.message}</h4>
                            <button type="submit">Create!</button>
                        </form>


                    </div>
                </body>
                <script src="scripts/main.js" def></script>
            </html>
        );
    }
}

module.exports = RecipeForm;