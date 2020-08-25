const React = require('react')

class EditRecipe extends React.Component {
    render() {
        const inputStyle = {
            width: "300px"
        }
        let actionEditURL = "/recipes/" + this.props.index + "?_method=put"
        let actionDeleteURL = "/recipes/" + this.props.index + "?_method=delete"
        return (
            <html>
                <body>
                  <div>
                    <form method="POST" action={actionEditURL}>
                    Recipe Title: <input type="text" name="title" value={this.props.title}/><br/><br/>
                    Ingredients (separate by comma): <input type="text" name="ingredients" value={this.props.ingredients} style={inputStyle}/><br/><br/>
                    Instructions (end each step with fullstop): <input type="text" name="instructions" value={this.props.instructions} style={inputStyle}/><br/>
                    <br/>
                    <input type="submit"/>
                    </form>
                    <form method="POST" action={actionDeleteURL}>
                    <br/>
                    <input type="submit" value="DELETE RECIPE"/>
                    </form>
                  </div>
                </body>
            </html>

            )
    }
}


module.exports = EditRecipe;