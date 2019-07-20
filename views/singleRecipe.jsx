var React = require('react');
var Layout = require('./layout.jsx');

class SingleRecipe extends React.Component {
  render() {
    return (
        <Layout>
            <ul>
                <li>Recipe Number: {this.props.id}</li>
                <li>Recipe Title: {this.props.title}</li>
                <li>{this.props.ingredients}</li>
                <li>Instructions: {this.props.instructions}</li>
            </ul>
        </Layout>
    );
  }
}



module.exports = SingleRecipe;