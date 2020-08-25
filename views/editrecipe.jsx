const React=require('react');

export default class Edit extends React.Component {

    render(){
        let {title, ingredients, instructions, id} = this.props;

            return (
<form method="POST" action={`/recipes/${id}?_method=put`} >
  New Recipe Title: <br /><input type="text" name="title" defaultValue={title} /> <br />
  New Ingredients: <br /><input type="text" name="ingredients" defaultValue={ingredients} /> <br />
New Instructions: <br /><input type="text" name="instructions" defaultValue={instructions} /> <br /> <br />
  <input type="submit" value="Submit" />
</form>
            );
    }
}

// action is the exact route of the post method.
//
