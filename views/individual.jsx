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
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                </head>
                <body>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 text-white bg-dark'>
                                <h2>{recipe.title}</h2>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-8'>
                                <br/>
                                <h4>Ingredients</h4>
                                <ul>{ingredientsList}</ul>
                                <h4>Instructions</h4>
                                <ol>{instructionsList}</ol>
                            </div>
                            <div className='col-4'>
                                <br/>
                                <button className='btn btn-primary'><a className='text-white' href={editRecipe}>Edit recipe</a></button>
                                <br/><br/>
                                <form method='POST' action={deleteRecipe}>
                                    <input className='btn btn-dark' type='submit' value='Delete recipe'/>
                                </form>
                                <br/>
                                <button className='btn btn-secondary'><a className='text-white' href='/recipes/'>Return to main page</a></button>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Individual