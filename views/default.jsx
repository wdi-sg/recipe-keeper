var React = require ('react');

class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Hind" rel="stylesheet"/>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                </head>
                <body>
                    <h1> recipe-keeper </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default;