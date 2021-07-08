var React = require('react');

class New extends React.Component {
    render() {
        const totalRecipes = this.props.recipeKey.length;
        const newRecipe = parseInt(totalRecipes + 1);
    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css" />
        </head>
        <body>
          <h1>Add New Recipe to Our Current {totalRecipes} Recipes!</h1>
              <form method="POST" action="/recipe">
                <p>Recipe Id: </p>
                <input className="recipe-id" type="number" name="id" placeholder={newRecipe} value={newRecipe} />
                <p>Recipe Name: </p>
                <input className="recipe-name" type="text" name="name" placeholder="enter recipe name" />
                <input className="submit-btn" type="submit" value="Submit" />
              </form>
        </body>
      </html>
    );
  }
}

module.exports = New;