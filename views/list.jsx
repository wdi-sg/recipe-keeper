var React = require('react');
// let edititem = require('./edit');
// let deleteitem = require('./delete');
// let showitem = require('./show');
// THIS LIST IS EXTRA
class List extends React.Component {
  render() {
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
    let recipeArray = this.props.recipeList;
    const list = recipeArray.map(recipe => {
        return (
        <div>
        <li> Title: {recipe.title} </li>
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