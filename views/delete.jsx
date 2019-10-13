
var React = require('react');

class Delete extends React.Component {
  render() {
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        </head>
        <body>
            <h1>To delete {this.props.title}</h1>
                <form action={"/allrecipes/"+this.props.id+"?_method=delete"} method="POST">
                    <h1>Press button below to delete.</h1>
                    <button>Delete!</button>
                </form>
        </body>
      </html>
    );
  }
}

module.exports = Delete;