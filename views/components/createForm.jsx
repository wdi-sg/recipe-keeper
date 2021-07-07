const React = require('react');


class CreateForm extends React.Component {
  render() {
    return (
      <div>
        <form method="POST" action="/recipes">
            <p>Recipe Title:</p>
                <input type={"text"} name={"title"} minLength={"3"} required/>
            <h3>Ingredients (name, amount, notes):</h3>
            <p>Name:</p>
                <input type={"text"} name={"name"} minLength={"3"} required/>
                <input type={"text"} name={"name"} minLength={"3"}/>
                <input type={"text"} name={"name"} minLength={"3"}/>
            <p>Amount:</p>
                <input type={"text"} name={"amount"} required/>
                <input type={"text"} name={"amount"}/>
                <input type={"text"} name={"amount"}/>
            <p>Notes:</p>
                <input type={"text"} name={"notes"} minLength={"3"} required/>
                <input type={"text"} name={"notes"} minLength={"3"}/>
                <input type={"text"} name={"notes"} minLength={"3"}/>
            <p>Instructions:</p>
            <textarea type={"text"} name={"instructions"} minLength={"5"} required/>
            <p>Image Link:</p>
            <input type={"text"} name={"img"} />
            <br/>
            <br/>
            <input type="submit" value="CREATE RECIPE"/>
        </form>
      </div>
    );
  }
}

module.exports = CreateForm;