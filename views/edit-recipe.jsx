var React = require("react");

class EditRecipe extends React.Component {
  render() {
    let recipeArr = this.props.recipeJson.recipes;
    let ingredArr = this.props.ingredJson.ingredientsJson;
    let id = this.props.id;

    let indexNum = recipeArr.findIndex((element) => {
      return element.id === id;
    })

    let link = "/recipes/" + id + "/edit?_method=put";

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
                  <h2><u>EDIT RECIPE</u></h2>
                  <br></br>
                  <p>
                    <em>
                      <font color="red">{this.props.comments}</font>
                    </em>
                  </p>
                  <h4>Title:</h4>
                  <br></br>
                  <div>
                    <input type="text" name="title" value={recipeArr[indexNum].title} className="form-control" />
                  </div>
                  <br></br>
                  <h4>Choose Up To 5 Ingredients:</h4>
                  <br></br>
                  <div>
                    <select className="custom-select" name="ingred-1" value={recipeArr[indexNum].ingredients[0]}>
                      {ingredNameArrOption}
                    </select>
                  </div>
                  <br></br>
                  <div>
                    <select className="custom-select" name="ingred-2" value={recipeArr[indexNum].ingredients[1]}>
                      {ingredNameArrOption}
                    </select>
                  </div>
                  <br></br>
                  <div>
                    <select className="custom-select" name="ingred-3" value={recipeArr[indexNum].ingredients[2]}>
                      {ingredNameArrOption}
                    </select>
                  </div>
                  <br></br>
                  <div>
                    <select className="custom-select" name="ingred-4" value={recipeArr[indexNum].ingredients[3]}>
                      {ingredNameArrOption}
                    </select>
                  </div>
                  <br></br>
                  <div>
                    <select className="custom-select" name="ingred-5" value={recipeArr[indexNum].ingredients[4]}>
                      {ingredNameArrOption}
                    </select>
                  </div>
                  <br></br>
                  <h4>Instructions:</h4>
                  <br></br>
                  <textarea className="form-control" aria-label="With textarea" name="instructions" value={recipeArr[indexNum].instructions}></textarea>
                  <br></br>
                  <input name="id" type="hidden" value={id}/>
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

module.exports = EditRecipe;
