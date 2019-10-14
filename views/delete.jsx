var React = require('react');

class Delete extends React.Component {
  render() {
    return (
      <html>
        <head>
        </head>
        <body>
              <form action={"/recipes/"+this.props.inputId+"?_method=delete"} method="POST">
                 <p>Are you sure?</p>
                  <button>Delete</button>
                </form>
        </body>
      </html>
    );
  }
}

module.exports = Delete;