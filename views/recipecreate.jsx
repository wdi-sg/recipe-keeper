var React = require('react');

class RecipeCreate extends React.Component {
  render() {

    return (
        <div>
            <h2> Submit Your Own Recipe </h2>

            <form method="POST" action="/recipe/create">
              <div class="form-group row" >
                <h3 class="col-12"> List of Ingredients </h3>
                <h4 class="col-12"> Note: There is no need to fill up every box. </h4>
                  <div class="col-md-3">
                    <label for="ingredients">Ingredient 1</label>
                    <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                  </div>

                  <div class="col-md-3">
                    <label for="ingredients">Ingredient 2</label>
                    <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                  </div>

                  <div class="col-md-3">
                    <label for="ingredients">Ingredient 3</label>
                    <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                  </div>

                  <div class="col-md-3">
                    <label for="ingredients">Ingredient 4</label>
                    <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                  </div>

                  <div class="col-md-3">
                    <label for="ingredients">Ingredient 5</label>
                    <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                  </div>

                  <div class="col-md-3">
                    <label for="ingredients">Ingredient 6</label>
                    <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                  </div>

                  <div class="col-md-3">
                    <label for="ingredients">Ingredient 7</label>
                    <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                  </div>

                  <div class="col-md-3">
                    <label for="ingredients">Ingredient 8</label>
                    <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                  </div>

                  <div class="col-md-3">
                    <label for="ingredients">Ingredient 9</label>
                    <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                  </div>

                  <div class="col-md-3">
                    <label for="ingredients">Ingredient 10</label>
                    <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                  </div>

                  <div class="col-md-3">
                    <label for="ingredients">Ingredient 11</label>
                    <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                  </div>

                  <div class="col-md-3">
                    <label for="ingredients">Ingredient 12</label>
                    <input type="text" class="form-control" name = "ingredients"id="recipename"/>
                  </div>

              </div>

                <div class="form-group">
                    <h3> Instructions </h3>
                    <label for="instructions">Step 1</label>
                    <input type="text" class="form-control" name = "instructions"id="instructions"/>
                    <label for="instructions">Step 2</label>
                    <input type="text" class="form-control" name = "instructions"id="instructions"/>
                    <label for="instructions">Step 3</label>
                    <input type="text" class="form-control" name = "instructions"id="instructions"/>
                    <label for="instructions">Step 4</label>
                    <input type="text" class="form-control" name = "instructions"id="instructions"/>
                    <label for="instructions">Step 5</label>
                    <input type="text" class="form-control" name = "instructions"id="instructions"/>
                    <label for="instructions">Step 6</label>
                    <input type="text" class="form-control" name = "instructions"id="instructions"/>
                    <label for="instructions">Step 7</label>
                    <input type="text" class="form-control" name = "instructions"id="instructions"/>
                    <label for="instructions">Step 8</label>
                    <input type="text" class="form-control" name = "instructions"id="instructions"/>
                    <label for="instructions">Step 9 </label>
                    <input type="text" class="form-control" name = "instructions"id="instructions"/>
                    <label for="instructions">Step 10</label>
                    <input type="text" class="form-control" name = "instructions"id="instructions"/>

                </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
  }
}

module.exports = RecipeCreate;