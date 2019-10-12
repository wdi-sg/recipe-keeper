var React = require('react');

class Home extends React.Component {
  render() {
      let allRecipe = this.props.recipe.map(item =>{
          return(
                
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-text"><strong>Ingredients: </strong> {item.ingredients}</p>
        <a href={"/"+ item.name} className="btn btn-primary">See Recipe</a>
      </div>
    </div>
  
           
          )
      })
      let half = Math.ceil(allRecipe.length / 2);
      let leftSide = allRecipe.slice(0, half)
      let rightSide = allRecipe.slice(half, allRecipe.length)
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
       <div className="row">
         <div className="col-6">
         {leftSide}
         </div>
         <div className="col-6">
         {rightSide}
         </div>
       </div>
         
      
         </div>

         
       </body>
      </html>
    );
  }
}

module.exports = Home;