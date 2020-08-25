const React = require('react')

class NewRecipe extends React.Component {
    render() {

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
            margin: "10px 0",
            padding: "5px",
            fontSize: "15px"
        }

        return (
            <html>
                <body>
                  <div style={divStyle}>
                    <h2>Submit a new recipe!</h2>
                    <form method="POST" action="/recipes">
                    Recipe Title: <input type="text" name="title" autoComplete="off" style={inputStyle}/><br/><br/>
                    Ingredients (separate by comma): <input type="text" name="ingredients" style={inputStyle} autoComplete="off"/><br/><br/>
                    Instructions (end each step with fullstop): <input type="text" name="instructions" autoComplete="off" style={inputStyle}/><br/><br/>
                    <input type="submit"/>
                    </form>
                    <button style={backButton}><a href="/recipes/">Back to Homepage</a></button>
                  </div>
                </body>
            </html>

            )
    }
}


module.exports = NewRecipe;