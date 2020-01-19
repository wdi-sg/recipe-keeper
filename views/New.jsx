var React = require('react');
class New extends React.Component {
  render() {
    return (
      <html>
      <head>
          <title>🥗Add a Plant Based Recipe🥗</title>
          <meta charset="utf-8" />
      </head>

        <body>
          <div>
            <h1>Add a New Recipe</h1>

             <form method="POST" action='/recipes'>
                Recipe Title  <input type="text" name="title"/><br/>
                Ingredients  <textarea type="text" name="ingredients"/><br/>
                Instructions  <textarea type="text" name="instructions"/><br/>
                <input type="submit" value="Start cooking...👩🏾‍🍳"/>
            </form>

          </div>
        </body>
      </html>
    );
  }
}
module.exports = New;