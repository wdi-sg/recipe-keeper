var React = require('react');

class Show extends React.Component{
    render(){
        let urlIndividualRecipe = "/recipe/"+this.props.recipe.id;
        var mapRecipeData = this.props.recipe.map(recipe=>{
            return(
                <div>
                    <a href={urlIndividualRecipe}>
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