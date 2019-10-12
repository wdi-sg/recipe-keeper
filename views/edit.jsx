var React = require('react');
var HeaderBar = require('./components/headerbar.jsx');

class EditRecipe extends React.Component {
  render() {
      console.log()
      let recipe = this.props.recipes[this.props.id];
      console.log(this.props.id);
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="/css/style.css"></link>
        </head>
        <body>
            <div className="container_col">
            <HeaderBar data={this.props} pageTitle="Edit Recipe"/>
            <form method="POST" action={'/recipes/'+this.props.id+'?_method=PUT'}>
                <p>Title</p><input name="title" value={recipe.title} size="45" required/>
                <p>Image</p><input name="img" value={recipe.img} size="45" required/>
                <p>Ingredients</p><input name="ingredients" value={recipe.ingredients} size="45" required/>
                <p>Instructions</p><input name="instructions" value={recipe.instructions} size="45" required/>
                <p>Key Words</p><input name="keywords" value={recipe.keywords} size="45" required/>
                <p><input value="Submit" type="submit"/></p>
            </form>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = EditRecipe;
