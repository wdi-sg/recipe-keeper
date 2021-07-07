var React = require('react');

class showRecipes extends React.Component {
    render() {
        return (

        <html>
        <body>
            <div>
                <h1>Show The Goodness</h1>
                    <p> Recipes Title: {this.props.title} </p>
                    <p> Recipes Ingredients: {this.props.ingredients} </p>
                    <p> Recipes Instructions: {this.props.instructions}</p>
            </div>
        </body>
        </html>
        );

    }
}

module.exports = showRecipes;