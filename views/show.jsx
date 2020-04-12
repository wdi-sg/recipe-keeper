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
            <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                </head>
                <body>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 text-red bg-warning'>
                                <h6>Your new recipe is created!</h6>
                            </div>
                        </div>
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
                                <button className='btn btn-secondary'><a className='text-white' href='/recipes/'>Return to main page</a></button>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Show