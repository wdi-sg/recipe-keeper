var React = require('react');
class New extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <form method="POST" action="/recipes">
                <div>
                  Title:
                  <input type="text" name="title"></input>
                </div>
                <div>
                  Ingredients:
                  <input type="text" name="ingredients"></input>
                </div>
                <div>
                  Instructions:
                  <input type="text" name="instructions"></input>
                </div>
                <div>
                  <input type="submit" value="submit"></input>
                </div>
              </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = New;