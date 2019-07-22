var React = require('react');
var Navbar = require('./components/navbar.jsx');

class Delete extends React.Component {
  render() {
    var url = "/recipes/"+this.props.recipeId + "?_method=DELETE";
    return (
      <html>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Didact+Gothic|Satisfy&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="/main.css"/>
        <link rel="stylesheet" type="text/css" href="/delete.css"/>

        </head>
        <body>

            <h1>Delete a Recipe</h1>
              <Navbar/>
            <div className="wrapper_new">
                <div className={"photo"}>
                    <img src={this.props.food.img}/>
                </div>
                <div className="right_wrapper">
                    <p>Delete {this.props.food.title}?</p>
                    <form action={url} method="POST">
                        <input type="submit" value="Delete"></input>
                    </form>
                    <a href={`/recipes/${this.props.food.id}`}><p>Back</p></a>
                </div>
            </div>

        </body>
      </html>
    );
  }
}

module.exports = Delete;