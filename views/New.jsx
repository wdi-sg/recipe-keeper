var React = require('react');
class New extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Add New Recipe</h1>
            <form method="POST" action="/recipes">
            Recipe No.: <input type="text" name="id"/><br />
            Title: <input type="text" name="title"/><br />
            Ingredients: <input type="text" name="ingredients"/><br />
            Instructions: <input type="text" name="instructions"/><br />
            <input type="submit" value="Submit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = New;