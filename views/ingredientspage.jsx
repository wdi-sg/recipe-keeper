var React = require('react');
var Allrecipepagelayout = require('./component/layout-allrecipepage.jsx')
var Allrecipepagecomponent = require('./component/component-allrecipepage.jsx')

//////////////////THE USER WILL SEE THIS RENDERED//////////////////
class Home extends React.Component {

  render() {
    //code logic goes here
    var tempArray = []
    var firstLetter = "";
    var emptyChar = ""
    var ingredients = this.props.ingredients.sort(nameSort("name")).map((obj)=>{
      var recipeFound = this.props.recipes.map((object)=>{
        var ingredientFound = object.ingredients.map((ingredientname)=>{
          if (ingredientname.ingredient === obj.name && !tempArray.includes(obj.name)){
            tempArray.push(obj.name)
            var char = obj.name.charAt(0).toUpperCase()
            if (char != firstLetter){
              firstLetter = char
              return <Allrecipepagecomponent title={obj.name} splitter={char}></Allrecipepagecomponent>
            }else {
              return <Allrecipepagecomponent title={obj.name} splitter={emptyChar}></Allrecipepagecomponent>
            }
          }
        })
        return ingredientFound
      })
      return recipeFound
    })
    return (
      <Allrecipepagelayout>
        <div id="recipe-box">
        <h3 id="list-of-recipe-text">Ingredients currently in use by your recipes</h3><br/>
          <div id="recipes">
            {ingredients}
          </div>
        </div>
      </Allrecipepagelayout>
    );
  }
}

module.exports = Home;

function nameSort(key){
  var varA, varB, compare;
  return function (a,b){
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    varA = a[key].toUpperCase()
    varB = b[key].toUpperCase()
    if (varA > varB){
      compare = 1;
    }else if (varA < varB){
      compare = -1;
    }
    return compare;
  }
}
