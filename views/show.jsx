var React = require('react');

class Show extends React.Component {

    render() {

        return (

        <body>
            <h1>Recipe</h1>
                <div>
                    <div>Recipe Title:
                        <p>{this.props.recipeTitle}</p>
                    </div>
                    <div>Ingredients:
                        <p>{this.props.ingredients}</p>
                    </div>
                    <div>Instructions:
                        <p>{this.props.instructions}</p>
                    </div>
                </div>
        </body>

        );
    }
}

module.exports = Show;