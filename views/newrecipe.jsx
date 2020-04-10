var React = require('react');

const Ingredients = (obj) => {
  let list = obj.list;
  return (
    <React.Fragment>
      {list.map(item => {
        let igdname = `ing-${item.id}`;
        let qtyname = `qty-${item.id}`;

        return (
          <React.Fragment key={item.id}>
            <div className="form-group row">
              <div className="col">
                <input className="ingredient form-control"
                       name={igdname}
                       defaultValue={item.ingredient}
                       />
              </div>
              <div className="col">
                <input className="quantity form-control"
                       name={qtyname}
                       defaultValue={item.qty}
                       />
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

class NewRecipe extends React.Component {
  render() {
    let recipeName = this.props.recipe.name;
    let recipeInst = this.props.recipe.instructions;
    console.log("main", recipeName, recipeInst);

    return (
      <html>
        <head>
          <link rel="stylesheet"
                href="../files/bootstrap.min.css"
                />
          <script src="../files/form.js" />
        </head>

        <body>
          <div className="container">
            <h1> Add a Recipe!</h1>
            <form method="POST" action="/recipes" id="newrecipe">
              <div className="form-group row">
                <div className="col">
                  <label className="h4" htmlFor="recipename">Recipe Name</label>
                  <input className="form-control"
                         name="recipename"
                         id="recipename"
                         defaultValue={recipeName}/>
                </div>
              </div>

              <div id="ingredientlist">
                <div className="form-group row">
                  <div className="col">
                    <label className="h4">Ingredient</label>
                  </div>
                  <div className="col">
                    <label className="h4">Quantity</label>
                  </div>
                </div>
                <Ingredients list={this.props.recipe.ingredients}/>
                <div className="row">
                  <div className="col">
                    <button id="increase">Add More Ingredients</button>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col">
                  <label className="h4" htmlFor="instructions">Instructions</label>
                  <textarea className="form-control"
                            name="instructions"
                            id="instructions"
                            defaultValue={recipeInst}/>
                </div>
              </div>

              <button type="submit">Add Recipe</button>
            </form>

          </div>
        </body>

      </html>
    );
  }
}

module.exports = NewRecipe;
