var React = require('react');
var Recipe = require('./recipe.jsx');

class Recipes extends React.Component {
  render() {

    console.log("RECIPE LIST");
    console.log(this.props.recipes);

    const recipes = this.props.recipes.map((recipe) => {
      return <Recipe recipeData={recipe} />
    });

    return (
      <html>
        <link rel="stylesheet" type="text/css" href="/recipe.css" />
        <body>
          <div class="wrapper-top">
            <h1>List Of RECIPE</h1>
          </div>
          <div class="wrapper">
            <div class="text normal">Create new Recipe&nbsp;&nbsp;<a href={"/recipes/new"}><img class="icon" src="/images/new.jpeg" /></a></div>
          </div>
          <div class="wrapper">
            <div class="table">
              <div class="row header">
                <div class="cell">Recipe Name</div>
                <div class="cell">Detail</div>
                <div class="cell">Edit </div>
                <div class="cell">Delete</div>
              </div>

              {recipes}

            </div>
          </div>

        </body>
      </html>
    )
  }
}

module.exports = Recipes;