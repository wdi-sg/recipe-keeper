const React = require('react');
const Nav = require('./nav.jsx');
class Index extends React.Component {
  render() {
    console.log(this.props.recipes);
    const list = this.props.recipes.map(recipe => {
      return (
        <div>
          <div class="card">
            <div class="card-body">
              <p>Title: {recipe.title}</p>
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Instructions: {recipe.instructions}</p>
              <br/><br/>
            </div>
          </div>
        </div>
      );
    });
    return(
      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
          <link rel="stylesheet" href="/style.css"></link>
        </head>
        <body>
          <Nav/>
          <h1>Index</h1>
          {list}
        </body>
      </html>
    );
  }
}

module.exports = Index;