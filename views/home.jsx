var React = require('react');

class NewRecipe extends React.Component {
  render() {

    return (
      <html>

        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        </head>

        <body>
        <h1>Create Recipe!</h1>
          <div>

              <form method = "POST" action = "/recipes">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Dish:</label>
                    <input name = "dish" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insert dish name"></input>
                  </div>


                  <div class="form-group">
                    <label for="exampleInputPassword1">Ingredients:</label>
                    <input name = "ingredients" type="text" class="form-control" id="exampleInputPassword1" placeholder="Insert ingredients needed"></input>
                  </div>


                  <div class="form-group">
                    <label for="exampleInputPassword1">Instructions:</label>
                    <input name = "instructions" type="text" class="form-control" id="exampleInputPassword1" placeholder="Insert instructions"></input>
                  </div>


                  <button type="submit" class="btn btn-primary">Submit</button>
              </form>


          </div>
        </body>
      </html>
    );
  }
}

module.exports = NewRecipe;