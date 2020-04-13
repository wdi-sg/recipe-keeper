var React = require('react');

class NewRecipe extends React.Component {
  render() {
    return (
      <html>
        <head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link></head>
        <body>
          <div>
            <h1>Add a New Recipe</h1>
            <form method="POST" action="/recipes" className = "container">
                <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" name="title"></input>
              </div>
              <div className="form-group">
                <label htmlFor="ingredients">Ingredients</label>
                <input type="text" className="form-control" id="ingredients" name="ingredients"></input>
              </div>
              <div className="form-group">
                <label htmlFor="instructions">Instructions</label>
                <input type="text" className="form-control" id="instructions" name="instructions"></input>
              </div>
                <button type="submit" value="Submit" className="btn btn-primary">Add Recipe</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = NewRecipe;