var React = require('react');
class New extends React.Component {
  render() {
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
        <body>
        <div className="container">
          <div className="row justify-content-center">
            <h1>Create a new recipe</h1>
          </div>
            <div className="row justify-content-center">
              <form method="POST" action="/recipes">
                  <div className="row justify-content-center">
                    Title:
                    <input type="text" name="title"></input>
                  </div>
                  <div className="row justify-content-center">
                    Ingredients:
                    <input type="text" name="ingredients"></input>
                  </div>
                  <div className="row justify-content-center">
                    Instructions:
                    <input type="text" name="instructions"></input>
                  </div>
                  <div className = "row justify-content-center">
                    <input type="submit" value="submit"></input>
                  </div>
                </form>
              </div>
            <div className="row justify-content-center">
              <a href="/recipes">Back to Index</a>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = New;