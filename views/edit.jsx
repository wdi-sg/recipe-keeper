let React = require('react');

class Edit extends React.Component {
    render() {
        return(
            <html>
            <body>
            <h1>Editing</h1>
            <form action={"/recipes/" + this.props.id + '?_method=put'} method="POST">
            <p>Id :</p><input type="number" name="id" defaultValue={this.props.recipes.id} required/><br/>
            <p>Title :</p><input type= "text" name="title" defaultValue={this.props.recipes.title} required/><br/>
            <p>Ingredients :</p><input type="text" name="ingredients" defaultValue={this.props.recipes.ingredients} required/><br/>
            <p>Instructions :</p><input type="text" name="instructions" defaultValue={this.props.recipes.instructions} required/><br/>
            <input type="submit" defaultValue="submit"/>
            </form>
            </body>
            </html>
    );
  }
}

module.exports = Edit;