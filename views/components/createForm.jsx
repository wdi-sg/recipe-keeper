const React = require('react');


class CreateForm extends React.Component {
  render() {
    return (
      <div>
        <form method="POST" action="/recipes">
            <p>Recipe Title:</p>
            <input type={"text"} name={"title"} minLength={"3"} required/>
            <p>Ingredients:</p>
            <input type={"text"} name={"ingredients"} minLength={"5"} required/>
            <p>Instructions:</p>
            <input type={"text"} name={"instructions"} minLength={"5"} required/>
            <input type="submit" value="CREATE RECIPE"/>
        </form>
      </div>
    );
  }
}

module.exports = CreateForm;