var React = require('react');

class ViewSingleRecipe extends React.Component {

    render() {
        return (
            <div className="recipe">
                    Recipe ID: <h3>{this.props.recipes.id}</h3>
                    Recipe Title: <h3>{this.props.recipes.title}</h3>
                    Recipe Ingredients: <h4>{recipe.ingredients}</h4>
                    Recipe Instructions: <h4>{recipe.instructions}</h4>
                </div>

        );
    }
}

module.exports = ViewSingleRecipe