var React = require('react');

class Home extends React.Component{
    render(){
        console.log("Printing out this.props: "+this.props);
        console.log("Printing out this.props.respondKey: "+this.props.respondKey);
        console.log("Creating a loop now");

        let allRecipesArr = this.props.respondKey.map(thisRecipe=>{
            let id = parseInt(thisRecipe.id);
            let title = thisRecipe.title;
            let ingredients = thisRecipe.ingredients;
            let instructions = thisRecipe.instructions;
                return(
                    <div>
                    <h3>Recipe ID: </h3>
                        <p>{id}</p>
                        <h4>Recipe Title: </h4>
                        <p>{title}</p>
                        <h4>Ingredients: </h4>
                        <p>{ingredients}</p>
                        <h4>Instructions: </h4>
                        <p>{instructions}</p>
                    </div>
                )
        });
        return(
            <div>
                {allRecipesArr};
            </div>
        )
    }
}
module.exports = Home;