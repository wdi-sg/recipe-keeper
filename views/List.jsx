var React = require('react');

class List extends React.Component {
  render() {
    const recipesArray = this.props.recipes;
    console.log(recipesArray);
    const recipesList = recipesArray.map( recipe => {
      let recipeUrl = '/recipes/'+recipe.id;
        console.log(recipeUrl);
        return <li><a href = {recipeUrl}>{recipe.title}</a></li>
    });
    return (
    <html>
        <head>
            <title>Recipes List</title>
        </head>
        <body>
          <div>
            <h1>Welcome to Recipe Keeper</h1>
            <h2>Here are our Recipes:</h2>
            <ul>
            {recipesList}
            </ul>
          </div>
        </body>
    </html>
    );
  }
}

module.exports = List;