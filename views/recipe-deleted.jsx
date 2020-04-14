
var React = require('react');

class DeletedRecipe extends React.Component {
    render() {



        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                </head>
                <body style={{ backgroundColor: "lightblue" }}>
                    <div className="container mw-50 w-50">
                        <br/>
                        {/* <h1 className="text-center font-italic"><u><strong>Deleted Recipe</strong></u></h1> */}
                        <div className="alert alert-success" role="alert">
                            Recipe deleted successfully.
                        </div>
                        <div className="text-center">
                            <br />
                            <a href="/recipes" className="btn btn-primary w-50">Recipe List</a>
                            <br /><br />
                            <a href="/" className="btn btn-primary w-50">Home</a>

                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = DeletedRecipe;