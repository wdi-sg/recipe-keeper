var React = require('react');
var Allrecipepagelayout = require('./component/layout-allrecipepage.jsx')
var Allrecipepagecomponent = require('./component/component-allrecipepage.jsx')

//////////////////THE USER WILL SEE THIS RENDERED//////////////////
class Home extends React.Component {

  render() {
    //code logic goes here
    var recipes = this.props.recipes
    var displayRecipes = recipes.map((obj, index)=>{
      return <Allrecipepagecomponent index={index} title={obj.title} ingredients={obj.ingredients} instructions={obj.instructions}/>
    })

    return (
      <Allrecipepagelayout>
        <div>
          <form action="/recipes/new" method="get">
            <button value="" type="submit">Create new recipe</button>
          </form>
        </div>
        <div>
          <p id="list-of-recipe-text">List of recipes</p>
        </div>
        <div id="recipe-box">
          <div id="recipes">{displayRecipes}</div>
        </div>
      </Allrecipepagelayout>
    );
  }
}

module.exports = Home;
