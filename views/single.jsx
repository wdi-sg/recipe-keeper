var React = require('react');

class Single extends React.Component {
    render() {


        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </head>
                <body>
                    <h1>{this.props.uniqueId} {this.props.title}</h1>
                    <br/>
                    <b>Ingredients</b><br/>
                    <p>{this.props.ingredients}</p><br/>
                    <b>Instructions</b><br/>
                    <p>{this.props.instructions}</p><br/>
                    <a className="btn btn-primary" href="/recipes">Index</a>
                    <a className="btn btn-warning" href={`/recipes/${this.props.uniqueId}/edit`}>Edit</a>
                    <a className="btn btn-danger" href={`/recipes/${this.props.uniqueId}/delete`}>Delete</a>
                </body>
            </html>
        );
    }
}

module.exports = Single;