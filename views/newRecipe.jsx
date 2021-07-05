var React = require('react');
var DefaultLayout = require('./recipecss');

class newRecipe extends React.Component {

  render(props){

      return (
        <DefaultLayout>
            <React.Fragment>
                  <h1>Create a new recipe</h1>
                  <div className="form-group col-6 ">
                    <form action="/api/recipes/newRecipe" method="post">
                      <input id="title" type="text" name="title" className="form-control mb-1" placeholder="Please enter the title." />
                      <input id="ingredients" type="text" className="form-control mb-1" name="ingredients" placeholder="What are the ingredients?" />
                      <input id="instructions" type="text" className="form-control mb-1" name="instructions" placeholder="What are the instructions?" />
                      <input type="submit" />
                    </form>
                  </div>
            </React.Fragment>
        </DefaultLayout>
      );
    }
  }

  module.exports = newRecipe;