var React = require('react');

class singleRecipe extends React.Component {
    render() {
        const recipe = this.props.single;

        const actionPath = `/recipes/${recipe.num}?_method=delete`;
        return (
            <div>
                <h1> Single Recipe Page </h1>
                    <h2> Title: {recipe.title} </h2>
                    <h3> Ingredients: </h3>
                    <p> {recipe.ingredients} </p>
                    <h3> Instructions: </h3>
                    <p> {recipe.instructions} </p>
            </div>

        )
    }
}

module.exports = singleRecipe;