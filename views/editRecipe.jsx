var React = require('react');

class Edit extends React.Component {
  render() {
    console.log("ahahhhhhhh");
    console.log(this.props);
    console.log("I want to know");
    let url = "/recipes/" + this.props.id + "?_method=PUT";
    console.log(url);
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
            <h1>Improve this recipe</h1>
            <form method="POST" action= {url}>
                <p> Title</p>
                <input name="title" value ={this.props.recipe.title}/>
                <p> Image</p>
                <input name="img" value ={this.props.recipe.img}/>
                <p>Ingredients</p>
                <input name="ingredient" value ={this.props.recipe.ingredient} />
                <p>Instruction</p>
                <input name="intruction " value ={this.props.recipe.instruction}/>
               
                <input type="submit"/>
            </form>
          </div>
          <footer> © 2019 Recipes-Keeper GA All rights reserved.</footer>
        </body>
      </html>
    );
  }
}

module.exports = Edit;