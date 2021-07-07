var React = require('react');
var Navbar = require('./components/navbar.jsx');


class New extends React.Component {
  render() {
    var url = "/recipes/"+ "?_method=POST";
    // var id = parseInt(this.props.pokey.id);


    return (
      <html>
        <head>
        <link href="https://fonts.googleapis.com/css?family=Didact+Gothic|Satisfy&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="/main.css"/>
        </head>
        <body>
            <h1>New Recipe</h1>
            <Navbar/>
            <div className="wrapper_new">
                <form action={url} method="POST">
                    <input type="hidden" defaultValue={this.props.num} name="id"/>
                    <p>Title: </p><input type="text" className="input-field" name="title"/>
                    <p>Ingredients: </p><textarea rows="4" cols="50" name="ingredients"/>
                    <p>Instructions: </p><textarea rows="4" cols="50" name="instructions"/>
                    <p>Image URL: </p><input type="text" className="input-field" name="img"/>
                    <p><input type="submit" value="Submit"/></p>
                </form>
            </div>
        </body>
        </html>
    );
  }
}

module.exports = New;