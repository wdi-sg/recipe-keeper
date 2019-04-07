var React = require('react');

class Single extends React.Component{
    render(){
        let thisRecipe = this.props;
        console.log("Printing out thisRecipe: "+thisRecipe);
            let id = parseInt(thisRecipe.id);
            let name = thisRecipe.name;
            let ingredients = thisRecipe.ingredients;
            let instructions = thisRecipe.instructions;

            return(
                <div>
                    <h3>Recipe ID: </h3>
                    <p>{id}</p>
                    <h4>Recipe Title: </h4>
                    <p>{name}</p>
                    <h4>Ingredients: </h4>
                    <p>{ingredients}</p>
                    <h4>Instructions: </h4>
                    <p>{instructions}</p>
                </div>
                )
            }
}

module.exports = Single;