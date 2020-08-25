const React = require("react")

class Home extends React.Component {
  render() {
        let {Title, id} = this.props;

    return (
            <div>
                <h1>{Title}</h1>
                <form method="POST" action={`/recipes/${id}?_method=put`}>
                Ingredients:
                <input type="text" name="Ingredients"/>
                Instructions:
                <input type="text" name="Instructions"/>
                <input type="submit" value="update"/>
                </form>
            </div>
    );
  }
}

module.exports = Home;

//this takes the name/number/hobbies keys from this.props and assigns their values to name/number/hobbies variables
// let {name, number, hobbies} = this.props