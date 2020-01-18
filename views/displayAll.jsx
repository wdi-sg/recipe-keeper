var React = require('react');


class DisplayAll extends React.Component {
  render() {

    var list = this.props.allRecipes.map(recipe => {
      let htmlString = `recipes/${recipe.id}`
      return <a href={htmlString} className="list-group-item list-group-item-action">{recipe.name}</a>
    })
    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        </head>
        <body>
          <h1 class="p-3">Recipe</h1>
          <div class="list-group w-50 p-3">
            {list}
          </div>
        </body>
      </html>
    )

  }
}

module.exports = DisplayAll