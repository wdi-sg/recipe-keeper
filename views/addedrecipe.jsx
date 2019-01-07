
var React = require('react');

class AddedRecipe extends React.Component {
    render() {
        let lastIndex = (this.props.recipes.length - 1);
        const addRecipe = this.props.recipes[lastIndex];

        return(
                <div>
                    <h2> Successfully added a new recipe! </h2>
                        <h3> Title:  </h3>
                            <p> {addRecipe.title} </p>
                        <h3> Ingredients: </h3>
                            <p> {addRecipe.ingredients} </p>
                        <h3> Instructions: </h3>
                            <p> {addRecipe.instructions} </p>
                </div>
        )
    }
}

module.exports = AddedRecipe;