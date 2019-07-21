const React = require('react');

class DeleteForm extends React.Component {
  render() {

    let editRecipeUrl = `/recipes/${this.props.id}/edit`
    let title = this.props.title;
    let ingrd = this.props.ingrd;
    let instr = this.props.instr;

    return (
      <div>
        <form method="GET" action={editRecipeUrl}>
            <p>Recipe Title:</p>
            <input type={"text"} name={"title"} defaultValue={title} readOnly/>
            <p>Ingredients:</p>
            <input type={"text"} name={"ingredients"} defaultValue={ingrd} readOnly/>
            <p>Instructions:</p>
            <input type={"text"} name={"instructions"} defaultValue={instr} readOnly/>
            <input type="submit" value="EDIT RECIPE"/>
        </form>
      </div>
    );
  }
}

module.exports = DeleteForm;