var React = require('react');
var DefaultLayout = require('./default');
//var style = require('../public/style.css')
console.log("Start rendering HOme ");


class Home extends React.Component {
    render() {
        console.log(this.props);

    let sampleRecipe = this.props.recipes.map(recipe => { return (
                <div className="card-deck" >
                    <div className="card" style={{display:"flex"}}>
                        <h4 style={{color: "red"}}>Recipe ID: {recipe.id}</h4>
                        <div className="card-body">
                            <h3 className="card-title">Title: <a href={'/recipes/'+recipe.id}>{recipe.title}</a></h3>
                            <h5 className="card-text">Ingredients: {recipe.ingredients}</h5>
                            <h5 className="card-text">Instructions: {recipe.instructions}</h5>                            
                        </div>
                    </div>
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
