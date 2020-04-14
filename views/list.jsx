var React = require('react');
class List extends React.Component {
  render() {
    console.log("////");
    console.log("Render is working !!");
    console.log("////");
    console.log(this.props.cookbook);

    let recipeName = this.props.cookbook[0];
    console.log(recipeName);

    const showrecipeAll = this.props.cookbook.map(recipeItem =>{
        console.log("This item is being mapped " + recipeItem.id);
        console.log(recipeItem);
        console.log(recipeItem.ingredients);

        const getIngredients = recipeItem.ingredients.map(ingredient =>{
            console.log("this ingredient is being mapped " + ingredient);

        })
        return (
                    <li>{recipeItem.title}
                    <li>ID : {recipeItem.id}</li>
                    <li>{getIngredients}</li>
                    </li>
               );
  })

    return (
      <html>
        <body>
          <div>
            <h1>This page is displaying Id number : </h1>
            <ul>{showrecipeAll}</ul>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = List;