var React = require('react');

class Home extends React.Component {
  render() {
    const recipe = this.props.recipes.map((recipe,index)=>
    {
        const link = '/recipes/'+ (index+1)
        return <li><a href={link}>{recipe.title}</a></li>
    })
    return (
      <html>
        <body>
          <div>
            <h1>Current Recipe</h1>
            <ul>{recipe}</ul>
            <a href="/recipes/new">Add new recipes</a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;