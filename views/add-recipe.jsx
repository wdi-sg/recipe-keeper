
var React = require('react');

class AddRecipe extends React.Component {
    render() {
       

        
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                </head>
                <body>
                    <div className="container mw-50 w-50">
                        <h1 className="text-center font-italic"><u><strong>Add New Recipe</strong></u></h1>

                        <form className="w-100 text-center" method="POST" action="/add-recipe">

                            <div className="form-group text-left">
                                <label htmlFor="title" className="font-weight-bold">Title:</label>
                                <textarea className="form-control" rows="1" name="title"></textarea>
                            </div>

                            <div className="form-group text-left">
                                <label htmlFor="ingredients" className="font-weight-bold">Ingredients:</label>
                                <textarea className="form-control" rows="3" name="ingredients"></textarea>
                            </div>
                            <div className="form-group text-left">
                                <label htmlFor="instructions" className="font-weight-bold">Instructions:</label>
                                <textarea className="form-control" rows="3" name="instructions"></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark  w-50">Submit</button>
                        </form>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = AddRecipe;