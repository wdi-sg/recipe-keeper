
var React = require('react');

class Create extends React.Component {
  render() {
    console.log("getting form for new recipe");
    return (
      <html>
        <body>
          <div>
            <h1>Enter new recipe</h1>
            <form action="/recipes" method="POST">
                <p>Title</p>
                <input type="text" name="title"/><br/>
                <p>Ingredients</p>
                <input type="text" name="ingredients"/><br/>
                <p>instructions</p>
                <input type="text" name="instructions"/><br/>
                <input type="submit" value="Submit"/>
             </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Create;