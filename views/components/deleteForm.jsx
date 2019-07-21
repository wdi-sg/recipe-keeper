const React = require('react');

class DeleteForm extends React.Component {
  render() {

    let title = this.props.title;
    let ing1 = this.props.ingrd[0];
    let ing2 = this.props.ingrd[1];
    let ing3 = this.props.ingrd[2];
    let instr = this.props.instr;
    let img = this.props.img;

    return (
      <div>
        <form method="GET">
            <p>Recipe Title:</p>
            <input type={"text"} name={"title"} defaultValue={title} readOnly/>

            <h3>Ingredients (name, amount, notes):</h3>
            <p>Name:</p>
                <input type={"text"} name={"name"} defaultValue={ing1.name} readOnly/>
                <input type={"text"} name={"name"} defaultValue={ing2.name} readOnly/>
                <input type={"text"} name={"name"} defaultValue={ing3.name} readOnly/>
            <p>Amount:</p>
                <input type={"text"} name={"amount"} defaultValue={ing1.amount} readOnly/>
                <input type={"text"} name={"amount"} defaultValue={ing2.amount} readOnly/>
                <input type={"text"} name={"amount"} defaultValue={ing3.amount} readOnly/>
            <p>Notes:</p>
                <input type={"text"} name={"notes"} defaultValue={ing1.notes} readOnly/>
                <input type={"text"} name={"notes"} defaultValue={ing2.notes} readOnly/>
                <input type={"text"} name={"notes"} defaultValue={ing3.notes} readOnly/>
            <p>Instructions:</p>
            <textarea type={"text"} name={"instructions"}defaultValue={instr} readOnly/>
            <p>Image Link:</p>
            <input type={"text"} name={"img"} defaultValue={img} readOnly/>
        </form>
      </div>
    );
  }
}

module.exports = DeleteForm;