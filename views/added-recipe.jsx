var React = require('react');
var DefaultLayout = require ('./default');

class AddedRecipe extends React.Component {
    render() {
        let lastIndex = (this.props.recipes.length - 1);
        const addRecipe = this.props.recipes[lastIndex];

        return(
            <DefaultLayout>
                <div className = "newly-add-recipe">
                    <div className = "newly-add-wrapper">
                        <h1> successfully added a new recipe! </h1>
                            <h2> Title:  </h2>
                                <p> {addRecipe.title} </p>
                            <h2> Prep level:  </h2>
                                <p> {addRecipe.prep} </p>
                            <h2> Cook time:  </h2>
                                <p> {addRecipe.cook} </p>
                            <h2> Ready to serve in:  </h2>
                                <p> {addRecipe.ready} </p>
                            <h2> Ingredients: </h2>
                                <p> {addRecipe.ingredients} </p>
                            <h2> Instructions: </h2>
                                <p> {addRecipe.instructions} </p>
                        </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = AddedRecipe;