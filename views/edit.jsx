const React = require('react');

class Edit extends React.Component {
	render () {
		const link = `/recipes/${this.props.index}?_method=put`
		return (
			<div>
				<form action={link} method="post">
					<input type="text" name="new_title" value="Enter new title"/><br/>
					<input type="text" name="new_ingredients" value="Enter new ingredients"/><br/>
					<input type="text" name="new_instructions" value="Enter new instructions"/><br/>
					<button type="submit">Submit Changes</button>				
				</form>
			</div>
			)
	}
}

module.exports = Edit;