var React = require('react');
var MainTemplate = require('./mainTemplate');

class EachRecipe extends React.Component {
    render() {
        var id = this.props.id;
        var recipeName = this.props.recipeName;
        var description = this.props.description;
        var img = this.props.imgLink;

        if (typeof this.props.ingredientList.length !== "string") {
            var ingredientList = this.props.ingredientList.map(eachIngredient => {
                return <li>{eachIngredient}</li>;
            }) 
        } else {
            var ingredientList = this.props.ingredientList;
        }

        if (typeof this.props.instructionList.length !== "string") {
            var instructionList = this.props.instructionList.map(eachInstruction => {
                return <li>{eachInstruction}</li>;
            }) 
        } else {
            var instructionList = this.props.instructionList;
        }

        return (
            <MainTemplate title={recipeName}> 
            <img src={img}/>
            <div className="recipeDetails">
                <h3>{recipeName}</h3>

                <h5 className="title">Description</h5>
                <h4>{description}</h4>

                <h5 className="title">Ingredients</h5>
                <h4><ul>
                   {ingredientList}
                </ul></h4>

                <h5 className="title">Instructions</h5>
                <h4><ol>
                    {instructionList}
                </ol></h4>
            </div>
                
        
        </MainTemplate>
        )
    }
}

module.exports = EachRecipe;