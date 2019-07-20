//see all step 5: create index page to display all recipes
var React = require('react');

class Index extends React.Component {
    render() {

        const recipeList = this.props.food.map(recipes => {
            return <li>{recipes.title}</li>
        })

        return (
            <html>
                <body>
                    <h1>All Recipes</h1>
                    <ul>
                    {recipeList}
                    </ul>
                </body>
            </html>
        )
    }
};

module.exports = Index;