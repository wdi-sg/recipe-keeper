const React = require('react');

class Delete extends React.Component{
    render(){
        const {
            title,
            ingredients,
            instructions
        } = this.props.recipe


        return(
            <html>
                <body>
                  <div>
                    <h1>You have deleted this recipe: </h1>
                    <ol>
                        <li>Title: {title}</li>
                        <li>Ingredients: {ingredients}</li>
                        <li>Instructions: {instructions}</li>
                    </ol>
                  </div>

                   <form action="/recipes" method="get" id="home">
                         <button type = "reload">
                            Back to homepage
                        </button>
                    </form>
                </body>
              </html>
            )
    }
}
module.exports = Delete