const React = require("react")

class Home extends React.Component {
  render() {
        let {Title, Ingredients, Instructions, id} = this.props;

    return (
            <div>
                <h1>{Title}</h1>
                <p>{Ingredients}<br/>{Instructions}</p>
                <form method="POST" action={`/recipes/${id}?_method=delete`}>
                <input type="submit" value="delete"/>
                </form>
            </div>
    );
  }
}

module.exports = Home;

//this takes the name/number/hobbies keys from this.props and assigns their values to name/number/hobbies variables
// let {name, number, hobbies} = this.props