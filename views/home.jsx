var React = require('react');
// let edititem = require('./edit');
// let deleteitem = require('./delete');
// let showitem = require('./show');

class Home extends React.Component {
  render() {
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
    let Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1) };
    let recipeArray = this.props.recipeList;
    const list = recipeArray.map(recipe => {
        return (
        <div>
        <li> Title: <span style={{ color: "#4D8EDD", fontWeight: "lighter"}}>{Capitalize(recipe.title)}</span></li>
        <p> Ingredients: <span style={{ color: "green", fontWeight: "lighter" }}>{Capitalize(recipe.ingredients)} </span></p>
        <p> Instructions: <span style={{ color: "pink", fontWeight: "lighter" }}>{Capitalize(recipe.instructions)} </span></p>
        </div>
        )
    })
    return (
      <html>
        <body>
          <div>
            <h1>Hello, below are the list of <span style={{ color: "#AA71D5", fontWeight: "lighter" }}>recipes</span> that you have just created!</h1>
            {list}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;