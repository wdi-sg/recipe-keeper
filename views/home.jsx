var React = require('react');

class Home extends React.Component {
    render() {
        const recipes = this.props.recipes.map( recipe => {
            return (
                <li>{recipe.title}</li>
                );
        })


        return (
            <html>
                <body>
                    <h1>Recipe Keeper</h1>
                    <ul>
                    {recipes}
                    </ul>
                </body>
            </html>
            );
    }
}

module.exports = Home;