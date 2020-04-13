var React = require('react');

class EditRecipe extends React.Component {
  render() {
    const title = this.props.title;
    const ingredients = this.props.ingredients;
    const instructions = this.props.instructions;
    const id = this.props.id;
    const putLink = "/recipes/" + id + "?_method=put";
    const deleteLink = "/recipes/" + id + "?_method=delete";
    return (
      <html>
        <head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link></head>
        <body>
          <div>
            <h1>Current Recipe</h1>
            <h2>{title}</h2>
            <h2>Ingredients: {ingredients}</h2>
            <h3>instructions: {instructions}</h3>
          </div>
          <div>
              <h1>Delete Entire Recipe</h1>
                <form method="POST" action={deleteLink} className = "container">
                    <button type="submit" className="btn btn-primary">Delete This Recipe</button>
                </form>
          </div>
          <div>
            <h1>Edit Recipe</h1>
            <form method="POST" action= {putLink}  className = "container">
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
                <button type="submit" value="Submit" className="btn btn-primary">Edit Recipe</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = EditRecipe;