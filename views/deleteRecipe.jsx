let React = require('react');

class Delete extends React.Component {
  render() {
    console.log("delete" + this.props.id);
    let override = '/recipes/' + this.props.id + '?_method=delete';
    return(
      <html>
        <body>
          <h1>Delete: {this.props.recipes.name}</h1>
          <form action={override} method="POST">
            <p>Delete recipe</p>
            <input type="submit" defaultValue="Delete"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Delete;

//make this component part of every recipe to delete the opened recipe from there