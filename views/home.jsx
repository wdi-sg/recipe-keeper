
var React = require('react');


class Home extends React.Component {
    render() {



        return (
            <html>
                <head>
                   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                </head>
                <body style={{ backgroundColor: "lightblue" }}>
                    <div className="container w-50">
                        <h1 className="text-center font-italic"><u><strong>Recipe Keeper</strong></u></h1>
                        <div className="row mt-5 w-auto text-center">
                            <div className="col-sm-6">
                                <div className="card text-center text-white bg-dark mb-3">
                                    <div className="card-body">
                                    <img className="card-img-top" src="images/recipes.jpg" alt="Card image cap"></img>
                                        <h5 className="card-title">View Recipes</h5>
                                
                                        <a href="/recipes" className="btn btn-primary btn-block">View</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card text-center text-white bg-dark mb-3">
                                    <div className="card-body">
                                    <img className="card-img-top" src="images/new.jpg" alt="Card image cap"></img>
                                        <h5 className="card-title">Add Recipes</h5>
                                        
                                        <a href="/recipes/new" className="btn btn-primary btn-block">Add</a>
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

module.exports = Home;