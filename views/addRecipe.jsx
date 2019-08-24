var React = require('react');
var DefaultLayout = require('./default');
console.log("Start rendering ");


class AddRecipe extends React.Component {

    
    render() {
        console.log(this.props);
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
            <DefaultLayout title="Add RECIPE" recipeLength={this.props.recipes.length}>
                <form method="POST" action="/recipes/">
                Recipe ID: <input type="text" name="id" value={this.props.recipes.length+1}/><br /><br />
                Recipe Name: <input type="text" name="title"/><br /><br />
                Ingredients Required: <input type="text" name="ingredients"/><br /><br />
                Instructions: <input type="" name="instructions"/><br /><br />
                <input type="submit" value="Add Recipe"/>
                </form>
            </DefaultLayout>
            );
    }
}

module.exports = AddRecipe;
