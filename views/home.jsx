var React = require("react");
const Navbar = require("./navbar.jsx");
const Script = require("./script")
class Home extends React.Component {
  render() {
    let recipeArr = this.props.recipe
    let allRecipe = recipeArr.map(item => {
      return (
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-text">
              <strong>Ingredients: </strong> {item.ingredients}
            </p>
            <a href={"/" + (recipeArr.indexOf(item) + 1) } className="btn btn-primary">
              See Recipe
            </a>
          </div>
        </div>
      );
    });
    let half = Math.ceil(allRecipe.length / 2);
    let leftSide = allRecipe.slice(0, half);
    let rightSide = allRecipe.slice(half, allRecipe.length);
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          ></link>

         
        </head>
        <body>
         <Navbar/>
          <div className="container pt-5">
            <h1 className="text-center display-2 border-bottom">Find a Recipe</h1>
            <div className="container pt-4">
           
            <div className="row">
              <div className="col">{leftSide}</div>
              <div className="col">{rightSide}</div>
            </div>
            </div>
           
          </div>
          <Script/>
        </body>
      </html>
    );
  }
}

module.exports = Home;
