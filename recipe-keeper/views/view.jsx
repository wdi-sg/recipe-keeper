var React = require('react');

var Layout = require('./layout')

class View extends React.Component {
  render() {
    let id = "/recipes/"+this.props.id;

    return (
        <Layout>
          <div className="container">
          <h1>This is {this.props.recipes.title}</h1>

            <div className="form-group">
            <h5>Title: </h5>
            <p>{this.props.recipes.title}</p>
            </div>

            <div className="form-group">
            <h5> Ingredients: </h5>
            <p>{this.props.recipes.ingredients}</p>
            </div>

            <div className="form-group">
            <h5>Instructions: </h5>
            <p>{this.props.recipes.instructions}</p>
            </div>

          </div>
      </Layout>
    );
  }
}

module.exports = View;