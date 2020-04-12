var React = require('react');

class Edit extends React.Component {
  render() {
     
    const link = "/recipes/"+this.props.id+"?_method=put";
    return (
      <html>
        <body>
          <div>
          <h1>Edit Page</h1>
          <form method="POST" action={link}>
          <p>Recipe Title: </p>
            <input name="title" value={this.props.title}/>
            <p>Ingredients: </p>
            <input name="ingredients" value={this.props.ingredients}/>
            <p>Instructions: </p>
            <input name="instructions" value={this.props.instructions}/>
            <input type="submit" value="submit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;