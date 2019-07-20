var React = require('react');
var Allrecipepagelayout = require('./component/layout-allrecipepage.jsx')
var Allrecipepagecomponent = require('./component/component-allrecipepage.jsx')
var ingredientList = require('../ingredient.json');


//////////////////THE USER WILL SEE THIS RENDERED//////////////////
class Home extends React.Component {

  render() {
    //code logic goes here
    var date = new Date();
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var formattedDate = date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();
    var createdString = "Created on " + formattedDate;
    var ingredients = ingredientList.sort(nameSort("name")).map((obj)=>{
      return <option value={obj.name}/>
    })

    return (
      <Allrecipepagelayout>
        <div>
          <form action="/ingredientlist" name="newrecipe" method="post">
            <p>What is the title of your dish?</p>
            <input name="title" type="text" placeholder="Hobbit stew" required text/><br/>
            <p>How many ingredients are in this dish?</p>
            <input type="text" name="noofingredients"/><br/><br/>
            <input type="hidden" name="createdon" value={createdString}/>
            <input type="hidden" name="updatedon" />
            <input type="hidden" name="id" value={this.props.uniqueid}/>
            <button className="btn btn-secondary" type="submit">Create recipe!</button>
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
