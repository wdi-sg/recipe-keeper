var React = require('react');
// let edititem = require('./edit');
// let deleteitem = require('./delete');
// let showitem = require('./show');

class List extends React.Component {
  render() {
    let recipeArray = this.props.recipeList;
    const list = recipeArray.map(recipe => {
        return (
        <div>
        <li> Title: {recipe.name} </li>
        <h2> Ingredients: {recipe.ingredients} </h2>
        <h2> Instructions: {recipe.instructions} </h2>
        </div>
        )
    })
    return (
      <html>
        <body>
          <div>
            <h1>Hello, below are the list of recipes that you have just created!</h1>
            {list}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = List;