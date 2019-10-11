var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <html>
       <body>
           <h1>Recipe Successfully Added</h1>
          <p><a href="/new">Add Another?</a></p>
          <p><a href="/home">Home</a></p>
       </body>
      </html>
    );
  }
}

module.exports = Home;