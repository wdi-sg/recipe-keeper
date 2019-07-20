var React = require('react');


class Recipe extends React.Component {
  render() {
    console.log("I hate doing this")
    console.log(this.props.id)
    let editUrl = "/recipes/" + this.props.id + "/edit";
    console.log(editUrl);
    let deleteUrl = "/recipes/" + this.props.id + "/delete";


    let items =this.props.recipe.ingredient.split(",");
    console.log(items.length);
    let ingredient = items.map(ingredient => {
      return <li> {ingredient} </li>;
    })
    console.log(this.props.recipe.instruction)
    let steps = this.props.recipe.instruction.split(".");
    console.log(steps.length);
    let instruction = steps.map((item => {
      return <li> {item} </li>;
    }))

    return (//this template is working now//
      <html lang="en">
        <head>

            <link rel="stylesheet" type="text/css" href="/style.css"/>
        
        </head>
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
            <h2>{this.props.recipe.title}</h2>
            <img src={this.props.recipe.img}/ >

            <form action={editUrl} method="GET">
                <input type="submit" value="Improve this recipe"/>
            </form>

            <form action={deleteUrl} method="GET">
                <input type="submit" value="Delete this recipe"/>
            </form>
            <h2> Ingredients</h2>
            <ul>
              {ingredient} 
            </ul>
            <h2> Instruction</h2>
            <ol>
              {instruction}
            </ol>
            
          </div>
          <footer> © 2019 Recipes-Keeper GA All rights reserved.</footer>
         
        </body>
      </html>
    );  
  }
}

module.exports = Recipe;