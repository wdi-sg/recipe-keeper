var React = require('react');

class addRecipe extends React.Component {
  render() {


    return (
      <html>
        <body>
          <div>
            <h1>Time to add new recipe!</h1>
            <form action="/recipes" method="POST">
                Enter Recipe Data Here:
                <br></br>
                <input type="text" name="title" placeholder="title"/>
                <br></br>
                <input type="text" name="ingredients" placeholder="ingredients"/>
                <br></br>
                <input type="text" name="instructions" placeholder="instructions"/>
                <br></br>
                <input type="submit" value="Submit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = addRecipe;