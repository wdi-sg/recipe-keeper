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

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/recipes">🥕 Cookery</a>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                             <li class="nav-item">
                                <a class="nav-link" href="/recipes/new">Submit<span class="sr-only">(current)</span></a>
                             </li>
                        </ul>
                    </div>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                    </button>

                </nav>

                <div class="m-lg-5">
                    {this.props.children}
                </div>

            </body>
        </html>
    );
  }
}

module.exports = Layout;