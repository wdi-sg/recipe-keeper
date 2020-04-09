
var React = require('react');

class AddRecipe extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                </head>
                <body>
                    <div className="container w-75">
                        <h1 className="text-center font-italic"><u><strong>Add New Recipe</strong></u></h1>
                        <form className="w-100 d-flex-column justify-content-center">
                            <div className="form-group">
                                <label for="title" className="font-weight-bold">Recipe Title:</label>
                                <textarea className="form-control" rows="1" id="title"></textarea>
                            </div>
                            <div className="form-group">
                                <label for="instructions" className="font-weight-bold">Instructions:</label>
                                <textarea className="form-control" rows="3" id="instructions"></textarea>
                            </div>
                            <div className="form-group">
                                <label for="ingredients" className="font-weight-bold">Ingredients:</label>
                                <textarea className="form-control" rows="3" id="ingredients"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = AddRecipe;