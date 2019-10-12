var React = require('react');

class Home extends React.Component {
  render() {
      let allRecipe = this.props.recipe.map(item =>{
          return(
              <li>
                
                  <p><a href={"/"+ item.name}>{item.name}</a> </p>
                
              </li>
          )
      })
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
       <body>
         <div className="container pt-5">
         <h1 className="text-center">Recipe Home Page</h1>
          <p> <a href="/new">Add A New Recipe</a></p>
        <h3>All Recipes: </h3>
          <ul>
              {allRecipe}
          </ul>
         </div>
         
       </body>
      </html>
    );
  }
}

module.exports = Home;