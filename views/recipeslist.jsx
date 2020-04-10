const React = require("react");

class Recipelist extends React.Component {
  render() {

      const recipeList = this.props.allRecipes

      const recipeNames = recipeList.map( recipe => {
            return (
              <li style={{ listStyleType: "none" }} key={recipe.id}>
                <a href={`recipes/${recipe.id}`}>{recipe.id}. {recipe.title}</a>
              </li>
            );
      } )

    return (
      <html lang="en" dir="ltr">
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
        </head>

        <body style={{ textAlign: "center" }}>
          <div className="jumbotron">
            <h1>Welcome to Chelsea's Recipes</h1>
            <a href="/recipes/new">
              <button className="btn btn-primary">Create A Recipe</button>
            </a>
          </div>
          <ul>{recipeNames}</ul>
        </body>
      </html>
    );
  }
}

module.exports = Recipelist;
