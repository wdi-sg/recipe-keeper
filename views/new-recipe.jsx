var React = require("react");

class NewRecipe extends React.Component {
  render() {
    let id = parseInt(this.props.lastId) + 1;
    let link = "/recipes/" + { id };
    let value = ["", "", "", "", ""];

    if (this.props.ingredients) {
      for (let i=0; i<this.props.ingredients.length; i++) {
        value[i] = JSON.parse(JSON.stringify(this.props.ingredients[i]));
      }
    }

    let ingredArr = this.props.ingredientsJson;
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
                <form method="POST" action={link}>
                  <h2>
                    <u>ADD A NEW RECIPE</u>
                  </h2>
                  <br></br>
                  <p>
                    <em>
                      <font color="red">{this.props.comments}</font>
                    </em>
                  </p>

                  <h4>Title:</h4>
                  <br></br>
                  <div>
                    <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      className={`form-control`}
                      defaultValue={this.props.title}
                      required
                    />
                    <div class="invalid-feedback">
                      Please input a recipe title.
                    </div>
                  </div>
                  <br></br>
                  <h4>Choose Up To 5 Ingredients:</h4>
                  <br></br>
                  <div>
                    <select
                      className="custom-select"
                      name="ingred-1"
                      value={value[0]}
                      required
                    >
                      {ingredNameArrOption}
                    </select>
                  </div>
                  <br></br>
                  <div>
                    <select className="custom-select" name="ingred-2" value={value[1]}>
                      {ingredNameArrOption}
                    </select>
                  </div>
                  <br></br>
                  <div>
                    <select className="custom-select" name="ingred-3" value={value[2]}>
                      {ingredNameArrOption}
                    </select>
                  </div>
                  <br></br>
                  <div>
                    <select className="custom-select" name="ingred-4" value={value[3]}>
                      {ingredNameArrOption}
                    </select>
                  </div>
                  <br></br>
                  <div>
                    <select className="custom-select" name="ingred-5" value={value[4]}>
                      {ingredNameArrOption}
                    </select>
                  </div>
                  <br></br>
                  <h4>Instructions:</h4>
                  <br></br>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    name="instructions"
                    placeholder="Instructions"
                    defaultValue={this.props.instructions}
                    required
                  ></textarea>
                  <br></br>

                  <input
                    type="submit"
                    value="Submit"
                    className="form-control btn btn-primary"
                  />
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

module.exports = NewRecipe;
