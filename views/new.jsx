const React = require('react');

class New extends React.Component {
	render() {



		return(

			<div>
				<form action="/recipes" method="post">
					<input type="text" name="title" value="Enter title"/><br/>
					<input type="text" name="ingredients" value="Enter ingredients"/><br/>
					<input type="text" name="instructions" value="Enter instructions"/><br/>
					<button type="submit">Submit</button>
				</form>
			</div>

		)
	}
}

module.exports = New;