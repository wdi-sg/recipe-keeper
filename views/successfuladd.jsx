var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
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