var React = require('react');

class Show extends React.Component {
  render() {
    const link = "/recipes/"+this.props.id+"?_method=put";
    const editLink = "/recipes/"+ this.props.id +"/edit";
    const deleteLink = "/recipes/"+ this.props.id + "?_method=delete";
    return (
      <html>
        <body>
          <div>
          <p>Name:</p>
            <p>{this.props.name}</p>
            <p>Ingredients:</p>
            <p>{this.props.ingredients}</p>
            <p>Instructions:</p>
            <p>{this.props.instructions}</p>
          </div>
          <a href={editLink}>Edit Page</a>
          <br/>
          <form method="POST" action={deleteLink}><br/>
            <input type="submit" value="Delete Recipe"/>
        </form>
        </body>
      </html>
    );
  }
}

module.exports = Show;