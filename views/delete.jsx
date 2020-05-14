var React = require('react');

class Delete extends React.Component {
  render() {
    console.log("deleting");
    var url = "/recipes/" +this.props.i + "/delete?_method=delete";
    return (
      <html>
        <body>
          <div>
            <form method="POST" action={url}>
                <button type="delete">Delete this recipe</button>
            </form>
          </div>
        </body>
      </html>

    );
  }
}

module.exports = Delete;