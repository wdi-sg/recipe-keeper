var React = require('react');
class FormAddNew extends React.Component {
  render() {
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        </head>
        <body>
          <div class="container text-center">
            <h1>Add new recipe</h1>
          <form action="/recipes" method="POST">
          <div class="row">
              <div class="col-sm-6 offset-sm-3 mb-3">
                <label for="title">Recipe Title: </label>
                <input class="form-control text-center" id="title" type="text" name="title" />
              </div>
              <div class="col-sm-6 offset-sm-3 mb-3">
                <label for="id">Recipe ID: </label>
                <input class="form-control text-center" id="id" type="text" name="id"/>
              </div>
              <div class="col-sm-6 offset-sm-3 mb-3">
                <label for="ingredients">Recipe Ingredients: </label>
                <textarea class="form-control text-center" id="ingredients" rows="3" name="ingredients"></textarea>
              </div>
              <div class="col-sm-6 offset-sm-3 mb-3">
                <label for="id">Recipe Instructions: </label>
                <textarea class="form-control text-center" rows="3" name="ingredients" name="instructions"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-6 text-right">
                <input class="btn btn-primary" type="submit"/>
              </div>
              <div class="col-6 text-left">
                <a href="/recipes" class="btn btn-secondary">Cancel</a>
              </div>
            </div>
          </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = FormAddNew;