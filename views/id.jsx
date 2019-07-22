var React = require('react');
var Navbar = require('./components/navbar.jsx');

class ID extends React.Component {
  render() {
    // var url = "/recipes/"+this.props.pokeId + "?_method=PUT";
    // var id = parseInt(this.props.pokey.id);

    //  var ingredientsList = this.props.recipe.ingredients.map(recipe =>{
    //     return <li>{recipe}</li>
    // })

    return (
      <html>
        <head>
        <link href="https://fonts.googleapis.com/css?family=Didact+Gothic|Satisfy&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="/main.css"/>
        <link rel="stylesheet" type="text/css" href="/id.css"/>
        </head>
        <body>
            <h1>Recipe</h1>
            <Navbar/>
            <div className="wrapper">
                <div className={"photo"}>
                    <img src={this.props.recipe.img}/>
                </div>
                <div className="right_wrapper">
                    <h2>{this.props.recipe.title}</h2>
                    <h4>Ingredients:</h4>
                    <ul className="ingredients">{this.props.recipe.ingredients}</ul>
                    <br/>
                    <h4>Instructions:</h4>
                    <p>{this.props.recipe.instructions}</p>
                    <div className="commands">
                        <p><a href={`/recipes/${this.props.recipe.id}/edit`}>Edit Recipe</a> | <a href={`/recipes/${this.props.recipe.id}/delete`}>Delete Recipe</a> </p>
                    </div>
                </div>

            </div>

        </body>
      </html>
    );
  }
}

module.exports = ID;