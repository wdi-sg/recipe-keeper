var React = require('react');
import DefaultView from './DefaultView';

class NewRecipe extends React.Component {

    render() {
      
        return (
            <DefaultView>
            <div id="NewRecipe" >
                <form method="POST" action={"/recipes"}>
                    <div className = "input">
                        <label htmlFor="name">Recipe Name:  </label>
                        <input id="name" name="name" type="text" placeholder="Please Enter the Recipe Name"/>
                    </div>
                    <div className = "input">
                        <label id="summary-label" htmlFor="summary">Summary: </label>
                        <textarea id="summary" name="summary" rows="10" cols="33"></textarea>
                    </div>

                    <div className = "input">
                        <label htmlFor="ingredients">Ingredient(s)  :   </label>                    
                        <select name="ingredients" multiple size="8">
                        <option value="">--Please choose ingredient(s)--</option>
                        { 
                            this.props.ingredients.map(ingredient => {
                                return (<option value={ingredient.id} key={ingredient.id}>{ingredient.name}</option>)
                            }) 
                        }
                        </select>
                    </div>
                    <div className = "input">
                        <label htmlFor="instructions">Instructions : </label>                    
                        <textarea id="instructions" name="instructions" rows="10" cols="33"></textarea>
                    </div>
                    <div className = "inputButton">
                        <input className = "inputButton" type="submit" name="submit" className = "submit" value="Save" onClick="redirect()" />
                    </div>

                </form>
            </div>
            </DefaultView>
        )
    }
}


module.exports = NewRecipe;