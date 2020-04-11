var React = require('react');


class DisplayAll extends React.Component {
  render() {

    var list = this.props.allRecipes.map(recipe => {
      let htmlString = `recipes/${recipe.id}`
      return <a href={htmlString} className="list-group-item list-group-item-action">{recipe.name} -    Recipe {recipe.id}</a>
    })
    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        </head>
        <body>
          <h1 className="px-3">Recipe</h1>
          
          <form className="px-2" action = {`/recipes/new`} method="GET">
          <button type="submit" className="btn btn-primary m-2">Add New Recipe</button>
          </form>

          <form className="px-2" action = {`/ingredients`} method="GET">
          <button type="submit" className="btn btn-primary m-2">Ingredients Menu</button>
          </form>

          <div className="list-group w-50 px-2">
            {list}
          </div>
        </body>
      </html>
    )

  }
}

module.exports = DisplayAll