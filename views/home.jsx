var React = require('react');

class Home extends React.component {
	render() {
		
		return (
			<body>
            Recipe Title: <span><strong>{this.props.recipes[0].title}</strong></span><br/>
            Ingredients: <span><strong>{this.props.recipes[0].ingredients}</strong></span><br/>
            Instructions: <span><strong>{this.props.recipes[0].instructions}</strong></span><br/>
            </body>
         	)
	}
}

module.exports = Home;