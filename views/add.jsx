var React = require('react');

class Form extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
             <form method="POST" action="/recipes">
                  <p>Recipe Number</p>
                  <input type="text" name="recipe number"/>
                  <p>Recipe</p>
                  <input type="text" name="name"/>
                  <p>Ingredients</p>
                  <input type="text" name="ingredients"/>
                  <p>Instructions</p>
                  <input type="text" name="instructions"/>
                  <button type="submit">Submit</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Form;