var React = require('react');

class recipePage extends React.Component {
  render() {

    let editurl = "/recipes/" + this.props.id + "/edit";
    let deleteurl = "/recipes/" + this.props.id + "/delete";

    return (
      <html>
      <head>
        <title>Recipes</title>
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="/style.css"/>
        </head>

        <header>
        <nav>
            <ul id="nav-container">
                <li className="item"><a href="/recipes">Home</a></li>
                <li className="item"><a href="/recipes/new">New</a></li>
                <li className="item"><a href="null">Types</a></li>
                <div id="bar"></div>
            </ul>
        </nav>
            <a href="/recipes"><img id="header-img" src="/header.png"/></a>
            <br/>
            <h1>#{this.props.num}</h1>
            <h2>{this.props.name}</h2>
        </header>

        <body>
            <img src={this.props.img}/>
            <p>Ingredients: {this.props.ingredients}</p>
            <p>Instructions: {this.props.instructions}</p>

            <form action={editurl} method="GET">
                <input type="submit" value="Edit Info"/>
            </form>

            <form action={deleteurl} method="GET">
                <input type="submit" value="Delete Recipe"/>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = recipePage;