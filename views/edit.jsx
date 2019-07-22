var React = require('react');
var Navbar = require('./components/navbar.jsx');



class Edit extends React.Component {
  render() {
    var url = "/recipes/"+this.props.recipeId + "?_method=PUT";

    return (
      <html>
        <head>
        <link href="https://fonts.googleapis.com/css?family=Didact+Gothic|Satisfy&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="/main.css"/>
        <link rel="stylesheet" type="text/css" href="/edit.css"/>


        </head>
        <body>
            <h1>Edit Recipe</h1>
            <Navbar/>
            <div className="wrapper_new">
                <div className={"photo"}>
                    <img src={this.props.food.img}/>
                </div>
                <div className="right_wrapper">
                <form action={url} method="POST">
                    <input type="hidden" name="id" className="input-field" defaultValue={this.props.food.id}/>
                    <p>Title: </p>
                    <input name="title" className="input-field" defaultValue={this.props.food.title}/>
                    <p>Ingredients:</p>
                    <textarea rows="4" cols="50" name="ingredients" defaultValue={this.props.food.ingredients}/>
                    <p>Instructions:</p>
                    <textarea rows="4" cols="50" name="instructions" defaultValue={this.props.food.instructions}/>
                    <p>Image URL:</p>
                    <textarea rows="4" cols="50" name="img" defaultValue={this.props.food.img}/>
                    <br/>
                    <input type="submit" value="submit"></input>
                </form>
                <a href={`/recipes/${this.props.food.id}`}><p>Back</p></a>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;