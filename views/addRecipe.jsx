var React = require('react');
var DefaultLayout = require('./default');
console.log("Start rendering ");


class AddRecipe extends React.Component {

    console.log(this.props);
    render() {
 /*      let sampleRecipe = this.props.recipes.map( recipe => { return (
        <a href={"http://localhost:3000/recipes/" + recipe.id}>
                <div className="recipe">

                    <h3>{recipe.id}</h3>
                    <h3>{recipe.title}</h3>
                    <h3>{recipe.ingredients}</h3>
                    <h3>{recipe.instructions}</h3>

                </div>
         </a>
                );
       });*/

        return(
            <DefaultLayout title="RECIPE" recipeLength = {this.props.recipe.length}>
                <form method="POST" action="/recipes/new">
                <input type="" name="id" value={this.props.recipeLength+1} style={{display: "none"}}/><br /><br />
                Recipe Name: <input type="" name="title"/><br /><br />
                Ingredients Required: <input type="" name="ingredients"/><br /><br />
                Instructions: <input type="" name="instructions"/><br /><br />
                <input type="submit" value="Add Recipe"/>
                </form>
            </DefaultLayout>
            );
    }
}

module.exports = AddRecipe;
