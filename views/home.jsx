
var React = require('react');
class Home extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Welcome to the recipe club</h1>
            <p><a href="/recipes/new"> Click here to enter</a></p>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;
