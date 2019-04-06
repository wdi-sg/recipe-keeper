var React = require('react');

class RecipeSearch extends React.Component {
  render() {

    // let recipeId = this.props.ccb.id;
    // var url = '/recipes/' + recipeId;

    var number = 5;
    var url = `/recipes/${number}`;
    // console.log(recipeId);
    console.log(url);

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