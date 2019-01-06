var React = require('react');
var MainTemplate = require('./mainTemplate');

class EachRecipe extends React.Component {
    render() {
        var id = this.props.id;
        var recipeName = this.props.recipeName;
        var description = this.props.description;
        var img = this.props.imgLink;

        var ingredientList = this.props.ingredientList.map(eachIngredient => {
            return <li>{eachIngredient}</li>;
        }) 

        var instructionList = this.props.instructionList.map(eachInstruction => {
            return <li>{eachInstruction}</li>;
        }) 

        return (
            <MainTemplate title={recipeName}> 
            <img src={img}/>
            <div className="recipeDetails">
                <h3>{recipeName} <a className="buttonLink" href={"/recipes/" + id + "/edit"}>Edit this Recipe</a></h3>

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