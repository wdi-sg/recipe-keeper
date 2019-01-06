var React = require('react');
class Recipes extends React.Component {

  render() {
    let recipes = this.props.recipes.map( (recipe, index) => { return (
                <a href={"/recipes/" + recipe.id} style={{textDecoration: "none", color: "grey"}}>
                    <h2>Recipe #{recipe.id}</h2>
                    <h2>Title: {recipe.title}</h2>
                    <h2>Ingredients: {recipe.ingredients}</h2>
                    <h2>Instructions: {recipe.instructions}</h2> <br/>
                </a>
        );
    });

    return (
    <html>
    <head>
    <link rel="stylesheet" type="text/css" href="/style.css"/>
    </head>
    <body>
      <div>
        <h1>Recipes</h1>
        {recipes}
            <button><a href="/recipes/new" style={{textDecoration: "none", color: "grey"}}>Create a new recipe</a></button>



      </div>
      </body>
      </html>
    );
  }
}
module.exports = Recipes;


