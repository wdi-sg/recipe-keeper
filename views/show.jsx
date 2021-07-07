const React = require('react');
const Nav = require('./nav.jsx');

class Show extends React.Component {
  render() {
    return(
      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
          <link rel="stylesheet" href="/style.css"></link>
        </head>
        <body>
          <Nav/>
          <h1>Show</h1>
          <div class="card">
            <div class="card-body">
              <p>Title: {this.props.recipe.title}</p>
              <p>Ingredients: {this.props.recipe.ingredients}</p>
              <p>Instructions: {this.props.recipe.instructions}</p>
            </div>
          </div>
          <form action={"/recipes/" + this.props.id + "?_method=DELETE"} method="POST">
            <input type="submit" value="Delete This Recipe"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Show;