var React = require('react');
class List extends React.Component {
  render() {
    console.log("////");
    console.log("Render is working !!");
    console.log("////");
    // console logs all objects
    //console.log(this.props.cookbook);

    const getRecipe = this.props.cookbook.map(recipeItem =>{
        console.log("This item is being mapped " + recipeItem.id);
        console.log(recipeItem);
        console.log(recipeItem.ingredients);

        const getIngredients = recipeItem.ingredients.map(ingredient => <li>{ingredient}</li> )
        console.log("Ingredient being cooked - " + getIngredients);
        let teachRecipe = recipeItem.instructions
        console.log(teachRecipe);
        return (
                    <li><h2>{recipeItem.title}</h2>
                    <p>Ingredients:</p><ul>{getIngredients}</ul>
                    <p>Instructions <br></br>{teachRecipe}</p>
                    </li>
               );
  })

    return (
      <html>
        <body>
          <div>
            <h1>This page is displaying Id number : </h1>
            <ul>{getRecipe}</ul>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = List;