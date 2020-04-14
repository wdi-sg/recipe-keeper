
var React = require('react');
class New extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <form method="POST" action="/recipes/new">
              id:
              <input type="text" name="title"></input>
              Ingredients:
              <input type="text" name="ingredients"></input>
              Instructions:
              <input type="text" name="instructions"></input>

              <input type="submit" value="Submit"></input>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = New;
