var React = require('react');

class Createpage extends React.Component {
  render() {
    return (
      <html>
      <head>
        <title>Create your own recipe here!</title>
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="/style.css"/>
        </head>
        <header>
        <nav>
            <ul id="nav-container">
                <li className="item"><a href="/recipes">Home</a></li>
                <li className="item"><a href="/recipes/featured">Featured</a></li>
                <li className="item"><a href="/recipes/new">New</a></li>
                <div id="bar"></div>
            </ul>
        </nav>
        <img id="header-img" src="/header.png"/>
        </header>
        <body>
          <div className = "create-recipe">
            <h1>Create a new Recipe</h1>
                <form action="/recipes "method="POST" className = "form-container">
                    <h2>ID</h2>
                    <input type="number" name="id" defaultValue="ID"/>

                    <h2>Num</h2>
                    <input type="number" name="num" defaultValue="Number"/>

                    <h2>Name</h2>
                    <input type="text" name="name" defaultValue="Name"/>

                    <h2>Ingredients</h2>
                    <input type="text" name="ingredients" defaultValue="Ingredients"/>

                    <h2>Instructions</h2>
                    <input type="text" name="instructions" defaultValue="Instructions"/>

                    <h2>Picture of recipe</h2>
                    <input type="text" name="img" defaultValue="Img.jpeg"/>
                    <br/>
                    <input type="submit"/>
                </form>
              </div>
        </body>
      </html>
    );
  }
}

module.exports = Createpage;