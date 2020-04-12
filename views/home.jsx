var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Hello everyone! welcome to hweemeng's cookbook!</h1>
            <a href="http://localhost:3000/recipes/create">Click here to create a new recipe</a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;