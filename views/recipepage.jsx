var React = require('react');
var Allrecipepagelayout = require('./component/layout-allrecipepage.jsx')
var Allrecipepagecomponent = require('./component/component-allrecipepage.jsx')

//////////////////THE USER WILL SEE THIS RENDERED//////////////////
class Home extends React.Component {

  render() {
    //code logic goes here
    var recipes = this.props.recipes
    var theRecipe = this.props.therecipe
    var showRecipe = recipes[theRecipe]
    var recipeEditLink = "/recipes/"+theRecipe+"/edit"
    var recipeDeleteLink = "/recipes/"+theRecipe+"/delete"
    var ingredients = showRecipe.ingredients
    var ingredientCard = ingredients.map((obj)=>{
      return <div>{obj.ingredient} x {obj.quantity}<br/></div>
    })

    return (
      <Allrecipepagelayout>
        <div>
          <p id="list-of-recipe-text">You are currently looking at {showRecipe.title}</p>
        </div>
        <div id="recipe-box">
          <div id="uniqueid">
            <p>ID: {showRecipe.id}</p>
          </div>
          <br/>
          <div id="ingredients">
            <h3><li>ingredients required</li></h3><br/>
            {ingredientCard}
          </div>
          <br/>
          <div id="instructions">
            <h3><li>instructions</li></h3><br/>
            <div>{showRecipe.instructions}</div>
          </div>
          <br/>
          <div id="createdon">
            <div>{showRecipe.createdon}</div>
          </div>
          <div id="updatedon">
            <div>{showRecipe.updatedon}</div>
          </div>
        </div>
        <br/>
        <div>
          <form action={recipeEditLink} method="get">
            <button className="btn btn-secondary" value="" type="submit">Edit recipe</button>
          </form>
        </div>
        <br/>
        <div>
          <form action={recipeDeleteLink} method="get">
            <button className="btn btn-secondary" value="" type="submit">Delete recipe</button>
          </form>
        </div>
        <br/>
        <div>
          <form action="/recipes" method="get">
            <button className="btn btn-secondary" value="" type="submit">Back to list</button>
          </form>
        </div>
      </Allrecipepagelayout>
    );
  }
}

module.exports = Home;
