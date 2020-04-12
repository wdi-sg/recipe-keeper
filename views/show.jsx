var React = require('react');

class Show extends React.Component {
  render() {
    const editLink = '/recipes/'+ this.props.id +"/edit";
    const deleteLink = "/recipes/"+ this.props.id + "?_method=delete";
    const homeLink = '/recipes';
    return (
      <html>
        <body>
          <div>
            <p>Recipe Number</p>
            <p>{this.props.id}</p>
            <p>Recipe Name</p>
            <p>{this.props.recipeName}</p>
            <p>Ingredients</p>
            <p>{this.props.ingredients}</p>
            <p>Instructions</p>
            <p>{this.props.instructions}</p>
          </div>
            <a href={editLink}>Edit Page</a>
            <form method="POST" action={deleteLink}>
            <input type="submit" value="delete recipe"/>
          </form>
          <a href={homeLink}>Go back Home</a>
        </body>
      </html>
    );
  }
}

module.exports = Show;