var React = require('react');

console.log("Reading view recipes");
class ViewSingleRecipe extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className="recipe">
                    Recipe ID: <h3>{this.props.id}</h3>
                    Recipe Title: <h3>{this.props.title}</h3>
                    Recipe Ingredients: <h4>{this.props.ingredients}</h4>
                    Recipe Instructions: <h4>{this.props.instructions}</h4>

                    <button><a href={'/recipes/'+this.props.id+'/edit'}>Edit Recipe</a></button>

                    <form method="POST" action={'/recipes/'+this.props.id+'?_method=delete'}>
                        <input name="id" type="hidden" value={this.props.id} />
                        <input name="title" type="hidden" value={this.props.title} />
                        <input type="submit" value="Delete Recipe" />
                    </form>
            </div>

        );
    }
}

module.exports = ViewSingleRecipe