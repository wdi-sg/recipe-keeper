var React = require('react');
class CurrentRecipe extends React.Component {
  render() {

    const Navbar = require("./header.jsx")


    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <link rel="stylesheet" href="/style.css"></link>
        </head>
        <body>
        <Navbar/>

        <main>
          <div>
            <h1 className="col-md-auto display-4">{ this.props.currentRecipe.title}</h1>
            <img src={this.props.currentRecipe.img} class="img-fluid" alt="Responsive image"/>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Ingredients</th>
                  <th scope="col">Instructions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{ this.props.currentRecipe.ingredients}</td>
                  <td>{ this.props.currentRecipe.instructions}</td>
                </tr>
              </tbody>
            </table>
                <form method='GET' action={'/recipes/'+this.props.userinputID+"/edit"}>
                    <button type="submit" class="btn btn-dark editButton" data-toggle="tooltip" data-placement="right" title="This will permanently delete the recipe from the database">Edit Recipe</button>
                </form>
                <a class="btn btn-dark" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Delete Recipe
                </a>
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                        <p>Are you sure you want to delete this recipe? This will permanently remove the recipe from the database.</p>
                        <form method='POST' action={'/recipes/'+this.props.userinputID+"?_method=delete"}>
                            <button type="submit" class="btn btn-dark" data-toggle="tooltip" data-placement="right" title="This will permanently delete the recipe from the database">Yes delete permanently</button>
                        </form>
                  </div>
                </div>
          </div>
        </main>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = CurrentRecipe;