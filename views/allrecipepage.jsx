var React = require('react');
var Allrecipepagelayout = require('./component/layout-allrecipepage.jsx')
var Allrecipepagecomponent = require('./component/component-allrecipepage.jsx')
const jsonfile = require('jsonfile');
const file = 'data.json';

//////////////////THE USER WILL SEE THIS RENDERED//////////////////
class Home extends React.Component {

  render() {
    //code logic goes here
    var recipes = this.props.recipes
    var firstLetter = "";
    var emptyChar = ""
    //sort current array and append to new list
    var sortedList = recipes.sort(nameSort("title"));
    //store sorted list into new array
    var displayRecipes = sortedList.map((obj,index)=>{
      var char = obj.title.charAt(0).toUpperCase()
      if (char != firstLetter){
        firstLetter = char
        return (<Allrecipepagecomponent index={index} title={obj.title} splitter={char}/>)
      }else {
        return (<Allrecipepagecomponent index={index} title={obj.title} splitter={emptyChar} />)
      }
    })
    //rewrite existing array list with new list
    jsonfile.readFile(file,(err,obj)=>{
      obj["recipes"] = sortedList;
      jsonfile.writeFile(file, obj, (err)=>{
        if(err){
          console.log(err)
        }
      });
    })
    return (
      <Allrecipepagelayout>
        <div>
          <form action="/recipes/new" method="get">
            <button className="btn btn-secondary" value="" type="submit">Create new recipe</button>
          </form>
        </div>
        <br/>
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

//////////////////Function to sort recipe names//////////////////
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
