var React = require("react");

class NewRecipe extends React.Component {
  render() {
    let ingredArr = this.props.ingredients;
    let ingredNameArrOption = ingredArr.map((element) => {
      return <option>{element.name}</option>;
    });
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
                <form method="POST" action="/recipes/new">
                  <h2>Add A New Recipe</h2>
                  <br></br>
                  <h4>Title:</h4>
                  <br></br>
                  <div>
                    <input type="text" name="title" placeholder="Title" className="form-control" />
                  </div>
                  <br></br>
                  <h4>Choose Up To 5 Ingredients:</h4>
                  <br></br>
                  <div>
                    <select className="custom-select" name="ingred-1">
                      {ingredNameArrOption}
                    </select>
                  </div>
                  <br></br>
                  <div>
                    <select className="custom-select" name="ingred-2">
                      {ingredNameArrOption}
                    </select>
                  </div>
                  <br></br>
                  <div>
                    <select className="custom-select" name="ingred-3">
                      {ingredNameArrOption}
                    </select>
                  </div>
                  <br></br>
                  <div>
                    <select className="custom-select" name="ingred-4">
                      {ingredNameArrOption}
                    </select>
                  </div>
                  <br></br>
                  <div>
                    <select className="custom-select" name="ingred-5">
                      {ingredNameArrOption}
                    </select>
                  </div>
                  <br></br>
                  <h4>Instructions:</h4>
                  <br></br>
                  {/* <input type="text" name="instructions" placeholder="Instructions" className="form-control" /> */}
                  <textarea className="form-control" aria-label="With textarea" name="instructions" placeholder="Instructions"></textarea>
                  <br></br>
                  <input type="submit" value="Submit" className="form-control btn btn-primary" />
                </form>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = NewRecipe;
