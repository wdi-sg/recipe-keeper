var React = require('react');
var Allrecipepagelayout = require('./component/layout-allrecipepage.jsx')
var ingredientList = require('../ingredient.json');


//////////////////THE USER WILL SEE THIS RENDERED//////////////////
class Home extends React.Component {

  render() {
    //code logic goes here
    var noOfInputFields = this.props.recipes.noofingredients
    var title = this.props.recipes.title

    var createdon = this.props.recipes.createdon
    var updatedon = this.props.recipes.updatedon
    var id = this.props.recipes.id
    var ingredientsSort = ingredientList.sort(nameSort("name")).map((obj)=>{
      return <option value={obj.name}/>
    })
    var array = []
    for (var i = 0; i < noOfInputFields*5; i+=5){
      var ingredientNo = "ingredients[" + i + "][ingredient]"
      var quantityNo = "ingredients[" + i + "][quantity]"
      array[i] = <label>Ingredient</label>
      array[i+1] = <input name={ingredientNo} type="text" list="ingredient"/>
      array[i+2] = <label>Quantity</label>
      array[i+3] = <input name={quantityNo} type="text" style={{width:30+"px"}}/>
      array[i+4] = <br/>
    }

    return (
      <Allrecipepagelayout>
        <div>
          <h3 style={{textAlign:"center"}}>Ingredient List</h3>
          <form action="/instructions" name="newrecipe" method="post">
            <input name="title" type="hidden" value={title}/><br/>
            <input type="hidden" name="createdon" value={createdon}/>
            <input type="hidden" name="updatedon" value={updatedon}/>
            <input type="hidden" name="id" value={id}/>
            {array}
            <datalist id="ingredient">
            {ingredientsSort}
            </datalist>
            <button className="btn btn-secondary" type="submit">Submit ingredients!</button>
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
