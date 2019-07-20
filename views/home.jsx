var React = require('react');
const RecipeInfo = require('./components/recipeInfo.jsx');
class Home extends React.Component {
  render() {
    console.log(this.props);
    let listOfRecipes = this.props.recipe.map(recipe => {
      return <RecipeInfo display={recipe}/>
      });
    return (
      <html lang="en">
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
         

        </head>
        <body>

          <header>
            <h1> RECIPES-KEEPER</h1>
              <nav>
                <ul>
                  <li><a href="./">All recipes</a></li>
                  <li><a href="#">Ingredients</a></li>
                  <li><a href="#">Search recipes</a></li>
                </ul>
              </nav>
          </header>

          <div>
            
            {listOfRecipes}
          </div>
          <footer> © 2019 Recipes-Keeper GA All rights reserved.</footer>
        </body>
      </html>
    );
  };

}
module.exports = Home;