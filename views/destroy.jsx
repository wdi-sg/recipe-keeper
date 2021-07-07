const React = require('react');
const Nav = require('./nav.jsx');

class Destroy extends React.Component {
  render() {
    return(
      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
          <link rel="stylesheet" href="/style.css"></link>
        </head>
        <body>
          <Nav/>
          <h1>Destroy</h1>
          <p>Recipe has been destroyed.</p><br/>
          <div class="card">
            <div class="card-body">
              <p>Title: {this.props.recipe.title}</p>
              <p>Ingredients: {this.props.recipe.ingredients}</p>
              <p>Instructions: {this.props.recipe.instructions}</p>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Destroy;