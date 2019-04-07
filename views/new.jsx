var React = require('react');

class New extends React.Component {
    render() {

    let actionAttribute = `/recipes`

        return(
            <form method="POST" action={actionAttribute}>
                Title: <input type="text" name="title" /><br/>
                Ingredients:<input type="text" name="ingredients"/><br/>
                Instructions: <input type="instructions" name="instructions"/><br/>
                <input type="submit" value="Click to submit"/>
            </form>
            )
    }
}

module.exports = New;