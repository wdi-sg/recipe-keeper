var React = require('react');
var MainTemplate = require('./mainTemplate');

class EditRecipe extends React.Component {
    render() {

        var id = "/recipes/" + this.props.id;
        var recipeName = this.props.recipeName;
        var description = this.props.description;
        var img = this.props.imgLink;

        var ingredientList = this.props.ingredientList.map(eachIngredient => {
            return (<div className="ingredient"><input type="text" name="ingredients" placeholder="Ingredient" className="eightyWidth" value={eachIngredient}/><div className="twentyWidth plusButton ingredient">+</div></div>);
        }) 

        var instructionList = this.props.instructionList.map(eachInstruction => {
            return (<div className="instruction"><textarea type="text" name="instructions" placeholder="Instructions e.g. 1. Get your fishing rod." className="eightyWidth" value={eachInstruction}></textarea><div className="twentyWidth plusButton instruction">+</div></div>);
        }) 
        
        return (
            <MainTemplate title="New Recipe">
            <script type="text/javascript" src="/script2.js"/>
            <form action={id} method="POST">
                <h3>Edit Recipe</h3>
                
                <h4>Recipe Name</h4>
                <input type="text" name="name" placeholder="e.g. Laksa" className="eightyWidth" value={recipeName}/><br/>

                <h4>Recipe Description</h4>
                <input type="text" name="description" placeholder="e.g. A whiff of Italy" className="eightyWidth" value={description}/><br/>
                
                <h4>Image Link</h4> 
                <input type="text" name="img" placeholder="Image URL e.g. https://media.chefdehome.com/740/0/0/laksa-soup/laksa-soup-chefdehome-3.jpg" className="eightyWidth" value={img}/><br/> 
                
                <h4 id="ingredients">Ingredients Needed</h4> 
                <div className="ingredientList">
                    {ingredientList}
                </div>

                <h4 id="instructions">Instructions</h4> 
                <div className="instructionList">
                    {instructionList}
                </div>

                <input id="submitButton" type="submit"/>
            </form>
            </MainTemplate>
        );
    }
}


module.exports = EditRecipe;

