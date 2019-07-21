var React = require('react');

class Delete extends React.Component {
  render() {
    console.log("ahahhhhhhh");
    console.log(this.props.id);
    console.log("I want to know");
    let url = "/recipes/" + this.props.id + "?_method=DELETE";
    console.log(url);
    return (
      <html>
        <head>
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
            <h2>Are you sure you want to delete this recipe?</h2>
            <form method="POST" action= {url}>
                <p> Title</p>
                <input name="title" value ={this.props.recipe.title}/>
                <p>Ingredients</p>
                <input name="ingredient" value ={this.props.recipe.ingredient} />
                <p>Instruction</p>
                <input name="intruction " value ={this.props.recipe.instruction}/>
               
                <input type="submit" value = "Delete"/>
            </form>
          </div>
          <footer> © 2019 Recipes-Keeper GA All rights reserved.</footer>
        </body>
      </html>
    );
  }
}

module.exports = Delete;