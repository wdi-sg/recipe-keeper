var React = require('react');
var DefaultLayout = require('./default');
console.log("Start rendering ");

class EditRecipe extends React.Component {
    render() {
        return (
            <DefaultLayout title="RECIPE" recipeLength = {this.props.recipes.length}>
            <h2>{this.props.recipes.id}</h2>
            <h2>{this.props.recipes.title}</h2>
            <h2>{this.props.recipes.ingredients}</h2>
            <h2>{this.props.recipes.instructions}</h2>
            <form method="POST" action={"/recipes/" + this.props.id + "?_method=PUT"}>
                <input type="submit" value="Edit Recipe"/>
            </form>
            </DefaultLayout>
            )};
    }


module.exports = EditRecipe;
