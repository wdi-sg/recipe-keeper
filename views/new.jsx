const React = require('react');

class New extends React.Component {
  render() {
    return(
      <html>
        <body>
          <h1>New</h1>
          <form action="/recipes" method="POST">
            <p>Title:</p>
            <input type="text" name="title"/><br/><br/>
            <p>Ingredients:</p> 
            <input type="text" name="ingredients"/><br/><br/>
            <p>Instructions:</p> 
            <input type="text" name="instructions"/><br/><br/>
            <input type="submit" value="Create Recipe"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = New;