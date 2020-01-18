var React = require('react');

class New extends React.Component {
  render() {
  	return (
  		<form method="POST" action="/recipes">
            Add a Recipe:
            <div>
            Title: 
            <input type="text" name="title"/>
            </div>
            <div>
            Ingredients:
            <input type="text" name="ingredients"/>
            </div>
            <div>
            Instructions:
            <input type="text" name="instructions"/>
            </div>
            <div>
            <input type="submit" value="Submit"/>
            </div>
        </form>
  	)
  }
}

module.exports = New;