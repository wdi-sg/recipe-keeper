var React = require("react");

class AddRecipe extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Add a Recipe</h1>
            <form action="/recipes" method="POST">
              <input type="text" name="title" placeholder="Title" />
              <br />
              <input type="text" name="ingredients" placeholder="Ingredients" />
              <br />
              <input
                type="text"
                name="instructions"
                placeholder="Instructions"
              />
              <br />
              <button type="submit">Add Reicpe</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = AddRecipe;
