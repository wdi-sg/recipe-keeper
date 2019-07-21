
var React = require('react');

class Form extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="/formstyle.css"></link>
        </head>
        <body>
          <div>
            <h1>Enter Details of New Recipe</h1>
            <form method="POST" action="/recipes">
                <div class="form-group">
                    <label for="inputID">ID</label>
                    <input type="number" name="id" class="form-control" id="inputID"  defaultValue={this.props.arrayLength} />
                </div>

                <div class="form-group">
                    <label for="inputTitle">Title</label>
                    <input type="text" name="title" class="form-control" id="inputTitle" />
                </div>

                <div class="form-group">
                    <label for="inputIngredients">Ingredients</label>
                    <input type="text" name="ingredients" class="form-control" id="inputIngredients" />
                </div>

                <div class="form-group">
                    <label for="inputInstructions">Instructions</label>
                    <textarea class="form-control" name="instructions" id="inputInstructions" rows="3"></textarea>
                </div>


                <div class="form-group">
                    <label for="inputImg">Image URL</label>
                    <input type="text" name="img" class="form-control" id="inputImg" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>

            </form>
          </div>

          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Form;