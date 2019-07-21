var React = require('react');
var Allrecipepagelayout = require('./component/layout-allrecipepage.jsx')
var Allrecipepagecomponent = require('./component/component-allrecipepage.jsx')

//////////////////THE USER WILL SEE THIS RENDERED//////////////////
class Home extends React.Component {

  render() {
    //code logic goes here
    var recipes = this.props.recipes
    var theRecipe = this.props.therecipe
    console.log(this.props.recipes);
    var showRecipe = recipes[theRecipe]
    var recipeEditLink = "/recipes/"+theRecipe
    var recipeDeleteLink = "/recipes/"+theRecipe+"?_method=DELETE"

    return (
      <Allrecipepagelayout>
        <div>
          <p id="list-of-recipe-text">You are about to delete {showRecipe.title}</p>
        </div>
        <div id="recipe-box">
          <div>
            <form action={recipeDeleteLink} method="post">
              <button className="btn btn-secondary" value="" type="submit">Yes, delete it!</button>
            </form>
          </div>
          <br/>
          <div>
            <form action={recipeEditLink} method="get">
              <button className="btn btn-secondary" value="" type="submit">No, I changed my mind!</button>
            </form>
          </div>
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
