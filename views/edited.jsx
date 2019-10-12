var React = require('react');

class Edited extends React.Component {
  render() {
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
       <body>
           <h1>Recipe Edited</h1>
           <li>{this.props.name}</li>
           <li>{this.props.ingredients}</li>
           <li>{this.props.instructions}</li>

           <button><a href="/home">Back to Home</a></button>
           
       </body>
      </html>
    );
  }
}

module.exports = Edited;