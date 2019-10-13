var React = require('react');

class Home extends React.Component {
    render() {

        const recipeDetails = this.props.recipes.map((recipe) => {
            return(
                <div>
                    <li>Recipe No.: {recipe.id}</li>
                    <p>Recipe Title: {recipe.title}</p>
                    <p>Ingredients: {recipe.ingredients}</p>
                    <p>Instructions: {recipe.instructions}</p>
                </div>

            );
        });

        return (
            <html>
                <body>
                    <div>
                        <a href="/recipes/new">Add New Recipe</a>
                        <h3>View all Recipes </h3>
                        <ul>
                            {recipeDetails}
                        </ul>
                    </div>
                </body>
            </html>
            );
    }
}

module.exports = Home;