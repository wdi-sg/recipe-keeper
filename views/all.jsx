var React = require('react');

class All extends React.Component {

  render() {

    let recipe = this.props.recipes;

    let recipeList = recipe.map( recipes => {
        return (
        
          <li>
            <a href={'/recipes/' + recipes.id}>{recipes.id}.{recipes.title}</a>
          </li>
        
        );
    })


    return (
      <div>
      <h1>Recipes</h1>
      <form method="GET" action="/recipes/new">
         <input type="submit" value="add new recipe"/>
      </form>
      
      <ul>
        {recipeList}
       </ul>
      
      </div>
    );
  }
}

module.exports = All; 