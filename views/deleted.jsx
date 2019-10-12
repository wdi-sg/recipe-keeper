var React = require('react');

class Deleted extends React.Component {
  render() {
   
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
       <body>
           <h1>Recipe Deleted</h1>
           
        <button><a href="/home">Back To Home</a></button>
        
       </body>
      </html>
    );
  }
}

module.exports = Deleted;