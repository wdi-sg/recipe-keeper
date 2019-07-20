//see all step 5: create page to display all recipes
var React = require('react');

class Index extends React.Component {
    render() {

        //see all step 6: map all recipes name to recipe list
        const recipeList = this.props.food.map(recipes => {

            //see all step 7: list all recipes name to HTML li tag
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