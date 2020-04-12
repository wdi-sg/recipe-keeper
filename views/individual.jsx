const React = require('react');
class Individual extends React.Component {
    render () {

        let recipe = this.props;

        let ingredients = recipe.ingredients.split(', ');
        let ingredientsList = ingredients.map(ingredient => {
            return (<li>{ingredient}</li>)
        })

        let instructions = recipe.instructions.split(', ');
        let instructionsList = instructions.map(instruction => {
            return (<li>{instruction}</li>)
        });

        const editRecipe = '/recipes/' + recipe.id + '/edit';
        const deleteRecipe = '/recipes/' + recipe.id + '?_method=delete';

        return (
            <html>
                <body>
                    <h1>{recipe.title}</h1>
                    <h2>Ingredients</h2>
                    <ul>{ingredientsList}</ul>
                    <h2>Instructions</h2>
                    <ol>{instructionsList}</ol>

                    <p><a href={editRecipe}>Edit recipe</a></p>

                    <form method='POST' action={deleteRecipe}>
                        <input type='submit' value='Delete recipe'/>
                    </form>
                    <p><a href='/recipes/'>Return to main page</a></p>
                </body>
            </html>
        )
    }
}

module.exports = Individual