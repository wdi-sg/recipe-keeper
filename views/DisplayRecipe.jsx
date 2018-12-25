var React = require('react');
import DefaultView from './DefaultView';
import DisplayRecipeContent from './DisplayRecipeContent';

class Home extends React.Component {

    render() {
        return (
            <DefaultView>

            <DisplayRecipeContent recipe={this.props.recipe} ingredients={this.props.ingredients} />
            <div>
                <button><a href={"/recipes/" + this.props.recipe.recipeId+ "/edit"} className= "recipe-href" onClick="redirect()">Edit</a></button>
                <button><a href={"/recipes/" + this.props.recipe.recipeId+ "/delete"} className= "recipe-href" onClick={'redirect(/recipes/'+this.props.recipe.recipeId+')'}>Delete</a></button>
            </div>

            </DefaultView>
        )
    }
}

module.exports = Home