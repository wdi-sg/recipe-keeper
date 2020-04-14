var React = require('react');
class Id extends React.Component {
  render() {
    let currentId = "'" + this.props.currentId + "'";
    let index = String(parseInt(this.props.currentId) + 1);
    let deleteLink = "/recipes/" + this.props.currentId + "?_method=delete";
    let editLink = "/recipes/" + index + "/edit";
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
        <body>
          <div className="container">
            <div className = "row justify-content-center">
              <h1>Title: {this.props.currentRecipe.title}</h1>
            </div>
            <div className = "row justify-content-center">
              <p>Ingredients: {this.props.currentRecipe.ingredients}</p>
            </div>
            <div className = "row justify-content-center">
              <p>Instructions: {this.props.currentRecipe.instructions}</p>
            </div>
            <div className = "row justify-content-center">
              <p>Date Created: {this.props.currentRecipe.created}</p>
            </div>
            <div className = "row justify-content-center">
              <form method="GET" action={editLink}>
                <input type="submit" value="Edit Recipe"/>
              </form>
            </div>
            <div className = "row justify-content-center">
              <form method="POST" action={deleteLink}>
                <input name="id" type="hidden" value={currentId}/>
                <input type="submit" value="Delete Recipe"/>
              </form>
            </div>
          </div>
          <div className = "row justify-content-center">
            <a href="/recipes">Back to Index</a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Id;