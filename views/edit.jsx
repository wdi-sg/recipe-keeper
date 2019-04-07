var React = require('react');

class Edit extends React.Component {
    render() {


        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </head>
                <body>
                    <h1>Edit recipe</h1>
                    <form method="POST" action={`/recipes/${this.props.uniqueId}?_method=PUT`}>
                        Title <input type="text" name="title" value={this.props.title}/><br/>
                        Ingredients <input type="text" name="ingredients" value={this.props.ingredients}/><br/>
                        Instructions <input type="text" name="instructions" value={this.props.instructions}/><br/>
                        <input className="btn btn-warning"  type="submit" value="Submit"/><br/>
                    </form>
                    <a className="btn btn-primary" href={`/recipes/${this.props.uniqueId}`}>Cancel</a>

                </body>
            </html>
        );
    }
}

module.exports = Edit;