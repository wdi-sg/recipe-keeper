var React = require('react');

class Recipe extends React.Component {
    render() {
        return (
            <html>
                <body>
                    <h2>Recipe {this.props.message}</h2>
                    <h3>Recipe Title:</h3>
                    <p>{this.props.title}</p>
                    <h3>Ingredients:</h3>
                    <p>{this.props.ingredients}</p>
                    <h3>Instructions:</h3>
                    <p>{this.props.instructions}</p>
                </body>
            </html>
        );
    }
}

module.exports = Recipe;