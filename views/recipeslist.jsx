const React = require("react");

class Recipelist extends React.Component {
  render() {

      const recipeList = this.props.allRecipes

      const recipeNames = recipeList.map( (recipe, index) => {
            return (
              <li key={index}>
                <a href={`recipes/${index}`}>{recipe.title}</a>
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
          <link rel="stylesheet" href="/style.css"/>

        </head>

        <body>

          <div className="container-fluid">
            <div className="row">
              <div className="black col-md-6 left-col">
                <div className="contents">

                <h1>Welcome to Chelsea's Recipes</h1>
              <a href="/recipes/new">
                <button className="btn btn-secondary">Create A Recipe</button>
              </a>
              </div>
                </div>

              <div className="col-md-6 right-col">

                <div className="contents">
                <ul>{recipeNames}</ul>
                </div>

              </div>
              
            </div>
          </div>


        </body>
      </html>
    );
  }
}

module.exports = Recipelist;
