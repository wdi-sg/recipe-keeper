
var React = require ('react');

class allRecipes extends React.Component {
    render(){
        const eachRecipe = this.props.all.map ((recipe)=>{
            return <li>
                        <h5> Title: </h5><p>{recipe.title} </p>
                        <h5> Ingredients: </h5>
                        <p> {recipe.ingredients} </p>
                        <h5> Instructions: </h5>
                        <p> {recipe.instructions} </p>
                   </li>
        });
        return(
                <ol>{eachRecipe}</ol>
        )
    }
}

module.exports = allRecipes;