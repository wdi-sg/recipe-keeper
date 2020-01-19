var React = require('react');


class DisplayIngredients extends React.Component {
  render() {

    var list = this.props.ingredients.map(element => {
      return <option>{element.name}</option>
    })

    var listOfRecipes = this.props.recipeList.map(element => {
      let htmlString = `/recipes/${element.id}`
      return <a href={htmlString} className="list-group-item list-group-item-action">{element.name} - Recipe No, {element.id}</a>
    })

    return (  
      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        </head>
        <body>
          <h1 className="p-3">Ingredients </h1>
            <form action="/ingredients/filter" method="GET">
              <div className="form-row px-3 w-75">
                <div className="px-1 form-group col-md-6">
                    <label htmlFor="choose-Ingredients">Choose Ingredient</label>
                    <select name="selectedIngredient" className="form-control mb-0 mt-3">
                      {list}
                    </select>
                    <button type="submit" className="btn btn-secondary">Filter</button>
                </div>
              </div>
            </form>

          <div class="list-group w-50 p-3">
          {listOfRecipes}
          </div>

        </body>
      </html>
    )

  }
}

module.exports = DisplayIngredients

          