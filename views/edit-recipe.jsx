const React = require('react');
const head = require('./head');
const header = require('./header');

class EditRecipeForm extends React.Component {

    render() {

        const ingredients = this.props.ingredients.map(ingredient => {
            return <div className="ingredient__el">
                        <input type="text" className="ingredient__item" defaultValue={ingredient.name}></input>
                        <input type="text" className="ingredient__amount" defaultValue={ingredient.amount}></input>
                        <input type="text" className="ingredient__notes" defaultValue={ingredient.notes}></input>
                    </div>

        })

        const instructions = this.props.instructions.map(instruction => {
            return <div className="instruction__el">
                        <input type="text" className="instructions__para" defaultValue={instruction}></input>
                    </div>
        })

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
                        <form method="PUT" action="/recipes" className="edit-form">
                            <h2 className="edit-form__header">Edit This Recipe</h2>
                            <input type="text" name="title" placeholder="title" maxLength="25" defaultValue={this.props.title}></input>
                            <input type="text" name="img" placeholder="image link" defaultValue={this.props.img}></input>
                            <div className="edit-form__ingredients">
                            <h3>Ingredients</h3>
                            {ingredients}

                            </div>
                            <div className="edit-form__instructions">
                            <h3>Instructions</h3>
                            {instructions}

                            </div>
                            <p className="edit-form__invalid-msg">{this.props.message}</p>
                            <button type="submit">Create!</button>
                        </form>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = EditRecipeForm;