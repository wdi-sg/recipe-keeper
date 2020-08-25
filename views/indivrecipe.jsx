const React = require('react')

class IndivRecipe extends React.Component {
    render() {
        let {title, ingredients, instructions, index} = this.props
        let ingredientsList = ingredients.split(",")
        let instructionsList = instructions.split(".")
        instructionsList.pop()

        let ingredientsHTML = ingredientsList.map((item)=>{
            return <li>{item}</li>
        })

        let instructionsHTML = instructionsList.map((item)=>{
            return <li>{item}.</li>
        })

        let recipeEdit = "/recipes/"+index+"/edit"
        return (
            <html>
                <body>
                  <div>
                  <h1>{title}</h1>
                  <ul>
                  {ingredientsHTML}
                  </ul>
                  <ol>
                  {instructionsHTML}
                  </ol>
                  <p><a href={recipeEdit}>Edit/delete this recipe</a></p>
                  <p><a href="/recipes/">Back to homepage</a></p>


                  </div>
                </body>
            </html>

            )
    }
}


module.exports = IndivRecipe;