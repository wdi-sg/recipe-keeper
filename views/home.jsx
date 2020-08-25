const React = require("react")

class Home extends React.Component {
  render() {

    return (
            <div>
            <form method="POST" action="/recipes">
            Title:
            <input type="text" name="Title"/>
            Ingredients:
            <input type="text" name="Ingredients"/>
            Instructions:
            <input type="text" name="Instructions"/>
            <input type="submit" value="Submit"/>
            </form>
            </div>
    );
  }
}

module.exports = Home;

//this takes the name/number/hobbies keys from this.props and assigns their values to name/number/hobbies variables
// let {name, number, hobbies} = this.props