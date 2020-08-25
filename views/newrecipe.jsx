const React = require('react')

class NewRecipe extends React.Component {
    render() {
        const inputStyle = {
            width: "300px"
        }

        return (
            <html>
                <body>
                  <div>
                    <form method="POST" action="/recipes">
                    Recipe Title: <input type="text" name="title"/><br/>
                    Ingredients (separate by comma): <input type="text" name="ingredients" style={inputStyle}/><br/>
                    Instructions (separate by fullstop): <input type="text" name="instructions" style={inputStyle}/><br/>
                    <input type="submit"/>
                    </form>
                  </div>
                </body>
            </html>

            )
    }
}


module.exports = NewRecipe;