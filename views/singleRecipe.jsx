var React = require('react');

class singleRecipe extends React.Component {
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

module.exports = singleRecipe;