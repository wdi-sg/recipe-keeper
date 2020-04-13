var React = require('react');

class Delete extends React.Component {
  render() {
            console.log(this.props);
            var url = "/recipes/" + (parseInt(this.props.id)) + "?_method=delete"
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
                    <input type="submit" value="Delete this recipe!"></input>
                </form>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Delete;