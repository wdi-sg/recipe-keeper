var React = require('react');
var DefaultLayout = require('./default');
//var style = require('../public/style.css')
console.log("Start rendering HOme ");


class Home extends React.Component {
    render() {
        console.log(this.props);

        
        let sampleRecipe = this.props.recipes.map(recipe => { return (
                
                    <div className="card">
                        
                        <div className="card-body">
                            <h4 style={{color: "red", display:"none"}}>Recipe ID: {recipe.id}</h4>
                            <h3 className="card-title" style={{textTransform: "capitalize"}} >{recipe.title}</h3>
                            <h5 className="card-text">Ingredients: {recipe.ingredients}</h5>
                            <h5 className="card-text">Instructions: {recipe.instructions}</h5>  
                            <a href={'/recipes/'+recipe.id}><button>View Recipe</button></a>     
                            <div class="card-footer">
                                <small class="text-muted">Created on: {recipe["date created"]}</small>
                            </div>              
                        </div>
                    </div>
                
                );
    });

        return(
            <DefaultLayout title="All Recipes" recipeLength = {this.props.recipe}>
            <h1>Recipe Keeper </h1>
            <div className="card-deck" >
                
                {sampleRecipe}
            </div>
            </DefaultLayout>
            );
    }
}

module.exports = Home;
