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
          <div className= "delete">
            <h2>Are you sure you want to delete this recipe?</h2>
            <form method="POST" action= {url}>
                <div className= "title">
                  <p> Title: </p>
                  <div className = "one" ><input name="title" value ={this.props.recipe.title}/></div>
                </div> 
                <div className = "inputImg">
                  <p> Image: </p>
                  <div className = "four"> <input name="img" value ={this.props.recipe.img}/></div>
                </div> 
                <div className = "inputIngre">
                  <p> Ingredients: </p>
                  <div className = "two"><input name="ingredient" value ={this.props.recipe.ingredient} /></div>
                
                </div>
                <div className = " inputIntr">
                  <p>Instruction :</p>
                  <div className = "three"><input name="intruction " value ={this.props.recipe.instruction}/></div>
                </div>
                <input className = "submit" type="submit" value ="Delete"/>
            </form>
          </div>
          <footer> © 2019 Recipes-Keeper GA All rights reserved.</footer>
        </body>
      </html>
    );
  }
}

module.exports = Delete;