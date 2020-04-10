var React = require('react');

class SingleRecipe extends React.Component {
  render() {
    let formUrl = "/recipes/"+this.props.id+"/edit";
    let deleteUrl = "/recipes/"+this.props.id;
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        </head>
        <body>
          <div class="container text-center">
            <h1> #{ this.props.id } {this.props.title}</h1>
            <div class="row">
              <div class="col-sm-6 offset-sm-3 mb-3">
                <h2 for="ingredients">Recipe Ingredients: </h2>
                {this.props.ingredients}
              </div>
              <div class="col-sm-6 offset-sm-3 mb-3">
                <h2 for="instructions">Recipe Instructions: </h2>
                {this.props.instructions}
              </div>
            </div>
            <div class="row">
              <div class="col-6 text-right">
                <a href={formUrl} class="btn btn-primary">Edit</a>
              </div>
              <div class="col-6 text-left">
                <a href={deleteUrl} class="btn btn-secondary">Delete</a>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = SingleRecipe;