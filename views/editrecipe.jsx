const React = require('react')

class EditRecipe extends React.Component {
    render() {
        let backButtonURL = "/recipes/" + this.props.index
        let actionEditURL = "/recipes/" + this.props.index + "?_method=put"
        let actionDeleteURL = "/recipes/" + this.props.index + "?_method=delete"

        const divStyle = {
            margin: "20px",
            padding: "10px",
            fontFamily: "Arial"
        }

        const inputStyle = {
            margin: "0 10px",
            padding: "5px"
        }

        const backButton = {
            margin: "10px 8px 10px 0",
            padding: "5px",
            fontSize: "15px",
            backgroundColor: "lightblue",
            border: "0.5px solid darkblue"
        }

        return (
            <html>
                <body>
                  <div style={divStyle}>
                    <h2>Edit recipe for {this.props.title}</h2>
                    <form method="POST" action={actionEditURL}>
                    Recipe Title: <input type="text" name="title" defaultValue={this.props.title}/><br/><br/>
                    Ingredients (separate by comma): <input type="text" name="ingredients" defaultValue={this.props.ingredients} style={inputStyle}/><br/><br/>
                    Instructions (end each step with fullstop): <input type="text" name="instructions" defaultValue={this.props.instructions} style={inputStyle}/><br/>
                    <br/>
                    <input type="submit" style={backButton}/>
                    <button style={backButton}><a href={backButtonURL}>Cancel</a></button>
                    </form>
                    <form method="POST" action={actionDeleteURL}>
                    <br/>
                    <input type="submit" value="DELETE RECIPE" style={backButton}/>
                    </form>
                  </div>
                </body>
            </html>

            )
    }
}


module.exports = EditRecipe;