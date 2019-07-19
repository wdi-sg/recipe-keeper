var React = require('react');

class Show extends React.Component{
    render(){
        var mapRecipeData = this.props.recipe.map(recipe=>{
            let urlIndividualRecipe = "/recipe/"+recipe.id;
            return(
                <div>
                    <a href={urlIndividualRecipe}>
                        <p>Dish Id : {recipe.id}</p>
                        <p>Name of dish: {recipe.title}</p>
                        <p>Ingredients: {recipe.ingredients}</p>
                    </a>
                </div>
            );
        });

        return(
            <html>
                <body>
                    <h1>Recipe</h1>
                    <p>{mapRecipeData}</p>
                </body>
            </html>
        );
    };
};

module.exports = Show;