var React = require('react');

class Home extends React.Component {
    render() {
        const recipes = this.props.recipes.map( (recipe, index) => {
            let recipeLink = "http://localhost:3000/recipes/" + (index+1);
            return (
                <li><a href={recipeLink}>{recipe.title}</a></li>
                );
        })


        return (
            <html>
                <body>
                    <h1>Recipe Keeper</h1>
                    <ul>
                    {recipes}
                    </ul>
                    <form method="GET" action="/recipes/new">
                        <input type="submit" value="New Recipe"/>
                    </form>
                </body>
            </html>
            );
    }
}

module.exports = Home;