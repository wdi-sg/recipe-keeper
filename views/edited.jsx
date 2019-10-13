const React = require('react');

class Edited extends React.Component{
    render(){

        const {
            title,
            ingredients,
            instructions
        } = this.props.recipe

        console.log("recipe item" + this.props.recipe)
        console.log("recipe item id" + this.props.id)

        return(
            <html>
                <body>
                  <div>
                    <h1>Edited recipe!</h1>
                    <ol>
                        <li>Title: {title}</li>
                        <li>Ingredients: {ingredients}</li>
                        <li>Instructions: {instructions}</li>
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