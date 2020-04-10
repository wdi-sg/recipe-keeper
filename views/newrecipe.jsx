const React = require('react');

const Ingredients = (obj) => {
  let list = obj.list;
  return (
    <React.Fragment>
      {list.map(item => {
        let igdname = `ing-${item.id}`;
        let qtyname = `qty-${item.id}`;

        return (
          <React.Fragment key={item.id}>
            <div className="form-group form-row">
              <div className="col">
                <input className="ingredient form-control"
                       name={igdname}
                       placeholder="like 'chicken breast, diced'"
                       defaultValue={item.ing}
                       />
              </div>
              <div className="col">
                <input className="quantity form-control"
                       name={qtyname}
                       placeholder="like '1 kg, 2 pieces, or 3 cups'"
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

    return (
      <html>
        <head>
          <link rel="stylesheet"
                href="../static/bootstrap.min.css"
                />
          <script src="../static/form.js" />
        </head>

        <body>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1> Add a Recipe!</h1>
              </div>
            </div>

            <div className="row">
              <div className="col">
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

                  <div id="ingredientlist" className="form-group">
                    <div className="form-row">
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
                        <button className="btn btn-secondary btn-block" id="increase">Add More Ingredients</button>
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

                  <button type="submit" className="btn btn-primary btn-lg btn-block">Add Recipe</button>
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
