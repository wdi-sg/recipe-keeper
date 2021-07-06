var React = require('react');
const Navbar = require('./navbar.jsx');

class Home extends React.Component {
    render() {
        const recipes = this.props.recipes.map( (recipe, index) => {
            let recipeLink = "http://localhost:3000/recipes/" + (index+1);
            return (
                <div class="card card border-0 bg-transparent">
                  <div class="card-body">
                    <a class="btn btn-outline-dark btn-lg btn-block text-wrap" href={recipeLink}>{recipe.title}</a>
                  </div>
                </div>
                );
        })
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <body class="d-flex h-100 flex-column">
                  <header>
                    <Navbar/>
                  </header>
                <main role="main" class="flex-shrink-0">
                    <div class="jumbotron">
                      <div class="container">
                        <h1 class="display-4">Discover New Recipes</h1>
                        <p class="lead">Find and share everyday cooking inspiration</p>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="card-columns">
                                    {recipes}
                                </div>
                            </div>
                            <div class="col-md-4">
                                <img src="/images/Cooking-Mama-Photo.png" class="img-fluid" alt="Responsive image"/>
                            </div>
                        </div>
                      </div>
                    </div>
                </main>
                <footer class="footer mt-auto">
                  <div class="container">
                    <span class="text-muted">Copyright &copy; 2019</span>
                  </div>
                </footer>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </body>
            </html>
        );
    }
}

module.exports = Home;