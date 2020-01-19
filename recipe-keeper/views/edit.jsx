var React = require('react');

var Layout = require('./layout')

class Edit extends React.Component {
  render() {
    let id = "/recipes/"+this.props.id+"?_method=put";

    return (
        <Layout>
          <div className="container">
          <h1>Edit Recipes {this.props.recipes.title}</h1>
            <form method="POST" action={id}>

            <div className="form-group">
            <label>Title: </label>
            <input className="form-control" name="title" type="text" value={this.props.recipes.title}/>
            </div>

            <div className="form-group">
            <label> Ingredients: </label>
            <textarea className="form-control" name="ingredients" value={this.props.recipes.ingredients}>
            </textarea>
            </div>

            <div className="form-group">
            <label>Instructions: </label>
            <textarea className="form-control" name="instructions" value={this.props.recipes.instructions}>
            </textarea>
            </div>

            <button className="btn btn-danger btn-customized" type="submit">Edit
            </button>

            </form>
          </div>
      </Layout>
    );
  }
}

module.exports = Edit;