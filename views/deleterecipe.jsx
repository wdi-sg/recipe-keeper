const React=require('react');

export default class Delete extends React.Component {

    render(){
        let {title, id} = this.props
            return (
<form method="POST" action={`/recipes/${id}?_method=delete`} >
  Recipe Title To Delete: <br /><input type="text" name="title" defaultValue={title} /> <br />
  Recipe Id To Delete: <br /><input type="text" name="id" defaultValue={id}/> <br /> <br />
  <input type="submit" value="Delete"  />
</form>
            );
    }
}

// action is the exact route of the post method.
//
