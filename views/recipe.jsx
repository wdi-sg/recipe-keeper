var React = require('react');
var DefaultLayout = require('./layouts/default');

class Recipe extends React.Component {

  render() {

    return (
      <DefaultLayout title="This Recipe">
        <h1>Individual Recipe</h1>
        <h2>{this.props.title}</h2>
        <h2>{this.props.ingredients}</h2>
        <h2>{this.props.instructions}</h2>

      </DefaultLayout>
    );
  }
}

module.exports = Recipe;