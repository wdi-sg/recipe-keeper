var React = require('react');
const recipejson = require('../recipe.json');

class RecipeSearch extends React.Component {
  render(req) {

    // let recipeId = this.props.ccb.id;
    // var url = '/recipes/' + recipeId;

    var number = recipejson.recipes[0].id;
    var url = `/recipes/${number}`;
    console.log("THIS IS" + url);

    return (
        <div>
            <h2> Search for Recipe </h2>

            <form method="POST" action={url}>
              <div class="form-group" >
                <label for="recipeId">Recipe Number</label>
                <input type="text" class="form-control" name = "recipeId"id="recipeId" placeholder="Chicken Rice"/>
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
  }
}

module.exports = RecipeSearch;