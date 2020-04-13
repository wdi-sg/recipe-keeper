var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Welcome! Please enter what recipe that you would like to add?</h1>
            </div>
            <div>
              <form method="POST" action="/recipes">
            <input type = "text" name="title" placeholder="recipe name"></input>
            <input type = "text" name="ingredients" placeholder="ingredients"></input>
            <input type = "text" name="instructions" placeholder="instructions"></input>
            <input type="submit" value="Create this recipe!"></input>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;