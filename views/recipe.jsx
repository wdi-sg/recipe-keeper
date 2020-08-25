const React=require('react');

export default class Recipe extends React.Component {

    render(){
        return (
<form method="POST" action="/recipes" >
  Recipe Title: <br /><input type="text" name="title" /> <br />
  Ingredients: <br /><input type="text" name="ingredients" /> <br />
Instructions: <br /><input type="text" name="instructions" /> <br /> <br />
  <input type="submit" value="Submit" />
</form>
            );
    }
}

// action is the exact route of the post method.
//
