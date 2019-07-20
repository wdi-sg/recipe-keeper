const React = require('react');


class CreateForm extends React.Component {
  render() {
    return (
      <div>
        <form method="POST" action="/recipes">
            <p>Recipe Title:</p>
            <input type={"text"} name={"title"}/>
            <p>Ingredients:</p>
            <input type={"text"} name={"ingredients"}/>
            <p>Instructions:</p>
            <input type={"text"} name={"instructions"}/>
            <input type="submit" value="CREATE RECIPE"/>
        </form>
      </div>
    );
  }
}

module.exports = CreateForm;