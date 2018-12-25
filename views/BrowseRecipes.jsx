var React = require('react');
import DefaultView from './DefaultView';

class Home extends React.Component {

    render() {

        return (
            <DefaultView>
            <div>
            <h1>Recipes <span className="click-instruction">(Click on the recipe name to see the recipe)</span></h1>
            <ul>
            {              
                this.props.recipes.map (recipe => {
                    return (
                        <li key="recipeName" className="recipe-title">
                            <a className="recipe-title" href={'/recipes/'+recipe.recipeId}>{recipe.name}</a>
                            <p>{recipe.summary}</p>
                        </li>
                    )
                })
            }
            </ul>
            </div>
            </DefaultView>
        )
    }
}

module.exports = Home