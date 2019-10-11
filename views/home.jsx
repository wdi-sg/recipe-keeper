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
       <body>
           <h1>Recipe Home Page</h1>
          <p> <a href="/new">Add A New Recipe</a></p>
        <h3>All Recipes: </h3>
          <ul>
              {allRecipe}
          </ul>
       </body>
      </html>
    );
  }
}

module.exports = Home;