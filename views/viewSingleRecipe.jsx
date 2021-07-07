var React = require('react');
var DefaultLayout = require('./default');

console.log("Reading view recipes");
class ViewSingleRecipe extends React.Component {

    render() {
        console.log(this.props);
        return (
            <DefaultLayout>
            <div className="recipe">
                    <h3>Recipe ID:{this.props.id}</h3>
                    <h3>Recipe Title: {this.props.title}</h3>
                    <h4>Recipe Ingredients: {this.props.ingredients}</h4>
                    <h4>Recipe Instructions: {this.props.instructions}</h4>

                    <a href={'/recipes/'+this.props.id+'/edit'}><button>Edit Recipe</button></a>

                    <form method="POST" action={'/recipes/'+this.props.id+'?_method=delete'}>
                        <input name="id" type="hidden" value={this.props.id} />
                        <input name="title" type="hidden" value={this.props.title} />
                        <input type="submit" value="Delete Recipe" />
                    </form>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = ViewSingleRecipe