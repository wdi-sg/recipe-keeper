var React = require('react');
var Header = require('./header');
const recipejson = require('../recipe.json');
let recipeLen = recipejson.recipes.length;
recipeLen++

class NewRecipe extends React.Component {
    render() {
    return(
       <div>
          <h2> Let's create something yummy!</h2>
            <form method="POST" action="/recipes/new">
            	<div>
            		<h3> Recipe Name</h3>
            		<input type="text" className="newForm" name="id" id="recipename" value = {recipeLen} />
            		<input type="text" className="newForm" name="title" id="recipename" required/>
                    <h3> Ingredients</h3>
                    <input type="text" className="newForm" name="text"  />
                    <h3> Instructions</h3>
                    <input type="text" className="newForm" name="text" />

                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
    }
}

module.exports = NewRecipe;