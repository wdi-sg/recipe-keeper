var React = require('react');

class Home extends React.Component {
    render() {

    const allRecipes = this.props.recipes.recipes.map( (recipes, index) => {
        return (
            <li>{recipes.title}</li>
        )
    })

        return (
            <html>
                <body>
                    <h1>Welcome to the Recipe Keeper</h1>
                        <h2>All Recipes</h2>
                            <ul>
                            {allRecipes}
                            </ul>
                </body>
            </html>
        )
    }
}

module.exports = Home;