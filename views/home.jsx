var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Recipes</h1>
             <form action="/recipes" method="POST">

                <p>Title: </p> <input type="text" name="title"/><br/>
                <p>Ingredients: </p> <input type="text" name="ingredients"/><br/>
                <p>Instructions: </p> <input type="text" name="instructions"/><br/>
                <input type="submit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;