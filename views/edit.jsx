
var React = require('react');

class Edit extends React.Component {
    render() {



        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                </head>
                <body style={{ backgroundColor: "lightblue" }}>
                    <div className="container mw-50 w-50">
                        <h1 className="text-center font-italic"><u><strong>Edit Recipe</strong></u></h1>

                        <form className="w-100 text-center" method="POST" action="/edit-recipe">
                            <input name="id" value={this.props.id} type="hidden" ></input>    
                            <div className="form-group text-left">
                                <label htmlFor="title" className="font-weight-bold">Title:</label>
                                <textarea className="form-control" rows="1" name="title" value={this.props.title}></textarea>
                            </div>

                            <div className="form-group text-left">
                                <label htmlFor="ingredients" className="font-weight-bold">Ingredients:</label>
                                <textarea className="form-control" rows="3" name="ingredients" value={this.props.ingredients}></textarea>
                            </div>
                            <div className="form-group text-left">
                                <label htmlFor="instructions" className="font-weight-bold">Instructions:</label>
                                <textarea className="form-control" rows="3" name="instructions" value={this.props.instructions}></textarea>
                            </div>
                            <button type="submit" className="btn btn-secondary  w-50">Save Changes</button>

                        </form>
                        <div className="text-center">
                            <br />
                            <a href="/view-recipes" className="btn btn-primary w-50">Recipe List</a>
                            <br /><br />
                            <a href="/" className="btn btn-primary w-50">Home</a>

                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Edit;