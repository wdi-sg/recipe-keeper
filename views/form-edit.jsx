var React = require('react');

class FormEdit extends React.Component {
  render() {
    const options = this.props.ingredients.sort().map(ingredient => {
      return <option>{ingredient}</option>;
    })

    const recipe = this.props.recipe;

    return (
      <html>
      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css"/>
      <title>fastfood</title>
      </head>
      <body>
      <header>
      <nav className="navbar justify-content-center border-bottom" style={{"color": "#ED4233"}}>
      <span className="navbar-brand mb-0 h1">fastfood</span>
      </nav>
      </header>

      <main className="container border my-5 p-5">
      <h2><u>Edit Recipe</u></h2>
      <form method="POST" action={`/recipes/${this.props.id}?_method=put`}>
      <div>
      <h3>Image</h3>
      <div className="input-group my-4 w-25">
      <div className="custom-file">
      <input type="file" className="custom-file-input" id="input-image" name="img"/>
      <label className="custom-file-label" htmlFor="input-image">Choose file</label>
      </div>
      </div>
      <h3>Title</h3>
      <input className="my-4 w-25" type="text" name="title" value={recipe.title}/>
      <h3>Preparation Time</h3>
      <div className="input-group my-4 w-25">
      <select className="custom-select" id="prepTime" name="prepTime" value={recipe.prepTime}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
      </select>
      <div className="input-group-append">
      <label className="input-group-text" htmlFor="prepTime">minutes</label>
      </div>
      </div>
      <h3>Ingredients</h3>
      <select className="selectpicker my-4 w-25 w-25" multiple data-live-search="true" name="ingredients" value={recipe.ingredients}>
      {options}
      </select>
      <h3>Preparation</h3>
      <input className="my-4 w-25" type="textarea" name="preparation" value={recipe.preparation}/>
      <br/>
      <input className="my-4" type="submit" value="Confirm Edit"/>
      </div>
      </form>
      </main>

      <footer>
      <nav className="navbar navbar-dark bg-dark justify-content-end w-100">
      <span className="navbar-brand" style={{"fontSize": "14px"}}>© fastfood 2020</span>
      </nav>
      </footer>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
      </body>
      </html>
      );
  }
}

module.exports = FormEdit;