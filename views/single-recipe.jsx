var React = require('react');
var DefaultLayout = require('./default');

class SingleRecipe extends React.Component {
    render() {
        const recipe = this.props.single;

        const actionPath = `/recipes/${recipe.num}?_method=delete`;
        return (
            <DefaultLayout>
                <h1> Single Recipe Page </h1>
                    <h2> Title: {recipe.title} </h2>
                    <h3> Ingredients: </h3>
                    <p> {recipe.ingredients} </p>
                    <h3> Instructions: </h3>
                    <p> {recipe.instructions} </p>

                <form method="POST" action={actionPath}>
                    <input name="del-recipe" type="hidden"/>
                    <button type="submit"> Delete</button>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = SingleRecipe;