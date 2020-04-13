var React = require('react');

var Layout = require('./layout')

class Form extends React.Component {
  render() {
    return (
        <Layout>
          <div className="container">
          <h1>Add Recipes</h1>

            <form method="POST" action="/recipes">

            <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" name="title"/>
            </div>

            <div className="form-group">
            <label>Ingredients</label>
            <textarea className="form-control" name="ingredients"></textarea>
            </div>

            <div className="form-group">
            <label>Instructions</label>
            <textarea className="form-control" name="instructions"></textarea>
            </div>

            <button type="submit" className="btn btn-danger btn-customized">Create</button>

            <a href="/recipes" className="btn btn-primary ml-4">Back</a>

            </form>
          </div>
          </Layout>
    );
  }
}

module.exports = Form;