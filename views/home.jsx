var React = require('react');
var DefaultLayout = require('./default');
console.log("Start rendering ");


class Home extends React.Component {
    render() {
        console.log(this.props);

    let sampleRecipe = this.props.recipes.map(recipe => { return (
                <div className="recipe">
                    Recipe ID: <h3>{recipe.id}</h3>
                    Recipe Title: <h3>{recipe.title}</h3>
                    Recipe Ingredients: <h4>{recipe.ingredients}</h4>
                    Recipe Instructions: <h4>{recipe.instructions}</h4>
                </div>
                );
    });

        return(
            <DefaultLayout title="All Recipes" recipeLength = {this.props.recipe}>
            <div>
                <h1>Recipe Keeper </h1>
                {sampleRecipe}
            </div>
            </DefaultLayout>
            );
    }
}

module.exports = Home;
