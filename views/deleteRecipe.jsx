var React = require('react');
var DefaultLayout = require('./default');

console.log("Start rendering Delete ");

class DeleteRecipe extends React.Component {
    render() {
        return (
            <DefaultLayout title="RECIPE" >
            <h3> You are about to delete the below recipe. Please confirm deletion.</h3>
            <form method="POST" action={"/recipes/:id" + this.props.id + "?_method=DELETE"}>
                <h2>{this.props.id}</h2>
                <h2>{this.props.title}</h2>
                <h2>{this.props.ingredients}</h2>
                <h2>{this.props.instructions}</h2>
                <input type="submit" value="Delete Recipe"/>
            </form>
            </DefaultLayout>
            )};
    }


module.exports = DeleteRecipe;
