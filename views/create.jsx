var React = require("react");

class Create extends React.Component {
  render() {
    return (
      <html>
        <body>
        <div>
        <h1>New Recipe</h1>
        <form action="/recipes" method="POST">
        <p>Id :</p><input type="number" name="id" required/><br/>
        <p>Title :</p><input type= "text" name="title" required/><br/>
        <p>Ingredients :</p><input type="text" name="ingredients" required/><br/>
        <p>Instructions :</p><input type="text" name="instructions" required/><br/>
        <br/><input type="submit" value="Submit"/>
        </form>
        </div>
        </body>
      </html>
    )
  }
}

module.exports = Create;