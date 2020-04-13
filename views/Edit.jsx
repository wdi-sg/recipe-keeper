var React = require('react');
class Edit extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Edit This Recipe</h1>
            <form method="POST" action={"/recipes/" + this.props.id + "?_method=put"}>
            Recipe No.: <input type="text" name="title" value={this.props.id}<br />
            Title: <input type="text" name="title" value={this.props.title}/><br />
            Ingredients: <input type="text" name="ingredients" value={this.props.ingredients}/><br />
            Instructions: <input type="text" name="instructions" value={this.props.instructions}/><br />
            <input type="submit" value="Submit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;