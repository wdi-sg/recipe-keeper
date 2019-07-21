var React = require('react');

class Edit extends React.Component {
  render() {
    var url = "/recipes/"+this.props.recipesId + "?_method=PUT";
    return (
      <html>
        <body>
          <div>
            <h1>Edit Recipes!!</h1>
            <p>Dish Title: {this.props.recipesKey.title}</p>
            <form action={url} method="POST">
                <p>Id:</p>
                <input name="id" value={this.props.recipesId.id}/>
                <p>Ingredients:</p>
                <input name="ingredients" value={this.props.recipesKey.ingredients}/>
                <p>Height:</p>
                <input name="instructions" value={this.props.recipesKey.instructions}/>
                <input type="submit"/>
            </form>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;