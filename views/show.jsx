var React = require('react');

class Show extends React.Component {
  render() {
  	return (
  		<div>
	  		<h1>Recipe: {this.props.title}</h1>
	  		<h1>Ingredients: {this.props.ingredients}</h1>
	  		<h1>Instructions: {this.props.instructions}</h1>
	  	</div>
  	)
  }
}

module.exports = Show;