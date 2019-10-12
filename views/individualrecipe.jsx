var React = require("react");

class IndividualRecipe extends React.Component {
  render() {
   let recipeArr = this.props.recipelist
   
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous"
          ></link>
        </head>
        <body>
          <div className="container text-center pt-5">
            <h1 className="text-center display-3">{this.props.recipepage.name}</h1>
            <div className="row pt-5">
              <div className="col-6">
                <h3>Ingredients:</h3>
                <p>{this.props.recipepage.ingredients}</p>
              </div>
              <div className="col-6">
                <h3>Instructions:</h3>
                <p>{this.props.recipepage.instructions}</p>
              </div>
            </div>
            <div className="btn-group d-flex justify-content-around pt-4">
              <button className="btn btn-primary btn-lg">
                <a
                  className="text-light"
                  href={"/" + (recipeArr.indexOf(this.props.recipepage) + 1)+ "/edit"}
                >
                  Edit
                </a>
              </button>

              <button className="btn btn-danger btn-lg">
                <a className="text-light" href={"/" + (recipeArr.indexOf(this.props.recipepage) + 1)+ "/delete"}>
                  Delete
                </a>
              </button>
              <button className="btn btn-info btn-lg">
                <a className="text-light" href="/home">
                  Back
                </a>
              </button>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = IndividualRecipe;
