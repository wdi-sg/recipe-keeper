var React = require('react');
var Layout = require('./layout');

class RecipeEdit extends React.Component {
  render() {

    let recipeTitle = this.props.ccb.title;
    // let recipeInstructions = this.props.ccb.instructions.map(item => {
    //    return
    //         <p> {item} </p>

    //                         });

    let recipeInstructions = this.props.ccb.instructions.map(item => {
                              return <div>
                              <label for="instructions">Step</label>
                              <input type="text" class="form-control" name = "instructions"id="recipename" value={item} />
                              </div>
                            });

    let recipeIngredients = this.props.ccb.ingredients.map(item => {
                              return   <div class="col-md-3">
                                  <label for="ingredients">Ingredient</label>
                                  <input type="text" class="form-control" name = "ingredients"id="recipename" value={item}/>
                                 </div>
                            });

    let recipeImage = this.props.ccb.img;

    let recipeId = this.props.ccb.id;

    return (
      <Layout>
        <div>
            <h2> Edit {recipeTitle} Recipe</h2>

            <form method="POST" action="/recipe/change">
              <div class="form-group row" >
                <input type="text" class="form-control" name = "id "id="recipename" value={recipeId} readonly="readonly" style={{display: 'none'}}/>
                <h3 class="col-12"> List of Ingredients </h3>
                <h4 class="col-12"> Note: There is no need to fill up every box. </h4>
                    {recipeIngredients}
                <div class="col-md-3">
                  <label for="ingredients">Ingredient</label>
                  <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                </div>

                <div class="col-md-3">
                  <label for="ingredients">Ingredient</label>
                  <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                </div>

                <div class="col-md-3">
                  <label for="ingredients">Ingredient</label>
                  <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                </div>

                <div class="col-md-3">
                  <label for="ingredients">Ingredient</label>
                  <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                </div>
              </div>

                <div class="form-group">
                    <h3> Instructions </h3>
                    {recipeInstructions}
                    <label for="instructions">Step</label>
                    <input type="text" class="form-control" name = "instructions"id="instructions" />
                    <label for="instructions">Step</label>
                    <input type="text" class="form-control" name = "instructions"id="instructions" />
                    <label for="instructions">Step</label>
                    <input type="text" class="form-control" name = "instructions"id="instructions" />
                    <label for="instructions">Step</label>
                    <input type="text" class="form-control" name = "instructions"id="instructions" />
                    <label for="instructions">Step</label>
                    <input type="text" class="form-control" name = "instructions"id="instructions" />

                </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
      </Layout>
    );
  }
}

module.exports = RecipeEdit;