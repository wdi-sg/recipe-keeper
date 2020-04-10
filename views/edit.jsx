var React = require('react');

class FormAddNew extends React.Component {
  render() {
    let formUrl = "/recipes/"+this.props.id+"?_method=put";
    let backUrl = "/recipes/"+this.props.id;
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        </head>
        <body>
          <div class="container text-center">
            <h1>
              <small class="text-muted">editing recipe for:</small> <br></br>{this.props.title}
            </h1>
            <span class="alert error-message"></span>
            <form action={formUrl} method="POST">
            <div class="row">
              <div class="col-sm-6 offset-sm-3 mb-3">
                <label for="title">Recipe Title: </label>
                <input class="form-control text-center" id="title" type="text" name="title" value={this.props.title} />
              </div>
              <div class="col-sm-6 offset-sm-3 mb-3">
                <label for="id">Recipe ID: </label>
                <input class="form-control text-center" id="id" type="text" name="id" value={this.props.id}/>
              </div>
              <div class="col-sm-6 offset-sm-3 mb-3">
                <label for="ingredients">Recipe Ingredients: </label>
                <textarea class="form-control text-center" id="ingredients" rows="3" name="ingredients" value={this.props.ingredients}></textarea>
              </div>
              <div class="col-sm-6 offset-sm-3 mb-3">
                <label for="id">Recipe Instructions: </label>
                <textarea class="form-control text-center" rows="3" name="ingredients" name="instructions" value={this.props.instructions}></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-6 text-right">
                <input class="btn btn-primary" type="submit"/>
              </div>
              <div class="col-6 text-left">
                <a href={backUrl} class="btn btn-secondary">Cancel</a>
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