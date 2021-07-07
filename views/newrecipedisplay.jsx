
var React = require('react');

class Newrecipedisplay extends React.Component {
  render() {
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        </head>
        <body>
          <div>
            <div class="container text-center">
            <h1>Food Food Food!</h1>
            <img class="float-left" src="https://media1.tenor.com/images/9f5ff2129ac255bfeea3d6ae81023ad2/tenor.gif?itemid=11225590"/>
                    <h1>Your new recipe is {this.props.title}</h1>
                    <p>Recipe Title: {this.props.ingredients}</p>
                    <p>Required Ingredients: {this.props.ingredients}</p>
                    <p>Instructions: {this.props.instructions}</p>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Newrecipedisplay;