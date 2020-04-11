const React = require("react");

class Onerecipe extends React.Component {
  render() {

    return (
      <html lang="en" dir="ltr">
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/style.css"/>
        </head>

        <body>
          <div className="container-fluid">
            <div className="row">

            <div className="black col-md-6 left-col">

              <div className="contents">
              <h1 className="recipe-title">{this.props.title}</h1>
            <em>Created on {this.props.created_on}</em>

            <br/><a href="/">
              <button style={{ margin: "10px" }} className="btn btn-secondary">
                Back to Home
              </button>
            </a>


              </div>
            
          </div>

          <div className="col-md-6 right-col text-center">
          <div className="contents">
          <h3>Ingredients</h3>
            <p>{this.props.ingredients}</p>
            

            <h3>Instructions</h3>
            <p>{this.props.instructions}</p>
            <form
              method="POST"
              action={`?_method=delete`}
            >
              <input name="id" type="hidden" value={this.props.id} />
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>

          </div>

          </div>

            </div>
          </div>


        </body>
      </html>
    );
  }
}

module.exports = Onerecipe;
