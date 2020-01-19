var React = require('react');
class New extends React.Component {
  render() {
    return (
      <html>
      <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
          <title>🥗Add a Plant Based Recipe🥗</title>
          <meta charset="utf-8" />
      </head>

        <body>
          <div>
            <h1 style={{color: 'green', width: "30%", textAlign: "center", margin: "80px auto 5px auto"}}>Add a New Recipe</h1>

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