var React = require('react');
var Allrecipepagelayout = require('./component/layout-allrecipepage.jsx')
var Allrecipepagecomponent = require('./component/component-allrecipepage.jsx')

//////////////////THE USER WILL SEE THIS RENDERED//////////////////
class Home extends React.Component {

  render() {
    //code logic goes here
    var date = new Date();
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var formattedDate = date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();
    var createdString = "Created on " + formattedDate;

    return (
      <Allrecipepagelayout>
        <div>
          <form action="/recipes" name="newrecipe" method="post">
            <p>What is the title of your dish?</p>
            <input name="title" type="text" placeholder="Hobbit stew" required text/><br/>
            <p>What ingredients are required for this dish?</p>
            <textarea name="ingredients" rows="2" cols="25" placeholder="Salt, pepper, finger of a hobbit..." style={{height:100+"px", width:400+"px"}}></textarea><br/>
            <p>How is this meal prepared?</p>
            <textarea name="instructions" rows="2" cols="25" placeholder="Peel a potato, shave your head, fire up the oven?" style={{height:100+"px", width:400+"px"}}></textarea><br/><br/>
            <p>Set as favorite?</p>
            <input type="checkbox" name="atf"/><br/><br/>
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

function validateForm(){
  if (typeof document.newrecipe.title != "String"){
    return false;
  }
}
