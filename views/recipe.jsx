var React = require('react');

class Recipe extends React.Component {
  render() {
    const recipe = this.props.recipe;
    const id = this.props.id;

    const ingredients = recipe.ingredients.map(ingredient => {
        return <li>{ingredient}</li>;
    })

    return (
        <html className="h-100">
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css"/>
        <title>fastfood</title>
        </head>
        <body className="h-100">
        <header>
        <nav className="navbar justify-content-center border-bottom" style={{"color": "#ED4233"}}>
        <span className="navbar-brand mb-0 h1">fastfood</span>
        </nav>
        </header>

        <div className="container">
        <div className="row mb-5">
        <div className="col">
        <div className="col text-center my-5">
        <h3 className="my-4">{recipe.title}</h3>
        <div className="d-inline-block" style={{"background": `url(${recipe.img})`, "backgroundPosition": "center", "backgroundSize": "cover", "width": "500px", "height": "300px"}}></div>
        </div>
        <div className="col border mt-5 p-4">
        <h4 className="my-4">Time: {recipe.prepTime} minutes</h4>
        <hr/>
        <h4 className="my-4">Ingredients</h4>
        <ul>
        {ingredients}
        </ul>
        <hr/>
        <h4 className="my-4">Preparation</h4>
        <p>{recipe.preparation}</p>
        </div>
        </div>
        </div>
        </div>

        <div className="col text-center my-5">
        <form className="d-inline-block mx-2" method="GET" action="/recipes/">
        <input type="submit" value="Home"/>
        </form>
        <form className="d-inline-block mx-2" method="GET" action={`/recipes/${id}/edit`}>
        <input type="submit" value="Edit"/>
        </form>
        <form className="d-inline-block mx-2" method="GET" action={`/recipes/${id}/confirm`}>
        <input type="submit" value="Delete"/>
        </form>
        </div>

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

module.exports = Recipe;