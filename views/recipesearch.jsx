var React = require('react');

class RecipeSearch extends React.Component {
  render() {
    return (
        <div>
            <h2> Search for Recipe </h2>

            <form method="POST" action="/recipes/search">
              <div class="form-group" >
                <label for="recipename">Recipe Name</label>
                <input type="text" class="form-control" id="recipename" placeholder="Chicken Rice"/>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    );
  }
}

module.exports = RecipeSearch;