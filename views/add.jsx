var React = require('react');
var DefaultLayout = require('./layouts/default');

class Add extends React.Component {
  render() {

    return (
            <DefaultLayout title="Add a New Recipe">
                <form className="add" action="/recipes" method="POST">
                    Recipe Title: <input className="form-control" name="recipeTitle"/><br/>
                    Ingredients: <input className="form-control" name="ingredients"/><br/>
                    Instructions: <input className="form-control" name="instructions"/><br/>
                    <input className="btn btn-dark" type="submit" value="Add new Recipe"/>
                </form>
            </DefaultLayout>
    );
  }
}

module.exports = Add;