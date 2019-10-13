var React = require("react");
const Navbar = require("./navbar.jsx");
const Script = require("./script")
class Related extends React.Component {
  render() {
   let recipeArr = this.props.recipeArr;
   let relatedRecipes = this.props.relatedRecipe

   let list = relatedRecipes.map(item => {
       return(
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
       )
   })

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
         <div className="container text-center mt-4">
         <h1 className="display-4">List of recipes that use {this.props.ingredient} </h1>
        <ul className="mt-3">
            {list}
        </ul>
         </div>
        
          <Script/>
        </body>
      </html>
    );
  }
}

module.exports = Related;
