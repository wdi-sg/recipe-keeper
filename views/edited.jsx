const React = require('react');

class Edited extends React.Component{
    render(){

        const {
            title,
            ingredients,
            instructions
        } = this.props.recipe

        console.log(this.props.recipe)

        return(
            <html>
                <body>
                  <div>
                    <h1>Edited recipe!</h1>
                    <ol>
                        <li>{title}</li>
                        <li>{ingredients}</li>
                        <li>{instructions}</li>
                    </ol>

                    <form action="/recipes" method="get" id="home">
                     <button type = "reload">
                        Back to homepage
                    </button>
                    </form>
                  </div>
                </body>
              </html>
            )
    }
}
module.exports = Edited;