var React = require('react');

class Individual extends React.Component{
    render(){

        let urlEdit = "/recipe/"+this.props.recipe.id+"/edit";
        let urlDelete = "/recipe/"+this.props.recipe.id+"/delete";
        let url = "/recipe";
        let urlIngredients = "/recipe/"+this.props.recipe.id+"/ingredients";
        let urlInstructions = "/recipe/"+this.props.recipe.id+"/instructions";
        return(
            <html>
            <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css?family=Fascinate&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
            </head>
                <body>
                    <div className="container">
                        <div className="containertop col-12">
                            <h1>Recipe</h1>
                        </div>
                        <div className="containermid col-12">
                                <img src={this.props.recipe.img}/>
                                <h2>{this.props.recipe.name}</h2>
                                <div className="data">
                                    <h3>Dish origin: {this.props.recipe.origin}</h3>
                                    <h3>Dish calories: {this.props.recipe.calories}</h3>
                                    <a href={urlIngredients}>
                                        <h3>Ingredients</h3>
                                    </a>
                                    <p>Click ingredients to see full ingredients and instructions list</p>
                                </div>
                        </div>
                        <div className=" containerbtm row">
                            <div className = "col-4">
                            <a href={urlEdit}>Edit recipe</a>
                            </div>
                            <br />
                            <div className = "col-4">
                            <a href={url}>Return home</a>
                            </div>
                            <br />
                            <div className = "col-4">
                            <a href={urlDelete}>Delete recipe</a>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Individual;