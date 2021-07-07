var React = require('react');
var MainTemplate = require('./mainTemplate');

class AllRecipes extends React.Component {
    render() {
        var allRecipesArr = this.props.recipes;

        var eachRecipe = allRecipesArr.map(oneRecipe => {
            return (<a href={"/recipes/" + oneRecipe.id}><div className="eachRecipe">
                        <img src={oneRecipe.imgLink} className="eachRecipeImg" />
                        <div className="eachRecipeDescription"><h5>{oneRecipe.recipeName}</h5><h6>{oneRecipe.description}</h6>
                        </div>

                    </div></a>)
        })
        
        return (
            <MainTemplate title="All Recipes">
            <div className="allRecipes">
               {eachRecipe}                 
            </div>
            </MainTemplate>
        )
    }
}

module.exports = AllRecipes;