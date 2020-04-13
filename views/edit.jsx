var React = require('react');

class Edit extends React.Component {
  render() {
    const editLink = "/recipes/"+ this.props.id +"/edit";
    const link = "/recipes/"+this.props.id+"?_method=put";
    return (
      <html>
        <body>
          <div>
          <h1>Edit Page</h1>
          <form method="POST" action={link}>
            <p>Name</p>
            <input type = "text" name="name" value={this.props.name}/>
            <p>Ingredients</p>
            <input type = "text" name = "ingredients" value={this.props.ingredients}/>
            <p>Instructions</p>
            <input type = "text" name = "instructions" value={this.props.instructions}/>
            <br/><br/>
            <button type="submit">Submit</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;