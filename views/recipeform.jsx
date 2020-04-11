const React = require('react');

const Ingredients = (ingObj) => {
  let ing = ingObj.ingObj;
  return (
    <>
      { Object.keys(ing).map(id => {
        let igdName = `ing-${id}`;
        let qtyName = `qty-${id}`;
        let ingPlace = (id === "1") ? "like 'bell peppers, yellow, chopped'" : "";
        let qtyPlace = (id === "1") ? "like '3 large', or '2 kg', or '1 cup'" : "";

        return (
          <React.Fragment key={id}>
            <div className="form-group form-row" id={igdName}>
              <div className="col-5">
                <input
                  className="ingredient form-control"
                  name={igdName}
                  placeholder={ingPlace}
                  defaultValue={ing[id].ing}
                  />
              </div>
              <div className="col-5">
                <input
                  className="quantity form-control"
                  name={qtyName}
                  placeholder={qtyPlace}
                  defaultValue={ing[id].qty}
                  />
              </div>
              <div className="col-2">
                <button
                  type="button"
                  className="btn btn-small btn-outline-success btn-block del-input"
                  id={id}>
                  Remove
                </button>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

class RecipeForm extends React.Component {
  render() {
    let recipeName = this.props.recipe.name;
    let recipeInst = this.props.recipe.instructions;
    let recipeHeader = (this.props.recipe.id === 0) ? "Add a Recipe!" : "Change this Recipe!";
    let recipeSubmit = (this.props.recipe.id === 0) ? "Add Recipe" : "Update Recipe";
    let recipeMethod = (this.props.recipe.id === 0) ? "" : `${this.props.id}?_method=put`;
    let recipeAction = "/recipes/"+ recipeMethod;

    return (
      <html>
        <head>
          <link rel="stylesheet"
                href="/static/bootstrap.min.css"
                />
          <script src="/static/form.js" />
        </head>
        <body>

          <div className="container text-center">
            <div className="row">
              <div className="col my-3">
                <h1 className="text-success">{recipeHeader}</h1>
              </div>
            </div>

            <div className="row">
              <div className="col">

                <form method="POST"
                      action={recipeAction}
                      id="recipeform"
                      >
                  <div className="form-group row">
                    <div className="col">
                      <label className="h5 text-success" htmlFor="recipename">Recipe Name</label>
                      <input className="form-control"
                             name="recipename"
                             id="recipename"
                             defaultValue={recipeName}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-5">
                        <label className="h5 text-success">Ingredient</label>
                      </div>
                      <div className="col-5">
                        <label className="h5 text-success">Quantity</label>
                      </div>
                    </div>

                    <div id="ingredientlist">
                      <Ingredients ingObj={this.props.recipe.ingredients}/>
                    </div>
                    <div className="row">
                      <div className="col">
                        <button
                          type="button"
                          className="btn btn-outline-success btn-block"
                          id="increase">Add More Ingredients</button>
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col">
                      <label className="h5 text-success"
                             htmlFor="instructions">Instructions</label>
                      <textarea
                        className="form-control"
                        name="instructions"
                        id="instructions"
                        rows="10"
                        style={{height: "85%"}}
                        defaultValue={recipeInst.join("\n")}/>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col">
                      <button
                        type="submit"
                        className="btn btn-success btn-lg btn-block">
                        {recipeSubmit}
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = RecipeForm;
