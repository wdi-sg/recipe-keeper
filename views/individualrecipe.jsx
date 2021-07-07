var React = require("react");
const Nav = require("./navbar");
const Script = require("./script")
class IndividualRecipe extends React.Component {
  render() {
    let recipeArr = this.props.recipelist;
    
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
          <Nav />
          <div className="container text-center pt-5">
            <h1 className="text-center display-3">
              {this.props.recipepage.name}
            </h1>
            <div className="row mt-5">
              <div className="col-6 border-bottom">
                <h3>Ingredients:</h3>
                <p>{(this.props.recipepage.ingredients)}</p>
              </div>
              <div className="col-6 border-bottom pb-4">
                <h3>Instructions:</h3>
                <p>{this.props.recipepage.instructions}</p>
              </div>
            </div>
            <div className=" text-center well d-flex justify-content-around justify-content-center mt-5 " style={{width: "300px", margin:"0 auto"}}>
              <a
                className="btn btn-primary btn-lg text-light "
                href={
                  "/" + (recipeArr.indexOf(this.props.recipepage) + 1) + "/edit"
                }
              >
                Edit
              </a>

             
                <a
                className="btn btn-danger btn-lg text-light"
                  href={
                    "/" +
                    (recipeArr.indexOf(this.props.recipepage) + 1) +
                    "/delete"
                  }
                >
                  Delete
                </a>
              
          
                <a className="btn btn-info btn-lg text-light" href="/home">
                  Back
                </a>
          
            </div>
          </div>
          <Script/>
        </body>
      </html>
    );
  }
}

module.exports = IndividualRecipe;
