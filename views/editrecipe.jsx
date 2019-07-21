var React = require('react');
var Allrecipepagelayout = require('./component/layout-allrecipepage.jsx')
var Allrecipepagecomponent = require('./component/component-allrecipepage.jsx')
var ingredientList = require('../ingredient.json');
//////////////////THE USER WILL SEE THIS RENDERED//////////////////
class Home extends React.Component {

  render() {
    //code logic goes here
    var recipes = this.props.recipes
    var theRecipe = this.props.therecipe
    var showRecipe = recipes[theRecipe]
    var recipeEditLink = "/recipes/"+theRecipe+"?_method=PUT"
    var date = new Date();
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var formattedDate = date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();
    var updatedString = "Updated on " + formattedDate;
    var ingredients = showRecipe.ingredients

    var ingredientsSort = ingredientList.sort(nameSort("name")).map((obj)=>{
      return <option value={obj.name}/>
    })

    var array = []
    for (var i = 0; i < ingredients.length; i++){
      var ingredientNo = "ingredients[" + i + "][ingredient]"
      var quantityNo = "ingredients[" + i + "][quantity]"
      var foodIdNo = "ingredients[" + i + "][id]";
      var ingredientWord = ingredients[i]["ingredient"];
      var quantityNum = ingredients[i]["quantity"];
      var foodIdNum = ingredients[i]["id"];
      array[i] = <div><label>Ingredient</label><input name={ingredientNo} type="text" value={ingredientWord} list="ingredient"/><label>Quantity</label><input name={quantityNo} type="text" value={quantityNum} style={{width:30+"px"}}/><br/></div>
    }

    return (
      <Allrecipepagelayout>
        <div>
          <p id="list-of-recipe-text">You are currently editing {showRecipe.title}</p>
        </div>
        <div id="recipe-box">
          <div>
            <form action={recipeEditLink} method="post">
              <p>Dish title</p>
              <input name="title" type="text" placeholder={showRecipe.title} value={showRecipe.title}/><br/>
              <p>Ingredient list</p>
              {array}
              <datalist id="ingredient">
              {ingredientsSort}
              </datalist>
              <p>Preparation instructions</p>
              <textarea name="instructions" rows="2" cols="25" placeholder={showRecipe.instructions} value={showRecipe.instructions} style={{height:100+"px", width:400+"px"}}></textarea><br/><br/>
              <input type="hidden" name="createdon" value={showRecipe.createdon}/>
              <input type="hidden" name="id" value={showRecipe.id}/>
              <input type="hidden" name="updatedon" value={updatedString}/>
              <p>Set as favorite?</p>
              <input type="checkbox" name="atf" checked={showRecipe.atf}/><br/><br/>
              <button className="btn btn-secondary" value="" type="submit">Update recipe</button>
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
