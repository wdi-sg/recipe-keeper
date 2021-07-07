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
                
                <div className= "title">
                  <p> Title</p>
                  
                  <div className = "one" ><input name="title" autocomplete = "off" /></div>
                
                </div>
                <div className = "inputImg">
                  <p> Image</p>
                  <div className = "two" ><input name="img" /></div>
                
                </div>
                <div className = "inputIngre">
                  <p>Ingredients</p>
                  <div className = "three" ><input name="ingredient" autocomplete = "off" /></div>
                
                </div>
                <div className = " inputIntr">
                  <p>Instructions</p>
                  <div className = "four" ><input name="instruction"  autocomplete = "off"/></div>
               </div>
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