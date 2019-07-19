var React = require('react');
var Allrecipepagelayout = require('./component/layout-allrecipepage.jsx')
var Allrecipepagecomponent = require('./component/component-allrecipepage.jsx')

//////////////////THE USER WILL SEE THIS RENDERED//////////////////
class Home extends React.Component {

  render() {
    //code logic goes here
    return (
      <Allrecipepagelayout>
        <div>
          <form action="/recipes" method="post">
            <p>What is the title of your dish?</p>
            <input name="title" type="text" placeholder="Hobbit stew"/><br/>
            <p>What ingredients are required for this dish?</p>
            <textarea name="ingredients" rows="2" cols="25" placeholder="Salt, pepper, finger of a hobbit..." style={{height:100+"px", width:400+"px"}}></textarea><br/>
            <p>How is this meal prepared?</p>
            <textarea name="instructions" rows="2" cols="25" placeholder="Peel a potato, shave your head, fire up the oven?" style={{height:100+"px", width:400+"px"}}></textarea><br/><br/>
            <button name="recipe" value="sweet" type="submit">Create recipe!</button>
          </form>
        </div>
        <br/>
        <div>
          <form action="/recipes" method="get">
            <button value="" type="submit">Back to list</button>
          </form>
        </div>
      </Allrecipepagelayout>
    );
  }
}

module.exports = Home;
