const React = require("react");

class DeletePage extends React.Component {
  render() {
    console.log(this.props.id)
    return (
       <html>
        <body>
          <div>
          DELETE RECIPE {this.props.id}?
            <form method="POST" action={"/recipes/" + this.props.id + "?_method=delete"}>
              <input type="submit" value="delete the recipe" />
            </form>
          </div>
        </body>
      </html>
      )
  }
}

module.exports = DeletePage
