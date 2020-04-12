const React = require('react');
class Show extends React.Component {
    render () {

        let recipe = this.props;

        let ingredients = recipe.ingredients.split(', ');
        let ingredientsList = ingredients.map(ingredient => {
            return (<li>{ingredient}</li>)
        })

        let instructions = recipe.instructions.split(', ')
        let instructionsList = instructions.map(instruction => {
            return (<li>{instruction}</li>)
        })

        return (
            <html>
                <body>
                    <h1>Your new recipe is created!</h1>
                    <h2>{recipe.title}</h2>
                    <h2>Ingredients</h2>
                    <ul>{ingredientsList}</ul>
                    <h2>Instructions</h2>
                    <ol>{instructionsList}</ol>

                    <p><a href='/recipes/'>Return to main page</a></p>
                </body>
            </html>
        )
    }
}

module.exports = Show