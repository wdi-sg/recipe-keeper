var React = require('react');

class Layout extends React.Component {

  render() {


    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>

                <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navBarSearch">
                    <a class="navbar-brand" href="/recipes">🥕 Cookery</a>

                    <a class="nav-link text-dark" href="/recipes/new">Submit <span class="sr-only">(current)</span></a>
                </nav>


                <div class="ml-lg-5 mr-lg-5">
                    {this.props.children}
                </div>

            </body>
        </html>
    );
  }
}

module.exports = Layout;