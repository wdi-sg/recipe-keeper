var React = require('react');
var HeaderBarLess = require('./components/headerbar_less.jsx');

class NewRecipe extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="/css/style.css"></link>
        </head>
        <body>
            <div className="container_col">
            <HeaderBarLess data={this.props} pageTitle="Create New Recipe"/>
            <form method="POST" action="/recipes?_method=POST">
                <p>Title</p><input name="title" size="45"/>
                <p>Image</p><input name="img" size="45"/>
                <p>Ingredients</p><input name="ingredients" size="45"/>
                <p>Instructions</p><input name="instructions" size="45"/>
                <p>Keywords</p><input name="keywords" size="45"/>
                <p><input value="Submit" type="submit"/></p>
            </form>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = NewRecipe;
