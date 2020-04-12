const React = require('react');
class Index extends React.Component {
    render() {

        let recipe = this.props.recipe;

        let recipeList = recipe.map(recipe => {
            return (<li><a href={recipe.id}>{recipe.title}</a></li>);
        })

        return (
            <html>
                <body>
                    <h1>Recipe Index</h1>
                    <h2>New Recipe</h2>
                    <p>Click <a href='/recipes/new'>here</a> to create a new recipe.</p>
                    <h2>List of Recipes</h2>
                    <ul>{recipeList}</ul>

                </body>
            </html>
        );
    }
}

module.exports = Index;