
//see single recipe step 7: create page to display single recipe
var React = require('react');

// var Recipe = require('./recipeHTML.jsx');

class Recipe extends React.Component {
    render() {
        return (
            <html>
                <body>
                    <div>
                        <h1>Recipe Title: {this.props.recipe.title}</h1>
                        <h3>Recipe Ingredients: {this.props.recipe.ingredients}</h3>
                        <h3>Recipe Instructions: {this.props.recipe.instructions}</h3>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Recipe;