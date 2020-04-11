var React = require("react");

class Home extends React.Component {
  render() {
  
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
        </head>
        <body>
          <div className="container">
            <div className="row">
              <div className="col mt-5">
                <h2><u>THE RECIPE STORE</u></h2>
                <h4>Welcome!</h4>
                <br></br>
               
                <form method="GET" action="/view">
                  <button type="submit" className="btn btn-primary">View All Recipes</button>
                </form>
                <br></br>

                <form method="GET" action="/recipes">
                  <button type="submit" className="btn btn-primary">Add A New Recipe</button>
                </form>
                <br></br>

                <form method="GET" action="/sort/ingredient">
                  <button type="submit" className="btn btn-primary">View Recipes By Ingredients Used</button>
                </form>
                <br></br>

              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;
