const React=require('react');

export default class Recipe extends React.Component {

    render(){
        var dateCreated = new Date().toLocaleDateString();
        return (
<form method="POST" action="/recipes" >
  Recipe Title: <br /><input type="text" name="title" maxlength = "40"/> <br />
  Ingredients: <br /><input type="text" name="ingredients" maxlength = "40"/> <br />
Instructions: <br /><input type="text" name="instructions" maxlength = "40"/> <br />
Date Added:  <br /><input type="text" name="dateCreated" defaultValue={dateCreated}/> <br /> <br />
  <input type="submit" value="Submit" />
</form>
            );
    }
}

// action is the exact route of the post method.
//
