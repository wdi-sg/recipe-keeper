var React = require('react');
class AllRecipes extends React.Component {
  render() {

    const Navbar = require("./header.jsx")

    var counter = [];

    var everything = this.props.recipes.map(x=>{
        var title = x.title;
        var ingredients = x.ingredients;
        var instructions = x.instructions;
        counter.push(x);
        let number = counter.indexOf(x) + 1;

        return  <tr>
                  <td><a href={'/recipes/'+number} class="stretched-link">{title}</a></td>
                  <td>{ingredients}</td>
                  <td>{instructions}</td>
                </tr>

    })


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
          <h1 className="col-md-auto display-4">This Is All The Recipes You Created!</h1>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Ingredients</th>
                  <th scope="col">Instructions</th>
                </tr>
              </thead>
              <tbody>
                    {everything}
              </tbody>
            </table>
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

module.exports = AllRecipes;