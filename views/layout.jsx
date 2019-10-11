const React = require('react');

class Layout extends React.Component {
    render() {
        return (
           <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                    <title>Recipes App</title>
                </head>
                <body>
                    <div className="container">
                        <div className="jumbotron">
                            {this.props.children}
                        </div>
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Layout;