var React = require('react');
var DefaultLayout = require('./default');
console.log("Start rendering ");

class DeleteRecipe extends React.Component {
    render() {
        return (
            <DefaultLayout title="RECIPE" recipeLength = {this.props.recipe.length}>
            <h2>{this.props.recipe.id}</h2>
            <h2>{this.props.recipe.title}</h2>
            <h2>{this.props.recipe.ingredients}</h2>
            <h2>{this.props.recipe.instructions}</h2>
            <form method="POST" action={"/recipes/:id" + this.props.recipe.id + "?_method=DELETE"}>
                <input type="submit" value="Delete Recipe"/>
            </form>
            </DefaultLayout>
            )};
    }


module.exports = DeleteRecipe;
