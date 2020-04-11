const React = require('react');

const Ingredients = (ingObj) => {
  let ing = ingObj.ingObj;
  return (
    <React.Fragment>
      {Object.keys(ing).map(id => {
        let igdName = `ing-${id}`;
        let qtyName = `qty-${id}`;
        let ingPlace = id === 1 ? "like 'bell peppers, yellow, chopped'" : "";
        let qtyPlace = id === 1 ? "like '3 large', or '2 kg', or '1 cup'" : "";

        return (
          <React.Fragment key={id}>
            <div className="form-group form-row">
              <div className="col">
                <input
                  className="ingredient form-control"
                  name={igdName}
                  placeholder={ingPlace}
                  defaultValue={ing[id].ing}
                  />
              </div>
              <div className="col">
                <input
                  className="quantity form-control"
                  name={qtyName}
                  placeholder={qtyPlace}
                  defaultValue={ing[id].qty}
                  />
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
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

          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h1>{recipeHeader}</h1>
              </div>
            </div>

            <div className="row">
              <div className="col">

                <form method="POST" action={recipeAction} id="recipeform">
                  <div className="form-group row">
                    <div className="col">
                      <label className="h5" htmlFor="recipename">Recipe Name</label>
                      <input className="form-control"
                             name="recipename"
                             id="recipename"
                             defaultValue={recipeName}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-row">
                      <div className="col">
                        <label className="h5">Ingredient</label>
                      </div>
                      <div className="col">
                        <label className="h5">Quantity</label>
                      </div>
                    </div>

                    <div id="ingredientlist">
                      <Ingredients ingObj={this.props.recipe.ingredients}/>
                    </div>
                    <div className="row">
                      <div className="col">
                        <button
                          className="btn btn-secondary btn-block"
                          id="increase">Add More Ingredients</button>
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col">
                      <label className="h5" htmlFor="instructions">Instructions</label>
                      <textarea
                        className="form-control"
                        name="instructions"
                        id="instructions"
                        rows="10"
                        style={{height: "85%"}}
                        defaultValue={recipeInst}/>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block">
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
