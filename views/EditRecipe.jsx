var React = require('react');
import DefaultView from './DefaultView';

class EditRecipe extends React.Component {

    render() {
      
        return (
            <DefaultView>
            <div id="NewRecipe" >
                <form method="POST" action={'/recipes/'+this.props.recipe.recipeId+'?_method=PUT'}>
                    <div className = "input">
                        <label htmlFor="name">Recipe Name:  </label>
                        <input id="name" name="name" type="text" value={this.props.recipe.name}/>
                    </div>
                    <div className = "input">
                        <label id="summary-label" htmlFor="summary">Summary: </label>
                        <textarea id="summary" name="summary" rows="10" cols="33" value={this.props.recipe.summary}></textarea>
                    </div>

                    <div className = "input">
                        <label htmlFor="ingredients">Ingredient(s)  :   </label>                    
                        <select name="ingredients" multiple size="8">
                        <option value="">--Please choose ingredient(s)--</option>
                        { 
                            this.props.ingredients.map(ingredient => {
                                var selected = this.props.recipe.ingredients.find(ing => parseInt(ingredient.id) === parseInt(ing));
                                if (selected) {
                                    return (<option id="ing" value={ingredient.id} key={ingredient.id} selected>{ingredient.name}</option>)
                                } else {
                                    return (<option id="ing" value={ingredient.id} key={ingredient.id}>{ingredient.name}</option>)
                                }
                                
                            }) 
                        }
                        </select>
                    </div>
                    <div className = "input">
                        <label htmlFor="instructions">Instructions : </label>                    
                        <textarea id="instructions" name="instructions" rows="10" cols="33" value={this.props.recipe.instructions}></textarea>
                    </div>
                    <div className = "inputButton">
                        <input className = "inputButton" type="submit" name="submit" value="Save" onClick="redirect()" />
                    </div>

                </form>
            </div>
            </DefaultView>
        )
    }
}

module.exports = EditRecipe
