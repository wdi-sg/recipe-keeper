var React = require ('react');

class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                    <link href="https://fonts.googleapis.com/css?family=Hind" rel="stylesheet"/>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                    <title> recipe keeper </title>
                </head>
                <body>
                    <div className = "container-fluid">
                        <div className = "row banner">
                            <div className = "col-sm-12 banner-txt">
                                    <h1> recipe-keeper </h1>
                            </div>
                        </div>

                        <div className = "row">
                            <div className = "col-sm-12 nav-bar">
                                <ul>
                                    <li><a href="/recipes/">all recipes</a></li>
                                    <li><a href="/recipes/new"> add new recipe</a></li>
                                </ul>
                            </div>
                        </div>
                            {this.props.children}
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Default;