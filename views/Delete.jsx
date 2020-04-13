var React = require('react');
class Delete extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Delete This Recipe?</h1>

            <h2>Recipe #{this.props.id}</h2>
            <h1>{this.props.title}</h1>
            <p>Ingredients needed: <br />{this.props.ingredients}</p>
            <p>Cooking instructions: <br /> {this.props.instructions}</p>

            <form method="POST" action={"/recipes/" + this.props.id + "?_method=delete"}>
            <input type="submit" value="Delete"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Delete;