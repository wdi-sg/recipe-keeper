var React = require('react');

class Delete extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
          <h1>Are you sure you want to delete {this.props.id} ?</h1>
          <form action={"/recipes/" + this.props.id+'?_method=delete'} method="POST">
          <input type="submit" value="Submit"/>
          </form>
          </div>
          </body>
          </html>
    );
  }
}

module.exports = Delete;