var React = require('react');
class EditRecipe extends React.Component {
  render() {

    const Navbar = require("./header.jsx");
    const Footer = require("./footer.jsx");


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
            <h1 className="col-md-auto display-4">You are editing Recipe: {this.props.currentRecipe.title}</h1>
            <form method='POST' action={'/recipes/'+this.props.userinputID+"?_method=put"}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="title" placeholder={this.props.currentRecipe.title} required/>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Image</label>
                <input type="url" class="form-control" id="exampleFormControlInput1" name="img" placeholder="Enter Source Code here" required/>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Ingredients</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" name="ingredients" placeholder={this.props.currentRecipe.ingredients} rows="3" required></textarea>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Instructions</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" name="instructions" placeholder={this.props.currentRecipe.instructions} rows="3" required></textarea>
              </div>
              <button type="submit" class="btn btn-dark">Edit This Recipe!</button>
            </form>
          </div>
        </main>


        <Footer/>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = EditRecipe;