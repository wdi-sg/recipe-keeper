var React = require('react');

class Home extends React.Component {
  render() {
    const recipes = this.props.recipes.map((recipe,index)=>
    {
        const link = '/recipes/'+ (index+1)
        return <li><a href={link}>{recipe.title}</a></li>
    })
    return (
      <html>
        <body>
          <div>
            <h1>My Recipes</h1>
            <ul>{recipes}</ul>
            <a href="/recipes/new">Add new recipe</a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;