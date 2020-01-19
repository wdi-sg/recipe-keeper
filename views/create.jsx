var React = require('react');

class Create extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Add a new recipe</h1>
            <form method="POST" action="/recipes">
                Title: <input type="text" name="title" placeholder="Burger"/><br/>
                Ingredients: <input type="text" name="ingredients" placeholder="Bacons and patty"/><br/>
                Instructions: <input type="text" name="instructions" placeholder="Cook patty and bacon, stack them in between 2 sesame buns."/><br/>
                <input type="submit" value="Submit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Create;