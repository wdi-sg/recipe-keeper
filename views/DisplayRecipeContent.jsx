var React = require('react');
import DefaultView from './DefaultView';

class Home extends React.Component {

    render() {
        return (
            <div className="recipeView">
                <div>
                    <h1 className="recipe-title">{this.props.recipe.name}</h1>
                </div>
                <div>
                    <h3 className="recipe-summary">Summary</h3>
                    <p>{this.props.recipe.summary}</p>
                </div>
                <div>
                    <h3 className="recipe-ingredients-title">Ingredient(s) Used</h3>
                    <ul>
                    {
                        this.props.recipe.ingredients.map (ingredient => {
                            return (
                                <li key="ing" className="recipe-ingredients-list">{this.props.ingredients.find(ing => ing.id === parseInt(ingredient)).name}</li>
                            )
                        })
                    }
                    </ul>
                </div>
                <div>
                    <h3 className="recipe-instruction-title">Instructions</h3>
                    <p className="recipe-instructions">{this.props.recipe.instructions}</p>
                </div>  

            </div>
        )
    }
}

module.exports = Home