const React = require('react');

class EditForm extends React.Component {
  render() {

    let editRecipeUrl = `/recipes/${this.props.id}?_method=PUT`
    let title = this.props.title;
    let ingrd = this.props.ingrd;
    let instr = this.props.instr;

    return (
      <div>
        <form method="POST" action={editRecipeUrl}>
            <p>Recipe Title:</p>
            <input type={"text"} name={"title"} defaultValue={title} minLength={"3"} required/>
            <p>Ingredients:</p>
            <input type={"text"} name={"ingredients"} defaultValue={ingrd} minLength={"5"} required/>
            <p>Instructions:</p>
            <input type={"text"} name={"instructions"} defaultValue={instr} minLength={"5"} required/>
            <input type="submit" value="CONFIRM"/>
        </form>
      </div>
    );
  }
}

module.exports = EditForm;