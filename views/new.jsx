var React = require('react');
var DefaultLayout = require('./layouts/default');
class New extends React.Component {
  render() {
    return (

          <DefaultLayout title="Add a New Recipe">



                  { this.props.warning }
            <form method="POST" action="../recipes">
             <br/>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Recipe Title:</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" name="recipeTitle"/>
                </div>
                  <br/>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Ingredients:</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="ingredients">
                  </textarea>
                </div>
                  <br/>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Instructions</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="instructions">
                  </textarea>
                </div>
                  <br/>
                  <input type="submit"  class="btn btn-primary mb-2" value="Submit"/>
            </form>
          </DefaultLayout>
    );
  }
}

module.exports = New;