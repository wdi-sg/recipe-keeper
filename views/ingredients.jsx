var React = require('react');

class Ingredients extends React.Component{
    render(){
        var url ="/recipe"
        var urlRecipe = "/recipe/"+this.props.recipe.id;
        return(
            <html>
            <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css?family=Fascinate&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" type="text/css" href="/style2.css"/>
            </head>
                <body>
                    <div className="container">
                        <div className="containertop col-12">
                            <h1>Recipe</h1>
                        </div>
                        <div className="row">
                            <div className="containermid1 col-4">
                                <img src={this.props.recipe.img}/>
                                <h2>{this.props.recipe.name}</h2>
                            </div>
                            <div className="containermid2 col-8">
                                <div className="data">
                                    <h3>Ingredients</h3>
                                    <p>{this.props.recipe.ingredients}</p>
                                    <h3>Instructions</h3>
                                    <p>{this.props.recipe.instructions}</p>
                                </div>
                            </div>
                        </div>
                        <div className=" containerbtm row">
                            <div className="col-6">
                                <a href={urlRecipe}>Back</a>
                            </div>
                            <div className="col-6">
                                <a href={url}>Home</a>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Ingredients;