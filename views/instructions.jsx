var React = require('react');
var Allrecipepagelayout = require('./component/layout-allrecipepage.jsx')
var Allrecipepagecomponent = require('./component/component-allrecipepage.jsx')
var ingredientList = require('../ingredient.json');


//////////////////THE USER WILL SEE THIS RENDERED//////////////////
class Home extends React.Component {

  render() {
    //code logic goes here
    var title = this.props.recipes.title;
    var createdon = this.props.recipes.createdon;
    var updatedon = this.props.recipes.updatedon;
    var id = this.props.recipes.id;
    var ingredientGroup = this.props.recipes.ingredients;
    console.log(this.props.recipes.ingredients[0].id)
    var array = [];
    for (var i = 0; i < ingredientGroup.length; i++){
      var ingredientNo = "ingredients[" + i + "][ingredient]";
      var quantityNo = "ingredients[" + i + "][quantity]";
      var foodIdNo = "ingredients[" + i + "][id]";
      var ingredientWord = ingredientGroup[i]["ingredient"];
      var quantityNum = ingredientGroup[i]["quantity"];
      var foodIdNum = ingredientGroup[i]["id"];
      array[i] = <div><input name={ingredientNo} type="hidden" value={ingredientWord}/><input name={quantityNo} type="hidden" value={quantityNum}/><input name={foodIdNo} type="hidden" value={foodIdNum}/></div>
    };

    return (
      <Allrecipepagelayout>
        <div>
          <h3 style={{textAlign:"center"}}>Preparation instructions</h3>
          <form action="/recipes" name="newrecipe" method="post">
            <input name="title" type="hidden" value={title}/><br/>
            <input type="hidden" name="createdon" value={createdon}/>
            <input type="hidden" name="updatedon" value={updatedon}/>
            <input type="hidden" name="id" value={id}/>
            {array}

            <p>How is this meal prepared?</p>
            <textarea name="instructions" rows="2" cols="25" placeholder="Peel a potato, shave your head, fire up the oven?" style={{height:100+"px", width:400+"px"}}></textarea><br/><br/>
            <p>Set as favorite?</p>
            <input type="checkbox" name="atf"/><br/><br/>
            <button className="btn btn-secondary" type="submit">Submit instructions!</button>
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
