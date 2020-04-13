var React = require('react');

class Edit extends React.Component {
  render() {
            console.log(this.props);
            var url = "/recipes/" + (parseInt(this.props.id)-1) + "?_method=put"
            var delUrl = "/recipes/" + (parseInt(this.props.id)-1) + "?_method=delete"
    return (
      <html>
        <body>
            <div>
                <h1>This is the recipe for {this.props.title}</h1>
                <a>The ingredients are: {this.props.ingredients}</a>
                <br></br>
                <a>The instructions are as follows: {this.props.instructions}</a>
                <br></br>
                <div>
                <form method="POST" action={url}>
                    <input type = "text" name="title" placeholder="recipe name"></input>
                    <input type = "text" name="ingredients" placeholder="ingredients"></input>
                    <input type = "text" name="instructions" placeholder="instructions"></input>
                    <input type="submit" value="update this recipe!"></input>
                </form>
                <form method="POST" action={delUrl}>
                    <input type="submit" value="Delete this recipe!"></input>
                </form>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;