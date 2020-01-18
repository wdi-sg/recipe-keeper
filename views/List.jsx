var React = require('react');

class List extends React.Component {
  render() {
    const recipesArray = this.props.recipes;
    console.log(recipesArray);

    const recipesList = recipesArray.map( recipe => {
        return <div>
        <li>{recipe.title}</li>
        </div>
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