var React = require('react');

class Form extends React.Component {
  render() {
    console.log("new")
    return (
      <html>
        <head>
              <link href="https://fonts.googleapis.com/css?family=Dosis|Work+Sans&display=swap" rel="stylesheet"/>

              <link rel="stylesheet" type="text/css" href="/style1.css"/>
          </head>
        <body>
        <header>
            <h1> RECIPES-KEEPER</h1>
              <nav>
                <ul>
                  <li><a href="/recipes/">All recipes</a></li>
                  <li><a href="#">Ingredients</a></li>
                  <li><a href="#">Search recipes</a></li>
                </ul>
              </nav>
          </header>
          <div>
            <h1>Create a new recipe!</h1>
            <form method="POST" action={'/recipes'}>
                <p> Title</p>
                <input name="title" autocomplete = "off" />
                <p> Image</p>
                <input name="img" />
                
                <p>Ingredients</p>
                <input name="ingredient" autocomplete = "off" />
                <p>Instructions</p>
                <input name="instruction"  autocomplete = "off"/>
               
                <input type="submit"/>
            </form>
          </div>
          <footer> © 2019 Recipes-Keeper GA All rights reserved.</footer>
        </body>
      </html>
    );
  }
}

module.exports = Form;