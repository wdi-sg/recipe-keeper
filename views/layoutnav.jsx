var React = require('react');

class layout extends React.Component {
  render() {
return(
        <html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
            </head>
                <body>
                    <header>
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </header>
                    <div>
                        <h1 class ="display-1 text-center">RECIPE KEEPER</h1>
                    </div>
                    <div>
                        <a href = "/recipe/new" style = {{color:"white", textDecoration:"none"}}><button type="button" class="btn btn-primary btn-lg btn-block">CREATE
                         </button></a>
                    </div>
                    <div class = "container-fluid">
                    {this.props.children}
                    </div>
                </body>
        </html>
        );
    }
}

module.exports = layout;