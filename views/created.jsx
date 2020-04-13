var React = require('react');

class Created extends React.Component {
  render() {
    return (
        <html className="h-100">
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css"/>
        <title>fastfood</title>
        </head>
        <body className="h-100">
        <header>
        <nav className="navbar fixed-top justify-content-center border-bottom" style={{"color": "#ED4233"}}>
        <span className="navbar-brand mb-0 h1">fastfood</span>
        </nav>
        </header>

        <div className="row h-100 align-items-center">
        <div className="col text-center">
        <div className="col">
        <h1>Your recipe has been saved!</h1>
        </div>
        <div className="col my-4">
        <form className="d-inline-block mx-2" method="GET" action="/recipes/">
        <input type="submit" value="Home"/>
        </form>
        <form className="d-inline-block mx-2" method="GET" action={`/recipes/${this.props.id}`}>
        <input type="submit" value="View Recipe"/>
        </form>
        </div>
        </div>
        </div>

        <footer>
        <nav className="navbar fixed-bottom navbar-dark bg-dark justify-content-end w-100">
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

module.exports = Created;