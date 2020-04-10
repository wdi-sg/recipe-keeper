var React = require('react');

class index extends React.Component {
  render() {
    const recipe = this.props.recipes.map((recipe,index)=>
    {
        console.log("------------");
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

                                 <div>
            <a href="/">Home</a>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = index;