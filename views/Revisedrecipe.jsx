var React = require('react');

class Revisedrecipe extends React.Component {
    render() {
        return (
            <html>
            <head> </head>

            <body>
                <div>
                        <h1>{this.props.message}</h1>
                        <h3>Recipe for: {this.props.recipe.title}</h3>
                        <p>Ingredients: {this.props.recipe.ingredients}</p>
                        <p>Instructions: {this.props.recipe.instructions}</p>
                </div>
            </body>
            </html>
            )
    };
};

module.exports = Revisedrecipe;