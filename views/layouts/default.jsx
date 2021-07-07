var React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return(
            <html>
            <head>
            <title>Recipe Keeper</title>
            <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            </head>
            <body>
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS633o_3ErAb_01RqShoREbCxKZDDgaRxzkB0-dClgOFaxft4Ln" width="30" height="30" alt=""/> Recipe Keeper
            </a>
            </nav>
            <div className="container-fluid">
            {this.props.children}
            </div>

            <footer class="page-footer font-small cyan darken-3">

            <div class="container">

            <div class="row">
            <div class="col-md-12 py-5">
            <div class="mb-5 flex-center">

            <a class="fb-ic">
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a class="tw-ic">
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a class="ins-ic">
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            </div>
            </div>
            </div>
            </div>
            <div class="footer-copyright text-center py-3">© 2018 Copyright:
            <a href="/recipes"> RecipeKeeper.com</a>
            </div>
            </footer>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
            </script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
            </script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
            </script>
            </body>
            </html>
            )
    }
}

module.exports = DefaultLayout;