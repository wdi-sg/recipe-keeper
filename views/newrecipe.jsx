var React = require('react');

class Newrecipe extends React.Component {
    render() {
        return (
          <html>
            <body>
            <div>
              <h1>Recipe Keeper</h1>
                <form action="recipe" method="POST">
                    <p>Recipe Title:</p>
                      <input type="text" name="recipe title"/><br/>
                        <p>Required Ingredients:</p>
                      <input type="text" name="ingredients"/><br/>
                        <p>Instructions:</p>
                      <input type="text" name="instructions"/><br/>
                      <input type="submit" value="Submit"/>
                </form>
              </div>
            </body>
          </html>
        );
    }
}

module.exports = Newrecipe;