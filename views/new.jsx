const React = require('react');
const Nav = require('./nav.jsx');
class New extends React.Component {
  render() {
    return(
      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
          <link rel="stylesheet" href="/style.css"></link>
        </head>
        <body>
          <Nav/>
          <h1>New</h1>
          <form action="/recipes" method="POST">
          <div class="card">
            <div class="card-body">
              <p>Title:</p>
              <input type="text" name="title"/><br/><br/>
              <p>Ingredients:</p> 
              <input type="text" name="ingredients"/><br/><br/>
              <p>Instructions:</p> 
              <input type="text" name="instructions"/><br/><br/>
              <input type="submit" value="Create Recipe"/>
            </div>
          </div>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = New;