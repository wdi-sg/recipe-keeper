var React = require('react');

class Home extends React.Component {
  render() {
      let allRecipe = this.props.recipe.map(item =>{
          return(
              <li>
                  <p>{item.name}</p>
                  <p>{item.ingredients}</p>
                  <p>{item.instructions}</p>
              </li>
          )
      })
    return (
      <html>
       <body>
           <h1>Recipe Home Page</h1>
          <p> <a href="/new">Add A New Recipe</a></p>

          <ul>
              {allRecipe}
          </ul>
       </body>
      </html>
    );
  }
}

module.exports = Home;