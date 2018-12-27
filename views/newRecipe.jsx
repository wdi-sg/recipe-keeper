var React = require('react');
var MainTemplate = require('./mainTemplate');

class NewRecipe extends React.Component {
    render() {

        return (
            <MainTemplate title="New Recipe">
            <script type="text/javascript" src="/script.js"/>
            <form action="/recipes/new" method="POST">
                <h3>Add New Recipe</h3>
                
                <h4>Recipe Name</h4>
                <input type="text" name="name" placeholder="e.g. Laksa" className="eightyWidth"/><br/>
                
                <h4>Image Link</h4> 
                <input type="text" name="img" placeholder="Image URL e.g. https://media.chefdehome.com/740/0/0/laksa-soup/laksa-soup-chefdehome-3.jpg" className="eightyWidth"/><br/> 
                
                <h4 id="ingredients">Ingredients Needed</h4> 
                <div className="ingredientList">
                <input type="text" name="ingredients" placeholder="Ingredient" className="eightyWidth "/><div className="twentyWidth plusButton">+</div>
                </div>

                <h4 id="instructions">Instructions</h4> 
                <div className="instructionList">
                <textarea type="text" name="instructions" placeholder="Instructions e.g. 1. Get your fishing rod." className="eightyWidth "></textarea><div className="twentyWidth plusButton">+</div>
                </div>

                <input id="submitButton" type="submit"/>
            </form>
            </MainTemplate>
        );
    }
}


module.exports = NewRecipe;

