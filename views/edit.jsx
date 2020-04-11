var React = require('react');
class Edit extends React.Component {
  render() {
    let currentId = this.props.currentId;
    let putLink = "/recipes/" + currentId + "?_method=put";
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
        <body>
          <div class="container">
          <div class="row justify-content-center">
            <h1>Edit Recipe</h1>
          </div>
          <div>
            <form method="POST" action={putLink}>
              <div class="row justify-content-center">
                Title:
                <input type="text" name="title" value={this.props.currentRecipe.title}></input>
                </div>
                <div class="row justify-content-center">
                  Ingredients:
                  <input type="text" name="ingredients" value={this.props.currentRecipe.ingredients}></input>
                </div>
                <div class="row justify-content-center">
                  Instructions:
                  <input type="text" name="instructions" value={this.props.currentRecipe.instructions}></input>
                </div>
                <div class="row justify-content-center">
                  <input type="submit" value="submit"></input>
                </div>
              </form>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;