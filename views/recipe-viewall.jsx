var React = require("react");

class AllRecipe extends React.Component {
  render() {
    let recipeArr = this.props.recipes;
    let existingRecipeArr = recipeArr.filter((element) => {
      return !element.delete;
    });

    existingRecipeArr.sort((a, b) => {
      let nameA = a.title.toUpperCase();
      let nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    let existingRecipeArrHtml = existingRecipeArr.map((element) => {
      return (
        <li>
          <a href={`/recipes/${element.id}`}>{element.title}</a>
        </li>
      );
    });

    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
        </head>
        <body>
          <div className="container">
            <div className="row">
              <div className="col mt-5">
                <h2>
                  <u>ALL RECIPES</u>
                </h2>
                <br></br>

                <ul>{existingRecipeArrHtml}</ul>

                <form method="GET" action="/">
                  <button type="submit" className="btn btn-primary">
                    Return To Home Page
                  </button>
                </form>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = AllRecipe;
