var React = require('react');

class Home extends React.Component {

    render() {

        const recipes = this.props.recipes.map( (recipe) => {
            return (
                <div>
                    <h4>{recipe.id}</h4>
                    <h4>{recipe.title}</h4>
                    <h4>{recipe.ingredients}</h4>
                    <h4>{recipe.instructions}</h4>
                </div>
                );
        });

        return(

            <html>

            <head>
            </head>

            <body>
                <header>
                <h1>All Recipes</h1>
                <div>
                {recipes}
                </div>
                </header>

                <header>
                <h1>Create a recipe:</h1>
                </header>

                <form method="POST" action="/recipes/">
                <p>Recipe Title:</p><input name="title"/><br />
                <p>Ingredients:</p><input name="ingredients"/><br />
                <p>Instructions:</p><textarea name="instructions" rows="10" cols="30"></textarea><br />
                <input type="submit" value="submit"/>
                </form>

            </body>
            </html>

        )
    }

}

module.exports = Home;