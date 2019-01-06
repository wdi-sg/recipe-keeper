var React = require('react');
var DefaultLayout = require('./default');
console.log("Start rendering ");

class EditRecipe extends React.Component {
    render() {
        return (
            <DefaultLayout title="RECIPE" recipeLength = {this.props.recipe.length}>
            <h2>{this.props.recipe.id}</h2>
            <h2>{this.props.recipe.title}</h2>
            <h2>{this.props.recipe.ingredients}</h2>
            <h2>{this.props.recipe.instructions}</h2>
            <form method="POST" action={"/recipes/:id/edit" + this.props.recipe.id + "?_method=PUT"}>
                <input type="submit" value="Edit Recipe"/>
            </form>
            </DefaultLayout>
            )};
    }


module.exports = EditRecipe;
