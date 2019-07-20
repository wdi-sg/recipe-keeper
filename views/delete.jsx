var React = require('react');

class Delete extends React.Component {
  render() {
    var url = "/recipes/"+this.props.recipeData.id + "?_method=DELETE";
    return (
      <html>
        <body>
            <p><a href={"/recipes/"+this.props.recipeData.id}>CLICK ON ME</a></p>
            <div>
                <h1>Delete a Recipe</h1>
                <h3>Recipe No. {this.props.recipeData.id} ; {this.props.recipeData.name}</h3>
                <form action={url} method="POST">
                    <input className="submit-input-btn" type="submit" value="Delete"/>
                </form>
              </div>
        </body>
      </html>
    );
  }
}

module.exports = Delete;