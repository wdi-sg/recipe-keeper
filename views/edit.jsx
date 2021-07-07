var React = require('react');

class Edit extends React.Component{
    render(){
        var url = "/recipe/"+this.props.recipe.id + "?_method=PUT";
        var urlHome = "/recipe";
        return(
            <html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="/style3.css"/>
            </head>
                <body>
                    <div className="container">
                        <div className="containertop">
                            <h1>EDIT PAGE</h1>
                            <a href={urlHome}>Main page</a>
                        </div>
                        <div className="row">
                            <div className="containerleft col-6">
                                <img src={this.props.recipe.img}/>
                                        <p>id</p>
                                        <input name="id" readOnly = "readOnly" defaultValue={this.props.recipe.id}/>
                                        <p>Recipe image</p>
                                        <input name="img" readOnly = "readOnly" defaultValue={this.props.recipe.img}/>
                                        <p>Type</p>
                                        <input name="type" readOnly="readOnly" defaultValue={this.props.recipe.type}/>
                            </div>
                            <div className="containerright col-6">
                                <form method="POST" action={url}>
                                    <p>Recipe name:</p>
                                    <input name="name" defaultValue={this.props.recipe.name}/>
                                    <br />
                                    <p>Recipe origin:</p>
                                    <input name="origin" defaultValue={this.props.recipe.origin}/>
                                    <br />
                                    <p>Calories counter:</p>
                                    <input name="calories" defaultValue={this.props.recipe.calories}/>
                                    <br />
                                    <p>Ingredients:</p>
                                    <input name="ingredients" defaultValue={this.props.recipe.ingredients}/>
                                    <br />
                                    <p>Instructions:</p>
                                    <input name="instructions" defaultValue={this.props.recipe.instructions}/>
                                    <br />
                                    <br />
                                    <button type="submit">Edit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Edit;