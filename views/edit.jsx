const React = require('react');

class Edit extends React.Component {
  render() {
    console.log(this.props.recipe)
    return(
      <html>
        <body>
          <h1>Editing : {this.props.recipe.title}</h1>
          <form action={"/recipes/" + this.props.id + "?_method=PUT"} method="POST">
            <p>Title:</p>
            <input type="text" name="title" defaultValue={this.props.recipe.title}/><br/><br/>
            <p>Ingredients:</p> 
            <input type="text" name="ingredients" defaultValue={this.props.recipe.ingredients}/><br/><br/>
            <p>Instructions:</p> 
            <input type="text" name="instructions" defaultValue={this.props.recipe.instructions}/><br/><br/>
            <input type="submit" value="Edit Recipe"/>
          </form>
        </body>
      </html>
    )
  }
}

module.exports = Edit;