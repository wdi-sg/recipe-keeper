var React = require('react');

class DefaultView extends React.Component {

    render() {
        
        return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <base href="/"></base>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"  /> 
                    <link rel="stylesheet" href="styles.css" type='text/css' />
                    <title>Recipe Keeper</title>
                </head>

            <body>

            <div className="content">
                <div className="topnav" id="myTopnav">
                    <a href="/" className="active">Home</a>
                    <a href="recipes">Browse Recipes</a>
                    <a href="recipes/new">New Recipe</a>
                    <a href="#about">About</a>
                    <a href="javascript:void(0);" className="icon" onClick="myTopBar()">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
                <div className="children">
                    { this.props.children}
                </div>
            </div>
            
            <script src="main.js"></script>
               
            </body>
            </html>
        )
    }
}

module.exports = DefaultView