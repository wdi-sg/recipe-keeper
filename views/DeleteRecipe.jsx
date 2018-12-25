var React = require('react');
import DefaultView from './DefaultView';
import DisplayRecipeContent from './DisplayRecipeContent';

class Home extends React.Component {

    render() {
        return (
            <DefaultView>

            <DisplayRecipeContent recipe={this.props.recipe} ingredients={this.props.ingredients} />

            <form method="POST" action={'/recipes/'+this.props.recipe.recipeId+'?_method=delete'}>
            <div>
               
                <h3>Are you sure you want to delete this recipe ?</h3>

                <input type="submit" name="Confirm" value="Confirm" onClick="redirect()"/>
               
                <button><a href={"/recipes/"} className= "recipe-href" onClick="redirect()">Cancel</a></button>
          
            </div>

            </form>

            </DefaultView>
        )
    }
}

module.exports = Home