
var React = require('react');

class ViewRecipe extends React.Component {
    render() {
        var recipeBook = this.props.recipes;
        var recipeFormatted = [];
        if (recipeBook.length == 0) {
            var recipe = <div className="card text-center text-black bg-light mb-3">
                <div className="card-body">
                    <h5 className="card-title text-center"><strong>No recipes to show</strong></h5>
                </div>
            </div>;
            recipeFormatted = [recipe];
        } else {
            recipeFormatted = recipeBook.map(recipe => {
                recipe = <div className="card text-center text-black bg-light mb-3">
                    <div className="card-body">
                        <h5 className="card-title text-center"><a href={`recipes/${recipe.id}`}><strong>{recipe.title}</strong></a></h5>
                    </div>
                </div>;
                return recipe;
            })
        }




        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                </head>
                <body style={{ backgroundColor: "lightblue" }}>
                    <div className="container mw-50 w-50">
                        <h1 className="text-center font-italic"><u><strong>Recipe List</strong></u></h1>
                        <div className="container w-75">
                            <br />
                            {recipeFormatted}
                        </div>




                        <div className="text-center">
                            <br />
                            <a href="/recipes/new" className="btn btn-primary w-50">Add New Recipes</a>
                            <br/><br/>
                            <a href="/" className="btn btn-primary w-50">Home</a>

                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = ViewRecipe;