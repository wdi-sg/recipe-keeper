var React = require('react');

class Form extends React.Component {
  render() {
    console.log("new")
    return (
      <html>
        <body>
        <header>
            <h1> RECIPES-KEEPER</h1>
              <nav>
                <ul>
                  <li><a href="./">All recipes</a></li>
                  <li><a href="#">Ingredients</a></li>
                  <li><a href="#">Search recipes</a></li>
                </ul>
              </nav>
          </header>
          <div>
            <h1>Create a new recipe!</h1>
            <form method="POST" action={'/recipes'}>
                <p> Title</p>
                <input name="title" />
                <p> Image</p>
                <input name="img" />
                
                <p>Ingredients</p>
                <input name="ingredient" />
                <p>Instruction</p>
                <input name="instruction" />
               
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