var React = require('react');
var DefaultLayout = require ('./default');

class AddedRecipe extends React.Component {
    render() {
        let lastIndex = (this.props.recipes.length - 1);
        const addRecipe = this.props.recipes[lastIndex];

        return(
            <DefaultLayout>
                <div>
                    <h2> successfully added a new recipe! </h2>
                        <h3> Title:  </h3>
                            <p> {addRecipe.title} </p>
                        <h3> Ingredients: </h3>
                            <p> {addRecipe.ingredients} </p>
                        <h3> Instructions: </h3>
                            <p> {addRecipe.instructions} </p>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = AddedRecipe;