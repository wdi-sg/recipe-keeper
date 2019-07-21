const React = require('react');

class EditForm extends React.Component {
  render() {

    let editRecipeUrl = `/recipes/${this.props.id}?_method=PUT`
    let title = this.props.title;
    let ing1 = this.props.ingrd[0];
    let ing2 = this.props.ingrd[1];
    let ing3 = this.props.ingrd[2];
    let instr = this.props.instr;
    let img = this.props.img;

    return (
      <div>
        <form method="POST" action={editRecipeUrl}>
            <p>Recipe Title:</p>
            <input type={"text"} name={"title"} defaultValue={title} minLength={"3"} required/>

            <h3>Ingredients (name, amount, notes):</h3>
            <p>Name:</p>
                <input type={"text"} name={"name"} minLength={"3"} required defaultValue={ing1.name}/>
                <input type={"text"} name={"name"} minLength={"3"} defaultValue={ing2.name}/>
                <input type={"text"} name={"name"} minLength={"3"} defaultValue={ing3.name}/>
            <p>Amount:</p>
                <input type={"text"} name={"amount"} required defaultValue={ing1.amount}/>
                <input type={"text"} name={"amount"} defaultValue={ing2.amount}/>
                <input type={"text"} name={"amount"} defaultValue={ing3.amount}/>
            <p>Notes:</p>
                <input type={"text"} name={"notes"} minLength={"3"} required defaultValue={ing1.notes}/>
                <input type={"text"} name={"notes"} minLength={"3"} defaultValue={ing2.notes}/>
                <input type={"text"} name={"notes"} minLength={"3"} defaultValue={ing3.notes}/>
            <p>Instructions:</p>
            <textarea type={"text"} name={"instructions"} minLength={"5"} required defaultValue={instr}/>
            <p>Image Link:</p>
            <input type={"text"} name={"img"} defaultValue={img}/>
            <br/>
            <input type="submit" value="CONFIRM"/>
        </form>
      </div>
    );
  }
}

module.exports = EditForm;