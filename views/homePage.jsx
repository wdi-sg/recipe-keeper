var React = require('react');

class homePage extends React.Component {
  render() {


    return (
      <html>
        <body>
          <div>
            <h1>Recipe Database</h1>
            <a type="button" href="/recipes">Click here for the entire database!</a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = homePage;