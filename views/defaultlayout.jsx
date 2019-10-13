var React = require('react');

class DefaultLayout extends React.Component {
    render() {

        const navStyle = {
            'background-color': '#78a9cc'
        }
        const aStyle = {
            color: 'black'
        }

        const imgStyle = {
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center'
        }


        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
                    <title>Recipe Keeper</title>
                </head>
            <body>

                <nav class="navbar navbar-light" style={navStyle} >

                    <ul class="nav justify-content-center nav-tabs">

                      <li class="nav-item">
                        <a class="nav-link ml-2" href="http://localhost:3000/recipes/" style={aStyle}>Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/recipes/new" style={aStyle}>New</a>
                      </li>
                    </ul>
            </nav>
            <div class="row">
                <div class="col-5 m-2">
                    <a href="http://localhost:3000/recipes/"><img style={imgStyle} src="/recipe-journal.jpg"/></a>
                </div>
                <div class="col-5 m-2">
                    {this.props.children}
                </div>

            </div>
        </body>
      </html>
        );
    }
}

module.exports = DefaultLayout;