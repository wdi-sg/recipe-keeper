var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>List Of All The Recipes</h1>
            <a type="button" href="/newrecipe">Click Me for YUM YUM!</a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;