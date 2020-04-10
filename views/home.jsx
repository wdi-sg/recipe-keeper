
var React = require('react');


class AddRecipe extends React.Component {
    render() {



        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                </head>
                <body>
                    <div className="container mw-75 w-75">
                        <h1 className="text-center font-italic"><u><strong>Recipe Keeper</strong></u></h1>
                        <div className="row mt-5">
                            <div className="col-sm-6">
                                <div className="card text-center text-white bg-dark mb-3">
                                    <div className="card-body">
                                    <img className="card-img-top" src="images/recipes.jpg" alt="Card image cap"></img>
                                        <h5 className="card-title">View Recipes</h5>
                                
                                        <a href="#" className="btn btn-primary btn-block">View</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card text-center text-white bg-dark mb-3">
                                    <div className="card-body">
                                    <img className="card-img-top" src="images/add.jpg" alt="Card image cap"></img>
                                        <h5 className="card-title">Add Recipes</h5>
                                        
                                        <a href="/add-recipe" className="btn btn-primary btn-block">Add</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = AddRecipe;